import * as React from "react";

export function SideBar() {
  return (
    <div className="">
      <div className="drawer drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side h-[635px]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content h-[635px] w-[27vw] p-3 rounded-lg">
            {/* Sidebar content here */}
            <li className="p-[5px]">Categories</li>
            <li>
              <a href="#Dalam-Negeri">Di Dalam Negeri</a>
            </li>
            <li>
              <a href="#Luar-Negeri">Di Luar Negeri</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
