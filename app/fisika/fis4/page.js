'use client'; 

import { useState } from 'react';

export default function FisikaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Fis4');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Fis4: [
      {
        title: 'Atom',
        previewUrl: 'https://drive.google.com/file/d/1UNn22IoyDbJe855xLBClDKk9eX864rvj/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1UNn22IoyDbJe855xLBClDKk9eX864rvj',
      },
      {
        title: 'Teori Kuantum',
        previewUrl: 'https://drive.google.com/file/d/1AQnKpNBtLRqt02EtXPCh1a6tVcWl4Drj/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1AQnKpNBtLRqt02EtXPCh1a6tVcWl4Drj',
      },
      {
        title: 'Gas & Termodinamika',
        previewUrl: 'https://drive.google.com/file/d/1mdd8ne1mw5bFitjWpblw_T0tewSdHraT/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1mdd8ne1mw5bFitjWpblw_T0tewSdHraT',
      },

    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold mt-28 md:mt-32">Fisika 4</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Fis4">Fisika 4</option>
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
