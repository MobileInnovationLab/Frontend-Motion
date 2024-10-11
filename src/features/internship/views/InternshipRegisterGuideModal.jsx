import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md lg:max-w-4xl w-full p-6 max-h-80 lg:max-h-screen  overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Panduan Pengerjaan</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <p>
            Sebelum mengisi formulir pendaftaran, pastikan Anda memenuhi syarat dan ketentuan berikut:
          </p>
          <ol className="list-decimal ml-5">
            <li>
              Pastikan semua kolom dalam formulir diisi dengan benar dan sesuai format yang ditentukan. Informasi yang tidak sesuai atau kurang lengkap dapat menyebabkan aplikasi Anda ditolak.
            </li>
            <li>
              Pastikan bahwa semua tautan yang Anda unggah, seperti CV, video motivasi, dan portofolio, sudah diatur ke Publik atau siapa saja yang memiliki link dapat melihat di Google Drive.
            </li>
            <li>
              Semua dokumen yang diunggah harus dalam format yang sesuai, dengan format: <strong>Nama Lengkap_NIM_NamaFile</strong>.
            </li>
            <li>
              Periksa kembali bahwa data pribadi sudah benar dan aktif.
            </li>
            <li>
              Pastikan Anda mengunggah seluruh dokumen sebelum batas waktu yang ditentukan. Keterlambatan pengiriman dapat mempengaruhi peluang Anda diterima.
            </li>
          </ol>

          <h3 className="mt-4 font-bold">Persyaratan Khusus Berdasarkan Divisi:</h3>

          <p><strong>Divisi UI/UX:</strong></p>
          <ul className="list-disc ml-5">
            <li>Pilih dan isi bagian UI/UX pada halaman pendaftaran.</li>
            <li>Unggah portofolio Anda dalam bentuk link Google Drive yang dapat diakses.</li>
          </ul>

          <p><strong>Divisi Mobile Programming:</strong></p>
          <ul className="list-disc ml-5">
            <li>Pilih dan isi bagian Mobile Programming pada halaman pendaftaran.</li>
            <li>Unggah portofolio berupa proyek atau kode yang Anda buat melalui link GitHub.</li>
          </ul>

          <p><strong>Divisi Digital Business:</strong></p>
          <ul className="list-disc ml-5">
            <li>Pilih dan isi bagian Digital Business pada halaman pendaftaran.</li>
            <li>Unduh soal yang tersedia melalui link yang diberikan di bagian “Solusi BMC”.</li>
            <li>
              Unggah hasil pekerjaan Anda melalui link Google Drive dengan format file: <strong>Nama Lengkap_NIM_SolusiBMC.pdf</strong>.
            </li>
            <li>
              Link soal hanya dapat diakses satu kali, dan Anda diperbolehkan mengunduh soal serta mengunggah link folder Drive kosong. Namun, pastikan pekerjaan Anda diunggah sebelum batas waktu yang ditentukan.
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Understand</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;