import * as React from "react";

export function History() {
  return (
    <div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">14 Dec 2024</time>
            <div className="text-lg font-black">Start Build the Blog</div>
            <p className="">
              Dari awal pembutan blog, saya berharap bisa memberikan yang
              terbaik bagi siapapun yang membaca blog ini dan siapapun yang bisa
              mempotensikan blog ini sebaik mungkin. Saya harap dengan adanya
              blog ini ekonomi kita semakin membaik, para pemuda juga
              teraktuskan minat mereka, dan sukur-sukur ada yang bisa
              mengharumkan nama Indonesia di kancah internasional.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">15 Dec 2024</time>
            <div className="text-lg font-black">The Blog was Finish</div>
            <p className="">
              Dengan bantuan banyak library yang tersedia di internet, saya
              dapat menyelesaikan blog ini dengan sangat cepat. Tidak memerlukan
              banyak waktu bagi saya untuk membuat berbagai fitur dan tampilan
              yang ada. Saya sangat berterimakasih kepada para developer di luar
              sana. Dengan begini tampilan awal blog saya dan fitur-fiturnya
              sudah siap untuk digunakan.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
