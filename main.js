const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const TranslationService = require('./TranslationService');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

const translationService = new TranslationService();

ipcMain.handle('generate-document', async (event, formData) => {
  try {
    const templatePath = path.join(__dirname, 'template.docx');
    const template = fs.readFileSync(templatePath);
    const zip = new PizZip(template);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Prepare data for template
    const data = formData;

    // Render the document
    doc.render(data);
    const buf = doc.getZip().generate({
      type: 'nodebuffer',
      compression: 'DEFLATE'
    });

    // Get save path from user
    const { filePath } = await dialog.showSaveDialog({
      title: 'Save Document',
      defaultPath: path.join(app.getPath('documents'), 'translated_document.docx'),
      filters: [
        { name: 'Word Document', extensions: ['docx'] }
      ]
    });

    if (filePath) {
      // Save DOCX file
      fs.writeFileSync(filePath, buf);
      return { success: true, docxPath: filePath };
    }
    return { success: false, error: 'No file path selected' };
  } catch (error) {
    console.error('Error generating document:', error);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('translate-text', async (event, text, src = 'ar', dest = 'en') => {
  try {
    const translated = await translationService.translateText(text, src, dest);
    return { success: true, translated };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
