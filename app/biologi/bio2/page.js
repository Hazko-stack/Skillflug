'use client'; 

import { useState } from 'react';

export default function BiologiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('AnatomiFisio');

  
  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    AnatomiFisio: [
      {
        title: 'Sistem Gerak',
        previewUrl: 'https://drive.google.com/file/d/1aDu8g8g6Xj10GwDV95KjTd_WnNTs8XII/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1aDu8g8g6Xj10GwDV95KjTd_WnNTs8XII',
      },
      {
        title: 'Makanan',
        previewUrl: 'https://drive.google.com/file/d/17ZksKLgym4NV9E5pgVZaKR-n2w8K2x3m/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=17ZksKLgym4NV9E5pgVZaKR-n2w8K2x3m',
      },
      {
        title: 'Sistem Organ Hewan',
        previewUrl: 'https://drive.google.com/file/d/1jGMXtqykMd2sy-y0MHPpI3SFbI_osz8Q/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1jGMXtqykMd2sy-y0MHPpI3SFbI_osz8Q',
      },
      {
        title: 'Sistem Pernapasan',
        previewUrl: 'https://drive.google.com/file/d/1-dxyeiMJH62nE1y-JX4eyWXzKwvWFWfx/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1-dxyeiMJH62nE1y-JX4eyWXzKwvWFWfx',
      },
      {
        title: 'Sistem Pencernaan',
        previewUrl: 'https://drive.google.com/file/d/1QSZwONp3Y5dBdSl2mIL1GMcbEZd5Hy9P/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1QSZwONp3Y5dBdSl2mIL1GMcbEZd5Hy9P',
      },
      {
        title: 'Sistem Sirkulasi',
        previewUrl: 'https://drive.google.com/file/d/1weVazR5-ryuDGfQzLNIRHEtrV_g1zmSc/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1weVazR5-ryuDGfQzLNIRHEtrV_g1zmSc',
      },
    ],
    SelJar: [
      {
        title: 'Jaringan Hewan',
        previewUrl: 'https://drive.google.com/file/d/1G3ned-E7qtDAeupt1E_zp7r-lA8ZWQZd/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1G3ned-E7qtDAeupt1E_zp7r-lA8ZWQZd',
      },
      {
        title: 'Sel',
        previewUrl: 'https://drive.google.com/file/d/1WCrIoOGm9zF0opI7t1SR36XMTY3erLKy/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1WCrIoOGm9zF0opI7t1SR36XMTY3erLKy',
      },
    ],
    Mikrobio: [
      {
        title: 'Fungi',
        previewUrl: 'https://drive.google.com/file/d/1nwg0kujoWBwgvVKgNr-reWrPpwmXYMJa/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1nwg0kujoWBwgvVKgNr-reWrPpwmXYMJa',
      },
      {
        title: 'Monera',
        previewUrl: 'https://drive.google.com/file/d/1sT6RVr9tg7YvLxECHK1Ofa_uB7dDDg4F/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1sT6RVr9tg7YvLxECHK1Ofa_uB7dDDg4F',
      },
      {
        title: 'Protista',
        previewUrl: 'https://drive.google.com/file/d/1Uf0ywo95Nsk8uLoRtq0oLxoMzZyyseJ6/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Uf0ywo95Nsk8uLoRtq0oLxoMzZyyseJ6',
      },
      {
        title: 'Virus',
        previewUrl: 'https://drive.google.com/file/d/1nP_f3nO7SV86EzA_9rH0HWJepxnRPDOF/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1nP_f3nO7SV86EzA_9rH0HWJepxnRPDOF',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold">Biologi 2</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="AnatomiFisio">Anatomi & Fisiologi</option>
          <option value="SelJar">Sel & Jaringan</option>
          <option value="Mikrobio">Mikrobiologi</option>
        </select>
      </div>


    
      <div id='display' className="space-y-4 w-full">
        {pdfData[selectedChapter]?.map((pdf, index) => (
          <div key={index} className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{pdf.title}</h2>
              <div className="flex flex-wrap gap-2 justify-end">
                <button
                  onClick={() => openModal(pdf.previewUrl)}
                  className="btn btn-primary btn-sm"
                >
                  Preview
                </button>
                <a
                  href={pdf.downloadUrl}
                  target="_blank"
                  className="btn btn-secondary btn-sm"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full md:w-2/3 lg:w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600"
            >
              X
            </button>
            <h2 className="text-2xl text-indigo-950 ">PDF Preview</h2>
            <div className="pdf-preview-container">
              <iframe
                src={pdfUrl}
                width="100%"
                height="300px"  
                frameBorder="0"
                title="PDF Preview"
              />
            </div>
            <a
              href={pdfUrl}
              target="_blank"
              className="text-blue-600 mt-4 block text-center"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
