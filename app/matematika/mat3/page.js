'use client'; 

import { useState } from 'react';

export default function MatematikaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Aljabar');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Aljabar: [
      {
        title: 'Lingkaran',
        previewUrl: 'https://drive.google.com/file/d/1VXrciBuS9IjkpnZuIKdFU7iNMNNA9Muo/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1VXrciBuS9IjkpnZuIKdFU7iNMNNA9Muo',
      },
      {
        title: 'Sistem Persamaan Polinom',
        previewUrl: 'https://drive.google.com/file/d/1oDz-ezkc1tJPbvQFvjHpoJmgPvF6Ftdb/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1oDz-ezkc1tJPbvQFvjHpoJmgPvF6Ftdb',
      },

    ],
    Kalkulus: [
      {
        title: 'Turunan',
        previewUrl: 'https://drive.google.com/file/d/1XP6ocep6B1pav2kGrggBlior3MjHUl2j/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1XP6ocep6B1pav2kGrggBlior3MjHUl2j',
      },
      {
        title: 'Penerapan Turunan',
        previewUrl: 'https://drive.google.com/file/d/1tZagd7MO7meIORyaEZ5OKeEo4Ff8UdB3/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1tZagd7MO7meIORyaEZ5OKeEo4Ff8UdB3',
      },
      {
        title: 'Limit',
        previewUrl: 'https://drive.google.com/file/d/15dVBaYHu02zRizbcOXPs5AwwWt4r_MK2/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=15dVBaYHu02zRizbcOXPs5AwwWt4r_MK2',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-white mt-28 md:mt-32">Matematika 3</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Aljabar">Aljabar</option>
          <option value="Kalkulus">Kalkulus</option>

        </select>
      </div>

      <div className="space-y-4 w-full">
        {pdfData[selectedChapter]?.map((pdf, index) => (
          <div key={index} className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{pdf.title}</h2>
              <div className="space-x-4">
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
            <h2 className="text-2xl ">PDF Preview</h2>
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
