import * as React from "react";

export function Hero() {
  return (
    <div>
      <div
        className="hero w-min-screen lg:h-screen md:h-[480px] h-[320px] "
        style={{
          backgroundImage:
            "url(https://assets.new.siemens.com/siemens/assets/api/uuid:88bfd937-4ce9-46db-93e1-37f3785535fb/width:2732/quality:high/SIE-Santa-Digital-Twin-VR-16x9-Header-AI-generated.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content ">
          <div className="">
            <h1 className="mb-5 lg:text-4xl md:text-3xl text-2xl font-light lg:max-w-[40vw] max-w-[90vw] mt-4">
              Is Santa ready to embrace digital transformation?
            </h1>
            <p className="lg:text-lg md:text-base lg:block md:block hidden pb-[30px] max-w-[90vw]">
              Sebagai perusahaan teknologi yang fokus, kami menggabungkan dunia
              nyata dan dunia digital serta membantu pelanggan menghadapi
              tantangan besar di zaman kita.
            </p>

            <a href="/ProductOrService" className="coba">
              <button className="btn bg-[#00E8D7] lg:w-[210px] lg:h-[60px] md:w-[190px] md:h-[50px] w-[150px] h-[40px] text-lg border-2 border-[#00E8D7] hover:bg-[#d5f5f3] hover:border-[#d5f5f3]">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
