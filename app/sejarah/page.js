'use client'; // Add this to mark the file as a client component

import { useState } from 'react';

export default function SejarahPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
  const pdfData = [
    {
      title: 'tesssss',
      previewUrl: 'https://drive.google.com/file/d/1YvPb0e7li2d7e9CPLVXjrnAftBv9fSWh/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1YvPb0e7li2d7e9CPLVXjrnAftBv9fSWh',
    },
    {
      title: 'PDF 2',
      previewUrl: 'https://drive.google.com/file/d/FILE_ID_6/view?usp=sharing',
      downloadUrl: 'https://drive.google.com/file/d/FILE_ID_6/view?usp=sharing',
    },
    {
      title: 'PDF 3',
      previewUrl: 'https://drive.google.com/file/d/FILE_ID_11/view?usp=sharing',
      downloadUrl: 'https://drive.google.com/file/d/FILE_ID_11/view?usp=sharing',
    },
    {
      title: 'PDF 4',
      previewUrl: 'https://drive.google.com/file/d/FILE_ID_16/view?usp=sharing',
      downloadUrl: 'https://drive.google.com/file/d/FILE_ID_16/view?usp=sharing',
    },
  ];

  // Filter PDFs based on search term
  const filteredPdfs = pdfData.filter((pdf) =>
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/wave.jpg)' }}
    >
      <h1 className="text-3xl mb-6 text-white mt-28 md:mt-32">Sejarah Materi</h1>

      {/* Search input for filtering PDFs */}
      <div className="mb-6 w-full max-w-xs">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for materials..."
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Table for displaying filtered PDFs */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPdfs.map((pdf, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{pdf.title}</td>
                <td className="px-4 py-2 space-x-4">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <h2 className="text-2xl">PDF Preview</h2>
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
