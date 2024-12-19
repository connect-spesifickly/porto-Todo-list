import Link from "next/link";
import * as React from "react";

export default function PopularCategories() {
  return (
    <div className="bg-base-300 pb-[15px] ">
      <div className="border-base-300 bg-base-300 border pb-[15px] mx-[25px]">
        <div className=" mx-[5px] my-[13px] text-xl font-medium">
          Popular Blog Categories
        </div>
        <div className="lg:mx-[20px] md:mx-[20px] mx-[5px]"></div>
        <div className="flex w-full">
          <Link
            className="card bg-[#ffffff] hover:bg-[#F2F2F2] rounded-box grid h-20 flex-grow place-items-center transition-all"
            href={`/categories#${encodeURIComponent("Dalam-Negeri")}`}
          >
            Dalam Negeri
          </Link>

          <div className="divider divider-horizontal">Atau</div>

          <Link
            className="bg-[#ffffff] card rounded-box grid h-20 flex-grow place-items-center hover:bg-[#F2F2F2]  transition-all"
            href={`/categories#${encodeURIComponent("Luar-Negeri")}`}
          >
            Luar Negeri
          </Link>
        </div>
      </div>
    </div>
  );
}
