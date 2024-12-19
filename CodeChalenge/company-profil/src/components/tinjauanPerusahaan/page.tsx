import * as React from "react";

export function Tinjauan() {
  return (
    <div className="hero bg-black text-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://assets.new.siemens.com/siemens/assets/api/uuid:f404bd89-668a-43bd-a0fd-95067adf4896/width:1125/quality:high/Siemens-M.webp"
          className="max-w-sm rounded-lg shadow-2xl ml-[10px] md:scale-150 scale-110 py-[65px]"
        />
        <div className="lg:ml-[150px]">
          <h1 className="text-3xl font-bold">
            Siemens: Inovasi Teknologi untuk Masa Depan
          </h1>
          <p className="py-6">
            Sejak 1847, Siemens telah menjadi pionir dalam dunia teknologi.
            Didirikan oleh Werner von Siemens di Berlin, perusahaan ini telah
            tumbuh menjadi konglomerat multinasional yang beroperasi di berbagai
            sektor, mulai dari energi hingga industri otomotif.
          </p>
          <ul className="list-disc pl-4">
            <p className="ml-[-15px] py-3">Sejarah Singkat:</p>
            <li>1847: Didirikan oleh Werner von Siemens.</li>
            <li>1849: Menerima paten pertama untuk telegraf jarum.</li>
            <li>1872: Membangun jalur telegraf transatlantik pertama.</li>
            <li>
              Abad 20: Ekspansi ke berbagai sektor seperti listrik, elektronik,
              dan otomatisasi.
            </li>
            <li>
              Abad 21: Fokus pada digitalisasi, elektrifikasi, dan otomatisasi
              untuk masa depan yang berkelanjutan.
            </li>
          </ul>
          <h1 className="pt-6">Tim yang Kuat</h1>
          <p className="py-3">
            Siemens memiliki puluhan ribu karyawan di seluruh dunia,
            masing-masing membawa keahlian unik dalam bidang teknik, sains, dan
            bisnis. Tim kami terdiri dari para profesional yang berdedikasi,
            inovatif, dan berkomitmen untuk menciptakan masa depan yang lebih
            baik.
          </p>
          <h1 className="pt-6">Budaya Perusahaan:</h1>
          <p className="py-3">
            Budaya Siemens didasarkan pada nilai-nilai inovasi, keberagaman, dan
            keberlanjutan. Kami mendorong karyawan untuk berpikir kreatif,
            bekerja sama, dan memberikan kontribusi yang berarti bagi
            masyarakat.
          </p>
          <a href="/AboutUs">
            <button className="btn bg-[#00E8D7] lg:w-[210px] lg:h-[50px] md:w-[190px] md:h-[40px] w-[150px] h-[30px] text-lg border-2 border-[#00E8D7] hover:bg-[#d5f5f3] hover:border-[#d5f5f3]">
              About Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
