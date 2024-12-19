import * as React from "react";
import { CompanyHistory } from "./content/CompanyHistory";
import Team from "./content/Team";
import { Culture } from "./content/Culture";

export default function AboutUs() {
  return (
    <div className="join join-vertical w-full bg-black text-white min-h-[100vh]">
      <div className="collapse  join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-2xl text-center font-extrabold pt-[90px]">
          Company History
        </div>
        <div className="collapse-content">
          {" "}
          <CompanyHistory />
        </div>
      </div>
      <div className="collapse join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-2xl text-center font-extrabold">
          Team
        </div>
        <div className="collapse-content">
          <Team />
        </div>
      </div>
      <div className="collapse  join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-2xl text-center font-extrabold ">
          Culture
        </div>
        <div className="collapse-content">
          <Culture />
        </div>
      </div>
    </div>
  );
}
