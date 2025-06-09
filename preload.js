const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  generateDocument: (formData) => ipcRenderer.invoke('generate-document', formData),
  translateText: (text, src = 'ar', dest = 'en') => ipcRenderer.invoke('translate-text', text, src, dest)
});
