import * as React from "react";
// import { useState, useEffect } from "react";
// import {
//   TypeBlogPostFields,
//   TypeBlogPostSkeleton,
// } from "@/contentful/types/blogPostTypes";
// import contentfulClient from "@/contentful/contentfulClient";

export function Filter() {
  // const [filter, setFilter] = useState<TypeBlogPostFields>();

  // useEffect(() => {
  //   const fetchFilter = async () => {
  //     try {
  //       const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>();
  //       console.log(data.items[0].fields.image);
  //       console.log(data);

  //       return data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchFilter();
  // });
  return (
    <div className="flex justify-center">
      <div className="join ">
        <div>
          <div>
            <input
              className="input input-bordered join-item lg:w-[50vw] md:w-[48vw]
              w-[45vw]"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item w-[27vw]">
          <option>All Tournament</option>
          <option> Di Luar Negeri</option>
          <option>Di Dalam Negeri</option>
        </select>
        <div className="indicator">
          <button className="btn join-item w-[20vw]">Search</button>
        </div>
      </div>
    </div>
  );
}
