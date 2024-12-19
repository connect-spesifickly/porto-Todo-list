import * as React from "react";

export function Culture() {
  return (
    <div className="flex flex-col gap-10 text-lg justify-around">
      <div className="">
        <h1 className="text-xl py-[10px] font-bold"> Fokus pada inovasi: </h1>
        <p>
          Siemens selalu mendorong karyawannya untuk berpikir kreatif dan
          mencari solusi inovatif untuk masalah yang kompleks. Perusahaan ini
          menginvestasikan banyak sumber daya dalam penelitian dan pengembangan.
        </p>
      </div>
      <div className="">
        <h1 className="text-xl py-[10px] font-bold">
          Keberagaman dan inklusivitas:
        </h1>
        <p>
          Siemens berkomitmen untuk menciptakan lingkungan kerja yang inklusif,
          di mana semua karyawan merasa dihargai dan memiliki kesempatan yang
          sama. Perusahaan ini sangat menghargai keberagaman latar belakang,
          perspektif, dan pengalaman.
        </p>
      </div>
      <div className="">
        <h1 className="text-xl py-[10px] font-bold">
          {" "}
          Etika kerja yang tinggi:{" "}
        </h1>
        <p>
          Karyawan Siemens diharapkan memiliki etos kerja yang kuat dan
          berkomitmen untuk mencapai hasil yang terbaik. Perusahaan ini
          menjunjung tinggi integritas dan transparansi dalam semua tindakannya.
        </p>
      </div>
      <div className="">
        <h1 className="text-xl py-[10px] font-bold"> Fokus pada pelanggan: </h1>
        <p>
          Siemens sangat berorientasi pada pelanggan dan selalu berusaha untuk
          memenuhi kebutuhan dan harapan pelanggan. Perusahaan ini berusaha
          untuk membangun hubungan jangka panjang dengan pelanggannya.
        </p>
      </div>
      <div className="">
        <h1 className="text-xl py-[10px] font-bold">
          {" "}
          Pengembangan karyawan:{" "}
        </h1>
        <p>
          Siemens sangat memperhatikan pengembangan karyawannya. Perusahaan ini
          menyediakan berbagai program pelatihan dan pengembangan untuk membantu
          karyawan mencapai potensi penuh mereka.
        </p>
      </div>
    </div>
  );
}
