'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function BiologiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('BiologiEnv');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    BiologiEnv: [
      {
        title: 'Animalia',
        previewUrl: 'https://drive.google.com/file/d/1_Et2Q0myzY5YEqB6evTMlrLo6Ak3bDYA/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1_Et2Q0myzY5YEqB6evTMlrLo6Ak3bDYA',
      },
      {
        title: 'Athropoda',
        previewUrl: 'https://drive.google.com/file/d/1b-oajUuhWKMKZUN4bpaQgEb96g7bIT6A/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1b-oajUuhWKMKZUN4bpaQgEb96g7bIT6A',
      },
      {
        title: 'Chordata',
        previewUrl: 'https://drive.google.com/file/d/1nmXFd56FSGaAzp9-LnmazjDHGCLqnDDP/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1nmXFd56FSGaAzp9-LnmazjDHGCLqnDDP',
      },
      {
        title: 'Echinodermata',
        previewUrl: 'https://drive.google.com/file/d/1-ZDWOgOHQISLBrT-oHF-9ghkwOjOvbmo/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1-ZDWOgOHQISLBrT-oHF-9ghkwOjOvbmo',
      },
      {
        title: 'Mollusca',
        previewUrl: 'https://drive.google.com/file/d/17FFuRlRraYH9Q98wo11WoWMwdw8IPerW/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=17FFuRlRraYH9Q98wo11WoWMwdw8IPerW',
      },
      {
        title: 'Porifera & Coelenterata',
        previewUrl: 'https://drive.google.com/file/d/1jZvs2zl4nSFY7l0KACYqcNY9i2iCbKTj/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1jZvs2zl4nSFY7l0KACYqcNY9i2iCbKTj',
      },
      {
        title: 'Vermes',
        previewUrl: 'https://drive.google.com/file/d/1YvPb0e7li2d7e9CPLVXjrnAftBv9fSWh/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1YvPb0e7li2d7e9CPLVXjrnAftBv9fSWh',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold ">Biologi 1</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="BiologiEnv">Biologi Lingkungan</option>
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
            <h2 className="text-2xl text-indigo-950">PDF Preview</h2>
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
