const TranslationService = require('./TranslationService');

async function testTranslation() {
    try {
        const translationService = new TranslationService();

        console.log('Testing Free Translation API...\n');

        // Test 1: Basic translation
        console.log('Test 1: Basic Translation');
        console.log('------------------------');
        const text = 'مرحبا بالعالم';
        console.log('Original text:', text);
        const translated = await translationService.translateText(text);
        console.log('Translated text:', translated);
        console.log('\n');

        // Test 2: Translate multiple fields
        console.log('Test 2: Multiple Fields Translation');
        console.log('------------------------');
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
        console.error('Error during testing:', error);
    }
}

// Run the tests
testTranslation(); 