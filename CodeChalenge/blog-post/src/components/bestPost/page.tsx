import * as React from "react";
import { CardComponent } from "./card";

export default function BestPost() {
  return (
    <div className="border-base-300 bg-base-300 border pb-[15px]">
      <div className=" mx-[25px] my-[13px] text-xl font-medium">Best Post</div>

      <CardComponent />
    </div>
  );
}
