'use client'; 

import { useState } from 'react';

export default function MatematikaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Aritmatika');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Aritmatika: [
      {
        title: 'Baris dan Deret',
        previewUrl: 'https://drive.google.com/file/d/1_zG03EQ45h-fguELwWaJI5iF6AQs4R-C/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1_zG03EQ45h-fguELwWaJI5iF6AQs4R-C',
      },
      {
        title: 'Program Linear',
        previewUrl: 'https://drive.google.com/file/d/1u23D9M7N7UlHFe2HwPRWI79Ko1rYrgHk/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1u23D9M7N7UlHFe2HwPRWI79Ko1rYrgHk',
      },
      {
        title: 'Logika Matematika',
        previewUrl: 'https://drive.google.com/file/d/1dZCslh8LUWueDUFQA6aUgV3PBgmIpvs2/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1dZCslh8LUWueDUFQA6aUgV3PBgmIpvs2',
      },
      {
        title: 'Statistika',
        previewUrl: 'https://drive.google.com/file/d/1AdbDoVfFcIjaC5oQb_fixybObuL1PMrE/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1AdbDoVfFcIjaC5oQb_fixybObuL1PMrE',
      },
    ],
    Fungsi: [
      {
        title: 'Fungsi',
        previewUrl: 'https://drive.google.com/file/d/1QTSaLyCEWeRCdPuD42uciJVefIa9kJVT/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1QTSaLyCEWeRCdPuD42uciJVefIa9kJVT',
      },
      {
        title: 'Invers dan Komposisi Fungsi',
        previewUrl: 'https://drive.google.com/file/d/12g2VlzqmiSv1FQav5a21nV2D_2ipsrl6/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=12g2VlzqmiSv1FQav5a21nV2D_2ipsrl6',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold mt-28 md:mt-32">Matematika 1</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Aritmatika">Aritmatika</option>
          <option value="Fungsi">Fungsi</option>

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
