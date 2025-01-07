'use client'; 

import { useState } from 'react';

export default function KimiaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Kimia3');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Kimia3: [
      {
        title: 'Larutan Asam-Basa',
        previewUrl: 'https://drive.google.com/file/d/1ImUIiA2KqRczhvI2MdMVejDGKS8PfKYq/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1ImUIiA2KqRczhvI2MdMVejDGKS8PfKYq',
      },
      {
        title: 'Larutan Garam dan Hidrolisis',
        previewUrl: 'https://drive.google.com/file/d/1gyUK7nIrEZgQ8XjPFTYibH9fGUs2uX9i/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1gyUK7nIrEZgQ8XjPFTYibH9fGUs2uX9i',
      },
      {
        title: 'Sifat Koligatif Larutan',
        previewUrl: 'https://drive.google.com/file/d/17YVkgVL6543RI4YcF2UZEkTuLJjA8aFp/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=17YVkgVL6543RI4YcF2UZEkTuLJjA8aFp',
      },
      {
        title: 'Kimia Koloid',
        previewUrl: 'https://drive.google.com/file/d/1mL1DEvkRyRj42DJ_mpGZg7YsTJdl1QXl/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1mL1DEvkRyRj42DJ_mpGZg7YsTJdl1QXl',
      },
      {
        title: 'Kelarutan',
        previewUrl: 'https://drive.google.com/file/d/1xbAtjP-WMod3z9jGEcnTC0iiWV33RPjk/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1xbAtjP-WMod3z9jGEcnTC0iiWV33RPjk',
      },
      {
        title: 'Larutan Penyangga',
        previewUrl: 'https://drive.google.com/file/d/1Bzg_PtMfHltNIS6XXs-j3gooOf0NATEF/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Bzg_PtMfHltNIS6XXs-j3gooOf0NATEF',
      },
      {
        title: 'Larutan Elektrolit',
        previewUrl: 'https://drive.google.com/file/d/1t3wcYsgw0s7WxqSiD3uhyqLfalW5Lulk/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1t3wcYsgw0s7WxqSiD3uhyqLfalW5Lulk',
      },
      {
        title: 'Reaksi dan Stoikiometri Larutan',
        previewUrl: 'https://drive.google.com/file/d/1h4N_khxII9rzBxk0iW9F0WC5MlW2QWId/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1h4N_khxII9rzBxk0iW9F0WC5MlW2QWId',
      },
      {
        title: 'Teori Asam-Basa',
        previewUrl: 'https://drive.google.com/file/d/1-VnDdMlm_tF5SDYsn1YcZp2ntjKYhbJG/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1-VnDdMlm_tF5SDYsn1YcZp2ntjKYhbJG',
      },
      {
        title: 'Titrasi Asam-Basa',
        previewUrl: 'https://drive.google.com/file/d/1impx8-1bCTzNlMW77qXqCgExqtoJenVb/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1impx8-1bCTzNlMW77qXqCgExqtoJenVb',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-white mt-28 md:mt-32">Kimia 3</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >

          <option value="Kimia3">Kimia 3</option>

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
