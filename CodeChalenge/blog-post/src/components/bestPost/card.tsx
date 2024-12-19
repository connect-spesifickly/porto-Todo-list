/* eslint-disable @next/next/no-img-element */

import contentfulClient from "@/contentful/contentfulClient";
import {
  IContentfulAsset,
  TypeBlogPostSkeleton,
} from "@/contentful/types/blogPostTypes";
import * as React from "react";
import RichText from "../richText/page";
const getBlogPostsContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogPostSkeleton>({
      content_type: "blogPost",
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
      <div className="mx-[20px]">
        <div className="carousel rounded-box flex gap-3 shadow-md">
          {posts &&
            posts.items?.map((blog, idx: React.Key | null | undefined) => (
              <div key={idx} className="carousel-item">
                <div className="">
                  <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                      <img
                        width={500}
                        height={500}
                        src={`https:${
                          (blog.fields.image as IContentfulAsset)?.fields.file
                            .url
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
                        <RichText document={blog.fields.summary} />
                      </div>

                      <a href={`/news/${blog.fields.slug}`}>
                        <button className="btn btn-primary">Read More</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
