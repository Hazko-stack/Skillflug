'use client'; 

import { useState } from 'react';

export default function KimiaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('KimOr');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    KimOr: [
      {
        title: 'Benzena',
        previewUrl: 'https://drive.google.com/file/d/152owsldbnZ-P7Q2yRIB8T2JBYYyhlATA/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=152owsldbnZ-P7Q2yRIB8T2JBYYyhlATA',
      },
      {
        title: 'Biokimia',
        previewUrl: 'https://drive.google.com/file/d/1mh4X8x-Zy8HLyl24V3hLMk78osDYMvJq/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1mh4X8x-Zy8HLyl24V3hLMk78osDYMvJq',
      },
      {
        title: 'Hidrokarbon',
        previewUrl: 'https://drive.google.com/file/d/1gDBqrtzz4nS-Hv6dKIkDJV3_O9CSd4My/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1gDBqrtzz4nS-Hv6dKIkDJV3_O9CSd4My',
      },
      {
        title: 'Bahan Bakar Fosil',
        previewUrl: 'https://drive.google.com/file/d/1s_Kb36kWVQN3tMYKcXLNKuHV9nt6yBxr/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1s_Kb36kWVQN3tMYKcXLNKuHV9nt6yBxr',
      },
      {
        title: 'Polimer',
        previewUrl: 'https://drive.google.com/file/d/1RKYiBFox4ldLSXJFyEPFfqxUwpMRoSfQ/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1RKYiBFox4ldLSXJFyEPFfqxUwpMRoSfQ',
      },
      {
        title: 'Turunan Hidrokarbon',
        previewUrl: 'https://drive.google.com/file/d/1ohPxJRtGyah58Po-5cC5kKGDfx3RS_XR/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1ohPxJRtGyah58Po-5cC5kKGDfx3RS_XR',
      },
    ],
    KimUn: [
      {
        title: 'Kimia Unsur',
        previewUrl: 'https://drive.google.com/file/d/1qZEwPQG73tMk_SCVApjgx-n1hlfrFnv9/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1qZEwPQG73tMk_SCVApjgx-n1hlfrFnv9',
      },
      {
        title: 'Kimia Unsur Non-Logam',
        previewUrl: 'https://drive.google.com/file/d/1wR28b_LrsYbHYd9eSI2OH3I7K507YkEK/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1wR28b_LrsYbHYd9eSI2OH3I7K507YkEK',
      },
      {
        title: 'Kimia Unsur Logam',
        previewUrl: 'https://drive.google.com/file/d/1NrgpXL5UWIwjWcdVFFIi4_JJ9WTyZoMI/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1NrgpXL5UWIwjWcdVFFIi4_JJ9WTyZoMI',
      },
      {
        title: 'Kimia Unsur Radioaktif',
        previewUrl: 'https://drive.google.com/file/d/1YanTjVROk9KpZlQSuBb6T4890Q0IHiNW/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1YanTjVROk9KpZlQSuBb6T4890Q0IHiNW',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold mt-28 md:mt-32">Kimia 4</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="KimOr">Kimia Organik</option>
          <option value="KimUn">Kimia Unsur</option>
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
