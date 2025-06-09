// Before running, make sure you have the @google-cloud/translate library installed:
// npm install @google-cloud/translate

// And set up your Google Cloud Project and authentication.
// For more details, refer to: https://cloud.google.com/translate/docs/setup

const axios = require('axios');

class TranslationService {
    constructor() {
        // Using the MyMemory Translation API
        this.baseUrl = 'https://api.mymemory.translated.net/get';
        this.fields = [
            "الاسم الكامل", "تاريخ الميلاد", "رقم الهاتف", "البريد الإلكتروني",
            "العنوان في بلدك", "العنوان في أستراليا", "الحالة الاجتماعية",
            "معلومات طبية", "سجل جنائي", "معلومات عن التعليم"
        ];
        this.maxRetries = 3;
        this.retryDelay = 1000; // 1 second
        this.batchSize = 5; // Process 5 items at a time
    }

    // Helper method to delay execution
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Helper method to process items in batches
    async processBatch(items, processFunction) {
        const results = [];
        for (let i = 0; i < items.length; i += this.batchSize) {
            const batch = items.slice(i, i + this.batchSize);
            const batchResults = await Promise.all(
                batch.map(item => processFunction(item))
            );
            results.push(...batchResults);
            // Add a small delay between batches to avoid rate limiting
            if (i + this.batchSize < items.length) {
                await this.delay(500);
            }
        }
        return results;
    }

    async translateText(text, src = 'ar', dest = 'en') {
        // Translate text from source language to destination language
        if (!text || text.trim() === "") {
            return "";
        }

        let lastError;
        for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
            try {
                const response = await axios.get(this.baseUrl, {
                    params: {
                        q: text,
                        langpair: `${src}|${dest}`
                    }
                });

                if (response.data && response.data.responseData && response.data.responseData.translatedText) {
                    return response.data.responseData.translatedText;
                } else {
                    throw new Error('Invalid response from translation API');
                }
            } catch (error) {
                lastError = error;
                console.warn(`Translation attempt ${attempt} failed:`, error.message);
                
                if (attempt < this.maxRetries) {
                    // Exponential backoff
                    const delay = this.retryDelay * Math.pow(2, attempt - 1);
                    console.log(`Retrying in ${delay}ms...`);
                    await this.delay(delay);
                }
            }
        }
        
        throw new Error(`Translation failed after ${this.maxRetries} attempts. Last error: ${lastError.message}`);
    }

    async translateFields(fields = this.fields) {
        try {
            return await this.processBatch(fields, async (field) => {
                try {
                    const translation = await this.translateText(field);
                    return { original: field, translated: translation };
                } catch (error) {
                    console.error(`Failed to translate field "${field}":`, error.message);
                    return { original: field, translated: null, error: error.message };
                }
            });
        } catch (error) {
            console.error('Error in translateFields:', error);
            throw error;
        }
    }

    // New method to detect language
    async detectLanguage(text) {
        try {
            const request = {
                parent: this.parent,
                content: text,
            };

            const [response] = await this.client.detectLanguage(request);
            return response.languages[0];
        } catch (error) {
            console.error('Error detecting language:', error);
            throw error;
        }
    }

    // New method to get supported languages
    async getSupportedLanguages() {
        try {
            const request = {
                parent: this.parent,
                displayLanguageCode: 'en',
            };

            const [response] = await this.client.getSupportedLanguages(request);
            return response.languages;
        } catch (error) {
            console.error('Error getting supported languages:', error);
            throw error;
        }
    }
}

// Example Usage (replace 'YOUR_PROJECT_ID' with your actual Google Cloud Project ID)
async function main() {
    const projectId = 'YOUR_PROJECT_ID'; // Replace with your GCP project ID
    const translationService = new TranslationService(projectId);

    // Example of translating a single text
    try {
        const arabicText = "مرحبا بالعالم";
        const translatedText = await translationService.translateText(arabicText);
        console.log(`Translated text: ${translatedText}`);
    } catch (error) {
        console.error("Failed to translate single text:", error.message);
    }

    // Example of translating multiple fields
    try {
        const results = await translationService.translateFields();
        console.log('Translation results:');
        results.forEach(result => {
            if (result.error) {
                console.log(`Failed to translate "${result.original}": ${result.error}`);
            } else {
                console.log(`"${result.original}" -> "${result.translated}"`);
            }
        });
    } catch (error) {
        console.error("Failed to translate fields:", error.message);
    }
}

// Uncomment the following line to run the example
// main();

module.exports = TranslationService; 