'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function KimiaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Kimia1');

  // Function to open the modal and preview PDF
  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  // Data for the PDFs (replace these links with actual Google Drive links)
  const pdfData = {
    Kimia1: [
      {
        title: 'Bentuk & Interaksi Molekul',
        previewUrl: 'https://drive.google.com/file/d/1CEonhg7OvSuqRyMLM6amT9rwAW7Qh05I/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1CEonhg7OvSuqRyMLM6amT9rwAW7Qh05I',
      },
      {
        title: 'Hukum Dasar Kimia dan Konsep Mol',
        previewUrl: 'https://drive.google.com/file/d/1MnnJh0bndXHMoMtijhzX6QSUiIpDZTOw/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1MnnJh0bndXHMoMtijhzX6QSUiIpDZTOw',
      },
      {
        title: 'Ikatan Kimia',
        previewUrl: 'https://drive.google.com/file/d/1lE_uDVvDBhWk_JAy_7oVRsKbo6K0_F2M/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1lE_uDVvDBhWk_JAy_7oVRsKbo6K0_F2M',
      },
      {
        title: 'Bilangan Kuantum',
        previewUrl: 'https://drive.google.com/file/d/1jZv0I24k0xPG4bBgrhCxlPHLDfeowVRg/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1jZv0I24k0xPG4bBgrhCxlPHLDfeowVRg',
      },
      {
        title: 'Sifat Tabel Periodik',
        previewUrl: 'https://drive.google.com/file/d/1dKvCYNpMBpASikd0HrLneub3g7E1cuWY/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1dKvCYNpMBpASikd0HrLneub3g7E1cuWY',
      },
      {
        title: 'Tata Nama Senyawa',
        previewUrl: 'https://drive.google.com/file/d/1CH0yciyY6BjrhBHndU6qPp58Dfa-HXlo/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1CH0yciyY6BjrhBHndU6qPp58Dfa-HXl',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold mt-28 md:mt-32">Kimia 1</h1>

      {/* Dropdown to select chapter */}
      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Kimia1">Kimia 1</option>

        </select>
      </div>

      <div className="space-y-4 w-full">
        {/* Display PDFs for selected chapter */}
        {pdfData[selectedChapter]?.map((pdf, index) => (
          <div key={index} className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{pdf.title}</h2>
              <div className="flex flex-wrap gap-2 justify-end">
                {/* Preview Button */}
                <button
                  onClick={() => openModal(pdf.previewUrl)}
                  className="btn btn-primary btn-sm"
                >
                  Preview
                </button>

                {/* Download Button */}
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
