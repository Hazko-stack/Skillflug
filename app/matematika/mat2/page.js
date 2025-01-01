'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function MatematikaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Geo');

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
    Geo: [
      {
        title: 'Geometri',
        previewUrl: 'https://drive.google.com/file/d/1Bm729qHAADC8Wj5y2-l28eXs-llKmmQy/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Bm729qHAADC8Wj5y2-l28eXs-llKmmQy',
      },
      {
        title: 'Matriks',
        previewUrl: 'https://drive.google.com/file/d/16aS0v_beP4cttT9Q-dbHmwLeROvBq8JN/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=16aS0v_beP4cttT9Q-dbHmwLeROvBq8JN',
      },
      {
        title: 'Tranformasi Geometri',
        previewUrl: 'https://drive.google.com/file/d/138TJuNEd0JngzPy7AOnPDoCVx5fc554S/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=138TJuNEd0JngzPy7AOnPDoCVx5fc554S',
      },
      {
        title: 'Vektor',
        previewUrl: 'https://drive.google.com/file/d/1x66N5VEHE-_2-r_FjCzAscw2WDTaz5_K/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1x66N5VEHE-_2-r_FjCzAscw2WDTaz5_K',
      },

    ],
    Trig: [
      {
        title: 'Trigonometri Dasar',
        previewUrl: 'https://drive.google.com/file/d/1MnbkD_89aE0-NWM2jA4aJ_Vs9v3e6SKS/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1MnbkD_89aE0-NWM2jA4aJ_Vs9v3e6SKS',
      },
      {
        title: 'Identitas dan Persamaan Trigonometri',
        previewUrl: 'https://drive.google.com/file/d/1WMJwm1AyRLNhCrfm1iNdtIleKqrqVZtk/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1WMJwm1AyRLNhCrfm1iNdtIleKqrqVZtk',
      },
      {
        title: 'Dalil-Dalil Trigonometri',
        previewUrl: 'https://drive.google.com/file/d/1Io7X-WlFjvaJHZ2Dju9jCYZ8_uEXSV4j/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Io7X-WlFjvaJHZ2Dju9jCYZ8_uEXSV4j',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-white mt-28 md:mt-32">Matematika 2</h1>

      {/* Dropdown to select chapter */}
      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Geo">Geometri</option>
          <option value="Trig">Trigonometri</option>
        </select>
      </div>

      <div className="space-y-4 w-full">
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
