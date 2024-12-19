import Image from "next/image";
import * as React from "react";

export function Contact() {
  return (
    <div>
      <h1 className=" text-justify">
        If you want to contact me, you can contact throught Email or Linkedin.
        I`m not usual use other media sosial like Instagram and Twitter. I`m
        sorry if my response will not so fast but, if i`m open it, i will
        response your message. Okey.
      </h1>
      <div className="flex justify-between items-center py-[10px]">
        <h1 className="font-bold">Email: Altitude.Altair@gmail.com</h1>
        <a
          href="https://www.linkedin.com/in/muhammad-fajar-sidiq-56b879258/?originalSubdomain=id"
          className=" transition-transform"
        >
          <Image
            src="/image/linkedin.png"
            alt=""
            width={30}
            height={30}
            className="rounded-full border-[#ffffff] border-2 hover:shadow-[0_0_10px_#ffffff] transition-shadow"
          />
        </a>
      </div>
    </div>
  );
}
