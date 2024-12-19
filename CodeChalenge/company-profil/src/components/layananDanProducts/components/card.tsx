/* eslint-disable @next/next/no-img-element */

import RichText from "@/components/richText/page";
import contentfulClient from "@/contentful/contentfulClient";
import {
  IContentfulAsset,
  TypeBlogPage2Skeleton,
} from "@/contentful/types/blogPost2Types";
import Link from "next/link";
// import RichText from "../richText/page";
import * as React from "react";

const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPage2Skeleton>({
      content_type: "blogPage2",
    });
    console.log(data.items[0].fields.image);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export async function CardComponent() {
  const posts = await getBlogPostsContentful();
  console.log(posts?.items[0]);
  return (
    <div>
      <center>
        <div className=" grid grid-cols-1  gap-x-10 gap-y-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {posts &&
            posts.items?.map(
              (blog, idx: React.Key | null | undefined | number) => (
                <div key={idx} className="">
                  <div className="card bg-[#07193C] w-96 shadow-xl">
                    <figure>
                      <img
                        width={500}
                        height={500}
                        src={`https:${
                          (blog.fields.image as IContentfulAsset)?.fields.file
                            .url
                        }`}
                        alt="gambar"
                        className="w-[500px] h-[250px]"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold">
                        {blog.fields.title as string}
                      </h2>
                      <div className="text-start">
                        <RichText document={blog.fields.summary} />
                      </div>
                      <Link
                        href={`/ProductOrService#${encodeURIComponent(
                          blog.fields.title
                        )}`}
                        className=""
                      >
                        <div className="card-actions justify-end">
                          <button className="btn bg-[#00E8D7] border-2 border-[#00E8D7] hover:bg-[#d5f5f3] hover:border-[#d5f5f3]">
                            Let`s See
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </center>
    </div>
  );
}
