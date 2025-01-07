'use client'; 

import { useState } from 'react';

export default function EkonomiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('Ekonomi1');

  const openModal = (url) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfUrl('');
  };

  const pdfData = {
    Ekonomi1: [
      {
        title: 'Kebutuhan & Kelangkaan',
        previewUrl: 'https://drive.google.com/file/d/1ZX9IJxeKzHE_BVgSC6GwJPX9YqRdheER/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1ZX9IJxeKzHE_BVgSC6GwJPX9YqRdheER',
      },
      {
        title: 'Permasalahan Ekonomi',
        previewUrl: 'https://drive.google.com/file/d/1NWVQrIcMY1qY27UKifwZdmNt7K78aPl_/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1NWVQrIcMY1qY27UKifwZdmNt7K78aPl_',
      },
      {
        title: 'Bentuk-Bentuk Pasar',
        previewUrl: 'https://drive.google.com/file/d/1HdQ1I01TjKsgkvzAOt6NuY60Pyn1LS1J/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1HdQ1I01TjKsgkvzAOt6NuY60Pyn1LS1J',
      },
      {
        title: 'Permintaan & Penawaran',
        previewUrl: 'https://drive.google.com/file/d/1F9HNExuhcJx7qHuqywLycmOGLvBBdvyh/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1F9HNExuhcJx7qHuqywLycmOGLvBBdvyh',
      },
      {
        title: 'Sistem Perekonomian',
        previewUrl: 'https://drive.google.com/file/d/10UZoR9EpxsmUMFRVt2bl-ZyfSv2_hzvj/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=10UZoR9EpxsmUMFRVt2bl-ZyfSv2_hzvj',
      },
    ],
    Ekonomi2: [
      {
        title: 'Perbankan',
        previewUrl: 'https://drive.google.com/file/d/135G8p1-QWNO87iIHr5K4uc_yvtnkGVlt/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=135G8p1-QWNO87iIHr5K4uc_yvtnkGVlt',
      },
      {
        title: 'Inflasi & Indeks Harga',
        previewUrl: 'https://drive.google.com/file/d/1YiEfIJoFx0acTZ5G8E50aZyBq9EEr8s2/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1YiEfIJoFx0acTZ5G8E50aZyBq9EEr8s2',
      },
      {
        title: 'Ketenagakerjaan & Pengangguran',
        previewUrl: 'https://drive.google.com/file/d/1avVHWDSL_KqoQhDXzzAuAAK9LM3VsTeR/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1avVHWDSL_KqoQhDXzzAuAAK9LM3VsTeR',
      },
      {
        title: 'Kebijakan Moneter',
        previewUrl: 'https://drive.google.com/file/d/1KtaKDnk0wC8bPZ7M5Wvv2jrH9J9EFahx/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1KtaKDnk0wC8bPZ7M5Wvv2jrH9J9EFahx',
      },
      {
        title: 'Pendapatan Nasional',
        previewUrl: 'https://drive.google.com/file/d/1lUNgDY5SFG9is3r4Ambh4Z156JTziidu/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1lUNgDY5SFG9is3r4Ambh4Z156JTziidu',
      },
      {
        title: 'Uang',
        previewUrl: 'https://drive.google.com/file/d/1Ti_HlI6iUg0peKu8d9JHEckqrjcGoP_q/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1Ti_HlI6iUg0peKu8d9JHEckqrjcGoP_q',
      },
    ],
    Ekonomi3: [
      {
        title: 'APBN & APBD',
        previewUrl: 'https://drive.google.com/file/d/1QipGr2Q2Q0ikGk1GiL-950l7fK6eHB-G/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1QipGr2Q2Q0ikGk1GiL-950l7fK6eHB-G',
      },
      {
        title: 'Kebijaksanaan Fiskal',
        previewUrl: 'https://drive.google.com/file/d/1QgoCqn_mmn84yQJtW3uxO00mhk_0O3Oq/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1QgoCqn_mmn84yQJtW3uxO00mhk_0O3Oq',
      },
      {
        title: 'Pasar Modal',
        previewUrl: 'https://drive.google.com/file/d/1n20onKWbKKkGbTPi5NuwPOs2uUSWll8d/preview',
        downloadUrl: 'https://drive.google.com/uc?export=download&id=1n20onKWbKKkGbTPi5NuwPOs2uUSWll8d',
      },
    ],
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-4 px-8 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/space.png)' }}
    >
      <h1 className="text-3xl mb-6 text-violet-950 font-bold mt-28 md:mt-32">Ekonomi Materi</h1>

      <div className="mb-6">
        <select
          value={selectedChapter}
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="Ekonomi1">Ekonomi 1</option>
          <option value="Ekonomi2">Ekonomi 2</option>
          <option value="Ekonomi3">Ekonomi 3</option>
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
