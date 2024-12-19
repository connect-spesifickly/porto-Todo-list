import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-[#F2F2F2] sticky top-0 z-[99]">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/image/Logo3.png" alt="logo" width={20} height={20} />
          BonbonIndo
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Main Page</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a href="/blog-post">Blog Post</a>
                </li>
                <li>
                  <a href="/categories">Categories</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
