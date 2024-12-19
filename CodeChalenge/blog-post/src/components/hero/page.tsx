/* eslint-disable react/no-string-refs */
import * as React from "react";

export function Hero() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn-blog.superprof.com/blog_id/wp-content/uploads/2021/10/metode-magnus-carlsen-dalam-memenangkan-pertandingan.jpg.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome Players</h1>
            <p className="mb-5">
              Blog ini memberikan informasi mengani turnament catur yang di
              selenggarakan di dalam negeri maupun luar negeri
            </p>
            <a href="/blog-post">
              <button className="btn btn-primary">Know Everything</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
