import * as React from "react";
import Author from "./contents/author";
import { VisiMisi } from "./contents/visiMisi";
import { History } from "./contents/history";
import { Contact } from "./contents/contact";

export default function About() {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse  join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-2xl text-center font-extrabold">
          Author
        </div>
        <div className="collapse-content">
          <Author />
        </div>
      </div>
      <div className="collapse join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-2xl text-center font-extrabold">
          Vision Mission
        </div>
        <div className="collapse-content">
          <VisiMisi />
        </div>
      </div>
      <div className="collapse  join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-2xl text-center font-extrabold ">
          Blog History
        </div>
        <div className="collapse-content">
          <History />
        </div>
      </div>
      <div className="collapse  join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-2xl text-center font-extrabold">
          Contact
        </div>
        <div className="collapse-content">
          <Contact />
        </div>
      </div>
    </div>
  );
}
{
  /* <h1>Vision Mission</h1>
      <h1>Blog History</h1>
      <h1>Author</h1>
      <h1>Contact</h1> */
}
