import * as React from "react";
import { CardComponent } from "./components/card";

export function ProductsAndServices() {
  return (
    <div>
      <div className="bg-black text-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <h2 className="block lg:text-4xl md:text-4xl text-3xl font-bold pb-10 ">
            Products & Services
          </h2>
          <CardComponent />
        </div>
      </div>
    </div>
  );
}
