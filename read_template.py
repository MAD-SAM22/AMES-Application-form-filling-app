from docx import Document
import sys
doc = Document("template.docx")
for p in doc.paragraphs:
    print(f"Text: {p.text}")
