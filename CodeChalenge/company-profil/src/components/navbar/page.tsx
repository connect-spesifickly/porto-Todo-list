import * as React from "react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-[99]">
      <div className=" text-white absolute min-w-screen navbar glass ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl lg:text-2xl" href="/ ">
            SIEMENS
          </a>
        </div>
        <div className="flex-none">
          <ul className=" menu menu-horizontal px-1 font-bold md:text-lg lg:text-xl">
            <li>
              <a href="/AboutUs" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="/ProductOrService">Products or Services</a>
            </li>
            <li>
              <a href="/Team">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
