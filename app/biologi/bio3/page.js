'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function BiologiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Af');

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
    Af: [
      {
        title: 'Sistem Ekskresi',
        previewUrl: 'https://drive.google.com/file/d/1elno2qRn0q_KemcfWFe7rK3WhHsFn0qK/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1elno2qRn0q_KemcfWFe7rK3WhHsFn0qK',
      },
      {
        title: 'Sistem Hormon',
        previewUrl: 'https://drive.google.com/file/d/1Q-ImUnnV4WJOc7Li8qW_DYKOIJp4YX6a/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Q-ImUnnV4WJOc7Li8qW_DYKOIJp4YX6a',
      },
      {
        title: 'Sistem Imun',
        previewUrl: 'https://drive.google.com/file/d/1ryq4w89cvA4mCXh22jpJQSeZK6olrI3p/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1ryq4w89cvA4mCXh22jpJQSeZK6olrI3p',
      },
      {
        title: 'Sistem Indera',
        previewUrl: 'https://drive.google.com/file/d/1UN8wlcM9UZ-1dx9OuXii8aTxmbIUGv8M/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1UN8wlcM9UZ-1dx9OuXii8aTxmbIUGv8M',
      },
      {
        title: 'Sistem Reproduksi',
        previewUrl: 'https://drive.google.com/file/d/1Hh-TNY87G6PyUAQBIZYlukmKdV8pM7Nw/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Hh-TNY87G6PyUAQBIZYlukmKdV8pM7Nw',
      },
      {
        title: 'Sistem Saraf',
        previewUrl: 'https://drive.google.com/file/d/1r81_pICxIq_Fp_iFzcZ5QK_fE4XWzk2a/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1r81_pICxIq_Fp_iFzcZ5QK_fE4XWzk2a',
      },
    ],
    Emb: [
      {
        title: 'Pertumbuhan & Perkembangan Hewan',
        previewUrl: 'https://drive.google.com/file/d/1r7yHkMGFoyxHPrwz5__2KwfOl0G0FK2g/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1r7yHkMGFoyxHPrwz5__2KwfOl0G0FK2g',
      },
      {
        title: 'Pertumbuhan & Perkembangan Tumbuhan',
        previewUrl: 'https://drive.google.com/file/d/1XjHUmbeoJpXjKpJIFm8nle3G9gjkC_Wu/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1XjHUmbeoJpXjKpJIFm8nle3G9gjkC_Wu',
      },
    ],
    Met: [
      {
        title: 'Anabolisme',
        previewUrl: 'https://drive.google.com/file/d/1Z4oVTr7k_6-GzGAIetv0PPcVDgGsUre7/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Z4oVTr7k_6-GzGAIetv0PPcVDgGsUre7',
      },
      {
        title: 'Enzim',
        previewUrl: 'https://drive.google.com/file/d/16eMQCtlhGtrTd04Q9AHlgTOBry6tUsqd/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=16eMQCtlhGtrTd04Q9AHlgTOBry6tUsqd',
      },
      {
        title: 'Katabolisme',
        previewUrl: 'https://drive.google.com/file/d/1C5D9d46nBubvgpzPw7B6sLpL0rDpGERQ/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1C5D9d46nBubvgpzPw7B6sLpL0rDpGERQ',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-violet-900 font-bold">Biologi 3</h1>



      {/* Dropdown to select chapter */}
      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Af">Anatomi & Fisiologi</option>
          <option value="Emb">Embriologi</option>
          <option value="Met">Metabolisme</option>
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
