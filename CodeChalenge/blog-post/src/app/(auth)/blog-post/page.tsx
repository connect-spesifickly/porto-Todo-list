"use client";
import * as React from "react";
// import { Filter } from "./components/filter";
// import { SideBar } from "./components/sidebar";

// import { CardComponent } from "@/components/featuredPost/card";
// import { CardComponentBlogPost } from "./components/cardComponentBlogPost";

import RichText from "@/components/richText/page";
import contentfulClient from "@/contentful/contentfulClient";
import {
  IContentfulAsset,
  TypeBlogPostSkeleton,
} from "@/contentful/types/blogPostTypes";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const [posts, setPost] = useState<{ items: any[] }>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selelctedCategory, setSelectedCategory] =
    useState<string>("All Tournament");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
          content_type: "blogPost",
        });
        setPost(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // untuk menyaring post pake useState
  const filteredPosts = posts.items.filter((post) => {
    const matchesSearchTerm = post.fields.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selelctedCategory === "All Tournament" ||
      post.fields.categories === selelctedCategory;

    return matchesSearchTerm && matchesCategory;
  });
  return (
    <div className="p-[20px]">
      {/* <Filter /> */}
      <div className="flex justify-center">
        <div className="join ">
          <div>
            <div>
              <input
                className="input input-bordered join-item lg:w-[50vw] md:w-[48vw]
              w-[45vw]"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <select
            className="select select-bordered join-item w-[27vw]"
            value={selelctedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value={"All Tournament"}>All Tournament</option>
            <option value={"internasional"} id="Luar-Negeri">
              {" "}
              Di Luar Negeri
            </option>
            <option value={"nasional"} id="Dalam-Negeri">
              Di Dalam Negeri
            </option>
          </select>
          <div className="indicator">
            <button className="btn join-item w-[20vw]">Search</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex h-[635px]">
        {/* <SideBar /> */}
        <div className="">
          <div className="drawer drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
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
                <li className="p-[5px]">Categories</li>
                <li>
                  <a
                    id="Dalam-Negeri"
                    onClick={() => setSelectedCategory("nasional")}
                  >
                    Di Dalam Negeri
                  </a>
                </li>
                <li>
                  <a
                    id="Luar-Negeri"
                    onClick={() => setSelectedCategory("internasional")}
                  >
                    Di Luar Negeri
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-[80vw] bg-[#b5bab6] rounded-lg h-[635px]">
          <div className="flex justify-around gap-[5px] p-[22px]">
            <div className="lg:w-[65vw] md:w-[60vw] w-[50vw]">
              <div className="carousel rounded-box flex gap-5">
                <div className="carousel-item w-auto">
                  {/* <CardComponentBlogPost /> */}
                  <div>
                    <div className="mx-[20px]">
                      <div className="carousel rounded-box flex gap-3 shadow-md">
                        {filteredPosts.map(
                          (blog, idx: React.Key | null | undefined) => (
                            <div key={idx} className="carousel-item">
                              <div className="">
                                <div className="card bg-base-100 w-96 shadow-xl">
                                  <figure>
                                    <img
                                      width={500}
                                      height={500}
                                      src={`https:${
                                        (blog.fields.image as IContentfulAsset)
                                          ?.fields.file.url
                                      }`}
                                      alt="gambar"
                                      className="h-[240px]"
                                    />
                                  </figure>
                                  <div className="card-body ">
                                    <h2 className="card-title h-[80px]">
                                      {blog.fields.title}
                                    </h2>
                                    <div className="flex justify-between">
                                      <div className="badge badge-secondary border-2 border-[#3f02d4] bg-[#4A00FF]">
                                        {blog.fields.date2}
                                      </div>
                                      <div className="badge badge-outline">
                                        {blog.fields.categories}
                                      </div>
                                    </div>
                                    <div className="text-justify">
                                      <RichText
                                        document={blog.fields.summary}
                                      />
                                    </div>

                                    <a href={`/news/${blog.fields.slug}`}>
                                      <button className="btn btn-primary">
                                        Read More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
