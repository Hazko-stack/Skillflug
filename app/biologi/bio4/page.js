'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function BiologiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Gen');

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
    Gen: [
      {
        title: 'Replikasi DNA & Sintesis Protein',
        previewUrl: 'https://drive.google.com/file/d/1A2TAIR2aiuX2DlkUwONE8Ae2Hols3SuX/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1A2TAIR2aiuX2DlkUwONE8Ae2Hols3SuX',
      },
      {
        title: 'Pembelahan Sel',
        previewUrl: 'https://drive.google.com/file/d/1ULRE5WU5p8xSprV4seprsJ5bcTOekP6Z/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1ULRE5WU5p8xSprV4seprsJ5bcTOekP6Z',
      },
      {
        title: 'Substansi Gen',
        previewUrl: 'https://drive.google.com/file/d/14qBiB6GLdOj2XcJpY0JInJEPbvsYtGvD/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=14qBiB6GLdOj2XcJpY0JInJEPbvsYtGvD',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/wave.jpg)' }}
    >
      <h1 className="text-3xl mb-6 text-white mt-28 md:mt-32">Biologi 4</h1>



      {/* Dropdown to select chapter */}
      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Gen">Genetika</option>
        </select>
      </div>


    
      <div id='display' className="space-y-4 w-full">
        {/* Display PDFs for selected chapter */}
        {pdfData[selectedChapter]?.map((pdf, index) => (
          <div key={index} className="p-4 rounded-md shadow-lg bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">{pdf.title}</h2>
              <div className="space-x-4">
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
            <h2 className="text-2xl ">PDF Preview</h2>
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
