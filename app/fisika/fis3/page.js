'use client'; 
import { useState } from 'react';

export default function FisikaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Fgel');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Fgel: [
      {
        title: 'Gelombang Bunyi',
        previewUrl: 'https://drive.google.com/file/d/13x8FElPZ-uB9MgJDvd8Z5GVaJprw0Ir8/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=13x8FElPZ-uB9MgJDvd8Z5GVaJprw0Ir8',
      },
      {
        title: 'Gelombang Elektromagnetik',
        previewUrl: 'https://drive.google.com/file/d/1SoVqfqJQwlh9J8PNAROjAVIhgcf60Not/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1SoVqfqJQwlh9J8PNAROjAVIhgcf60Not',
      },
      {
        title: 'Gelombang',
        previewUrl: 'https://drive.google.com/file/d/1yIds_6rMPTzy88lfnkZOMucvtG4oB4bI/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1yIds_6rMPTzy88lfnkZOMucvtG4oB4bI',
      },
      {
        title: 'Optik',
        previewUrl: 'https://drive.google.com/file/d/1y2XxxcLNgqGXDn3lvbNxXXtz0W5rB3ns/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1y2XxxcLNgqGXDn3lvbNxXXtz0W5rB3ns',
      },
    ],
    Flis: [
      {
        title: 'Induksi Elektromagnetik',
        previewUrl: 'https://drive.google.com/file/d/1JyKLpK0b0dUJGpFt28zgG75PPwldy42c/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1JyKLpK0b0dUJGpFt28zgG75PPwldy42c',
      },
      {
        title: 'Listrik Bolak-Balik',
        previewUrl: 'https://drive.google.com/file/d/1OtLHAoPlOITyMbUncxn8dBZvI49lxiJ0/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1OtLHAoPlOITyMbUncxn8dBZvI49lxiJ0',
      },
      {
        title: 'Listrik Statis',
        previewUrl: 'https://drive.google.com/file/d/1UGf3ACbe8X_WRvCXyN0AfDhtParrKEu_/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1UGf3ACbe8X_WRvCXyN0AfDhtParrKEu_',
      },
      {
        title: 'Induksi Magnet',
        previewUrl: 'https://drive.google.com/file/d/14J0OT6TBuFzmt0PmReg0PUWfp85tC20t/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=14J0OT6TBuFzmt0PmReg0PUWfp85tC20t',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-indigo-950 font-bold mt-28 md:mt-32">Fisika 3</h1>
      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Fgel">Fisika Gelombang</option>
          <option value="Flis">Fisika Listrik</option>
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
