import Image from "next/image";
import * as React from "react";

const people = [
  {
    name: "Muhammad Fajar Sidiq",
    role: "Fullstack Developer",
    imageUrl: "/image/photo.png",
  },
];

export default function Author() {
  return (
    <div className="bg-white py-1 ">
      <div className="mx-auto grid gap-5 px-2 ">
        <div className="">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 ">
            Meet Me
          </h2>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-1 text-lg/8  text-justify">
          Perkenalkan saya Fajar. Saya sudah tertarik dengan permainan catur
          sejak dari pertama kali saya mengenal catur itu sendiri. Dalam
          kesempatan kali ini saya hendak membagikan informasi mengenai turnamen
          catur di dalam negeri maupun luar negeri. Sebagai fullstack developer
          junior saya masih banyak keterbatasan, tetapi semoga blog ini
          bermanfaat.
        </p>
      </div>
    </div>
  );
}
