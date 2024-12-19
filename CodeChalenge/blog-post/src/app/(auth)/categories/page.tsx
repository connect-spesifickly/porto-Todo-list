import * as React from "react";
import { Tab } from "./components/tab";

export default function Categories() {
  return (
    <div>
      <div className="bg-base-300 pb-[15px] ">
        <div className="border-base-300 bg-base-300 border pb-[15px] mx-[25px]">
          <div className=" my-[13px] text-xl font-medium">Blog Categories</div>
          <Tab />
        </div>
      </div>
    </div>
  );
}
