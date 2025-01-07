'use client';

import { useState } from 'react';

export default function SejarahPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = [
    {
      title: 'Ilmu Sejarah',
      previewUrl: 'https://drive.google.com/file/d/1751KaZo27OX-QDLoU7mbFWpO-bNYClIE/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1751KaZo27OX-QDLoU7mbFWpO-bNYClIE',
    },
    {
      title: 'Tradisi Sejarah Masa Pra Aksara & Aksara',
      previewUrl: 'https://drive.google.com/file/d/1EVXFXUaxyVR3yD75rVzfkgz36d6SdspW/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1EVXFXUaxyVR3yD75rVzfkgz36d6SdspW',
    },
    {
      title: 'Manusia Purba & Masa Prasejarah di Indonesia',
      previewUrl: 'https://drive.google.com/file/d/1VI8yWBtFnSMJyyfsqnRL2e7hBY0RW4_x/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1VI8yWBtFnSMJyyfsqnRL2e7hBY0RW4_x',
    },
    {
      title: 'Kehidupan Awal Masyarakat Indonesia',
      previewUrl: 'https://drive.google.com/file/d/1Ep8RMFC3kx1j1NcTNP4U7UuHIH__8xFq/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1Ep8RMFC3kx1j1NcTNP4U7UuHIH__8xFq',
    },
    {
      title: 'Awal & Perkembangan Hindu-Buddha',
      previewUrl: 'https://drive.google.com/file/d/12pnZP0yAFGh3kQsGqouXaRtLQ04wDxac/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=12pnZP0yAFGh3kQsGqouXaRtLQ04wDxac',
    },
    {
      title: 'Kerajaan Hindu-Buddha di Indonesia',
      previewUrl: 'https://drive.google.com/file/d/1Tyig53wj2NleIAh9T7hV7tjVXQTwAREc/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1Tyig53wj2NleIAh9T7hV7tjVXQTwAREc',
    },
    {
      title: 'Awal & Perkembangan Islam',
      previewUrl: 'https://drive.google.com/file/d/1uWwQbVdwcvMjReXRfGe7D0DwcfKnQ9hL/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1uWwQbVdwcvMjReXRfGe7D0DwcfKnQ9hL',
    },
    {
      title: 'Kerajaan Islam di Indonesia',
      previewUrl: 'https://drive.google.com/file/d/1CcWa4liQKH3CvH_Hpsk8HHZJKmmmYuFA/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1CcWa4liQKH3CvH_Hpsk8HHZJKmmmYuFA',
    },
    {
      title: 'Kolonialisme & Imperialisme',
      previewUrl: 'https://drive.google.com/file/d/1nuXDEEde_6uRd4grO29KwueqmSPcBrCe/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1nuXDEEde_6uRd4grO29KwueqmSPcBrCe',
    },
    {
      title: 'Pendudukan Jepang di Indonesia',
      previewUrl: 'https://drive.google.com/file/d/1vSjzDZj3Y4rXu0uwu90ow-uo79eXZFph/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1vSjzDZj3Y4rXu0uwu90ow-uo79eXZFph',
    },
    {
      title: 'Nasionalisme di Indonesia',
      previewUrl: 'https://drive.google.com/file/d/1huNqdXbsZHaca8ayLY2d9eN8029U8KNP/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1huNqdXbsZHaca8ayLY2d9eN8029U8KNP',
    },
    {
      title: 'Kemerdekaan & Proklamasi Indonesia',
      previewUrl: 'https://drive.google.com/file/d/13eozoLtzcY6pBdMWCAX7_0ensg_548vb/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=13eozoLtzcY6pBdMWCAX7_0ensg_548vb',
    },
    {
      title: 'Perjuangan Mempertahankan Kemerdekaan',
      previewUrl: 'https://drive.google.com/file/d/1qaXN7SJuKpUORuaf2i6kdK0Si9u2gUuD/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1qaXN7SJuKpUORuaf2i6kdK0Si9u2gUuD',
    },
    {
      title: 'Masa Orde Lama',
      previewUrl: 'https://drive.google.com/file/d/1q15hGcTpwRkfqIi8VFT98xjKI2R4rlAV/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1q15hGcTpwRkfqIi8VFT98xjKI2R4rlAV',
    },
    {
      title: 'Masa Perang Dingin',
      previewUrl: 'https://drive.google.com/file/d/1StgPwVwf6B5orcTfH_xI6hgksL1GEqD4/preview',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1StgPwVwf6B5orcTfH_xI6hgksL1GEqD4',
    },
  ];

  const filteredPdfs = pdfData.filter((pdf) =>
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 space-y-4"
      style={{
        backgroundImage: 'url(/images/space.png)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl mb-6 text-violet-900 ">Sejarah Materi</h1>
      <div className="mb-6 w-full max-w-xs">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for materials..."
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className="space-y-4 w-full">
        {filteredPdfs.length > 0 ? (
          filteredPdfs.map((pdf, index) => (
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
          ))
        ) : (
          <div className="text-center text-white py-4">No results found.</div>
        )}
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
            <h2 className="text-2xl">PDF Preview</h2>
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
