'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function FisikaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Fisika1');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Fisika1: [
      {
        title: 'Alat Optik',
        previewUrl: 'https://drive.google.com/file/d/10N0lSp87pCpgweoJqP04iNtmVPvRJKhi/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=10N0lSp87pCpgweoJqP04iNtmVPvRJKhi',
      },
      {
        title: 'Besaran & Pengukuran',
        previewUrl: 'https://drive.google.com/file/d/1Oy6gPhc7z30vwalvzWP8bCjxmYDP2KMu/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Oy6gPhc7z30vwalvzWP8bCjxmYDP2KMu',
      },
      {
        title: 'Kalor',
        previewUrl: 'https://drive.google.com/file/d/1uQ8QirK54QLxsNWUotFAv6QzVhfkdfHQ/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1uQ8QirK54QLxsNWUotFAv6QzVhfkdfHQ',
      },
      {
        title: 'Listrik Dinamis',
        previewUrl: 'https://drive.google.com/file/d/17wYRTF1m9P9MpvSSPrTbjv8Z0zXP2Nkh/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=17wYRTF1m9P9MpvSSPrTbjv8Z0zXP2Nkh',
      },
      {
        title: 'Kinematika Gerak Lurus',
        previewUrl: 'https://drive.google.com/file/d/1bYKJdGYbssyXs8Otpg6DKL1DKtDNa7ta/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1bYKJdGYbssyXs8Otpg6DKL1DKtDNa7ta',
      },
      {
        title: 'Hukum Gerak Newton',
        previewUrl: 'https://drive.google.com/file/d/1h2j2HnqFRMUvx8PL5b0dO0GGs3C3UuEq/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1h2j2HnqFRMUvx8PL5b0dO0GGs3C3UuEq',
      },
      {
        title: 'Optika',
        previewUrl: 'https://drive.google.com/file/d/1-VjeHLB4VhzSKJ1EV1HJET0kqHj5klg3/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1-VjeHLB4VhzSKJ1EV1HJET0kqHj5klg3',
      },
      {
        title: 'Suhu',
        previewUrl: 'https://drive.google.com/file/d/19BgZ16hwC_tKAKnM6c9DuK-hMWPY1tqO/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=19BgZ16hwC_tKAKnM6c9DuK-hMWPY1tqO',
      },
      {
        title: 'Vektor',
        previewUrl: 'https://drive.google.com/file/d/1T0zexOLIbp4oJy-ix15eApm4zuXHYzxR/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1T0zexOLIbp4oJy-ix15eApm4zuXHYzxR',
      },
      
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-white mt-28 md:mt-32">Fisika 1</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Fisika1">Fisika 1</option>
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
