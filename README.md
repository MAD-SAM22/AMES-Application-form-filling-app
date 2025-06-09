# Arabic to English Form Translator

A desktop application built with Electron that helps users fill out forms by translating Arabic text to English and generating Word documents. Perfect for visa applications and official documentation where bilingual input is required.

## Features

- Real-time translation from Arabic to English
- Comprehensive form fields for:
  - Personal Information
  - Travel History
  - Family Information (Parents, Spouse, Siblings, Children)
  - Emergency Contacts
  - Education History
  - Employment Details
  - English Language Proficiency
- Automated Word document generation using templates
- Support for multiple choice fields with predefined translations
- Mobile-friendly form layout
- Modern and responsive user interface
- Error handling and retry mechanism for translation failures
- Save progress and generate documents in DOCX format

## Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Clone the repository:

```powershell
git clone <repository-url>
cd uncle-hatem-ar2en
```

2. Install dependencies:

```powershell
npm install
```

## Usage

1. Start the application:

```powershell
npm start
```

2. Fill in the Arabic text in the form fields on the left side
3. Click "Translate to English" to translate the entered text
4. Review and edit the English translations if needed
5. Click "Generate Document" to create a Word document with the translations
6. Choose where to save the generated document

## Form Sections

1. **Application Details**

   - Main Applicant Name
   - Current Visa Expiration Date

2. **Personal Information**

   - Date of Birth
   - Email Address
   - Mobile Number
   - Home Country Address
   - Australian Address
   - Marital Status
   - Medical Conditions
   - Criminal Record

3. **Travel History**

   - Country of Origin
   - Country of Destination
   - Travel Dates
   - Purpose of Visit

4. **Family Information**

   - Parents' Details
   - Spouse/Partner Details
   - Siblings Information
   - Children Information

5. **Emergency Contacts**

   - Home Country Contact
   - Australian Contact

6. **Education History**

   - High School Details
   - University/College Details

7. **Employment History**
   - Current Employment Status
   - Work Experience
   - Employer Details

## Technical Details

- Built with Electron.js
- Uses Google Translate API for translations
- Implements docxtemplater for Word document generation
- Features retry mechanism for handling network issues
- Supports template-based document generation

## Project Structure

```
uncle-hatem-ar2en/
├── main.js              # Main Electron process
├── renderer.js          # Renderer process logic
├── preload.js          # Preload script for security
├── index.html          # Main application UI
├── styles.css          # Application styling
├── template.docx       # Word document template
├── TranslationService.js # Translation service implementation
└── package.json        # Project dependencies and scripts
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the Electron.js team for the framework
- Thanks to the docxtemplater team for document generation capabilities
- Special thanks to all contributors and users of this application
