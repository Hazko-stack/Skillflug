'use client'; 

import { useState } from 'react';

export default function GeografiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Geografi1');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Geografi1: [
      {
        title: 'Atmosfer',
        previewUrl: 'https://drive.google.com/file/d/1SgvZ4Etiw92waFgZODuFgWV8avGw9nXa/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1SgvZ4Etiw92waFgZODuFgWV8avGw9nXa',
      },
      {
        title: 'Gempa Bumi',
        previewUrl: 'https://drive.google.com/file/d/1S9-I15kBgzQszac7f_qEnTe_2XRFb8tU/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1S9-I15kBgzQszac7f_qEnTe_2XRFb8tU',
      },
      {
        title: 'Hidrosfer',
        previewUrl: 'https://drive.google.com/file/d/11NZ4JBG1HG52YlYpcOZoNgjR5brgUUpM/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=11NZ4JBG1HG52YlYpcOZoNgjR5brgUUpM',
      },
      {
        title: 'Ilmu Geografi',
        previewUrl: 'https://drive.google.com/file/d/147ICLLv7Mgsc82DxOSXKL93Sev9Ouxiz/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=147ICLLv7Mgsc82DxOSXKL93Sev9Ouxiz',
      },
      {
        title: 'Lithosfer',
        previewUrl: 'https://drive.google.com/file/d/1oxSPM9dBObofQFTVzTm9uvpUwfspmteu/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1oxSPM9dBObofQFTVzTm9uvpUwfspmteu',
      },
      {
        title: 'Pedosfer',
        previewUrl: 'https://drive.google.com/file/d/1ShuZbw8e7SfVgHKMkveX-biEiqjhNR84/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1ShuZbw8e7SfVgHKMkveX-biEiqjhNR84',
      },
    ],
    Geografi2: [
      {
        title: 'Antroposfer',
        previewUrl: 'https://drive.google.com/file/d/1abp04lG7wT9SizNf5TcGjX4qLzHM6GeX/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1abp04lG7wT9SizNf5TcGjX4qLzHM6GeX',
      },
      {
        title: 'Biosfer',
        previewUrl: 'https://drive.google.com/file/d/1kt-OzxI6zjoB3vzLWI4fru3pS302V1n2/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1kt-OzxI6zjoB3vzLWI4fru3pS302V1n2',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 space-y-4"
      style={{
        backgroundImage: 'url(/images/space.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold mt-28 md:mt-32">Geografi Materi</h1>
      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Geografi1">Geografi 1</option>
          <option value="Geografi2">Geografi 2</option>
        </select>
      </div>

      <div className="space-y-4 w-full">
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

      {/* Modal for PDF preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full md:w-2/3 lg:w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600"
            >
              X
            </button>
            <h2 className="text-2xl text-indigo-950">PDF Preview</h2>
            <div className="pdf-preview-container">
              {/* iframe with reduced size and scrolling */}
              <iframe
                src={pdfUrl}
                width="100%"
                height="300px"  // Reduced height
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
