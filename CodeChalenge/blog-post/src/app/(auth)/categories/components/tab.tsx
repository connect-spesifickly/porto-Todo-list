import * as React from "react";

import { CardComponentNasional } from "./cardNasional";
import { CardComponentInternasional } from "./cardInternasional";

export function Tab() {
  return (
    <div className="">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab lg:h-auto md:h-auto h-[55px]"
          aria-label="Dalam Negeri"
          id="Dalam-Negeri"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex justify-around gap-[5px]">
            <div className="lg:w-[60vw] md:w-[60vw] w-[50vw]">
              <div className="carousel rounded-box flex gap-5">
                <div className="carousel-item w-auto">
                  <CardComponentNasional />
                </div>
              </div>
            </div>
            <div className="md:w-[15vw] lg:w-[20vw] lg:block md:block w-[10vw] text-[12px] lg:text-[15px] md:text-[15px]">
              Dalam kategori turnamen catur nasional, kami hadirkan turnament
              terkini, analisis pertandingan, dan momen-momen penting yang
              terjadi di atas papan catur. Pecatur dari seluruh Indonesia jangan
              lewatkan setiap langkah menuju kemenangan kalian!
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab lg:h-auto md:h-auto h-[55px]"
          aria-label="Luar Negeri"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="flex justify-around gap-[5px]">
            <div className="lg:w-[60vw] md:w-[60vw] w-[50vw]">
              <div className="carousel rounded-box flex gap-5">
                <div className="carousel-item w-auto">
                  <CardComponentInternasional />
                </div>
              </div>
            </div>
            <div className="md:w-[15vw] lg:w-[20vw] lg:block md:block w-[10vw] text-[12px] lg:text-[15px] md:text-[15px]">
              Turnamen catur internasional tahun ini menjadi ajang luar biasa
              bagi para pecatur dari berbagai belahan dunia. Keahlian, strategi,
              dan semangat juang tinggi terpancar di setiap langkah bidak.
              Tapaki perjalanan menuju kemenangan!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
