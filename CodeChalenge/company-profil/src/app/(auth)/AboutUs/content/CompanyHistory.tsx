import * as React from "react";

export function CompanyHistory() {
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
            <time className="font-mono italic">1847–1865</time>
            <div className="text-lg font-black">The company’s founding</div>
            <p className="">
              Werner von Siemens laid the foundation for today’s Siemens AG in
              1847 with his design for the pointer telegraph. The 30-year-old
              inventor hit upon an idea for substantially improving the electric
              telegraph developed by Charles Wheatstone and William Fothergill
              Cooke.
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
            <time className="font-mono italic">1880</time>
            <div className="text-lg font-black">The first elevator motor</div>
            <p className="">
              In 1879, Werner von Siemens invented the first electric railway
              with a power supply provided via the tracks. That same year, he
              had the idea for an electric elevator. In a letter to his brother
              Carl, he said he believed the dynamo machine that had been used as
              a motor in the train was also `very well suited` to drive
              elevators and turntables at rail yards.
            </p>
          </div>
          <hr />
        </li>
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
            <time className="font-mono italic">1891</time>
            <div className="text-lg font-black">The first crane drive</div>
            <p className="">
              In 1891, the first electric rotating crane went into operation on
              the Petersenkai wharf at the port in Hamburg. The crane had been
              built by the Hamburg firm Nagel & Kaemp, but the electrical
              equipment came from Siemens & Halske. It had a load-lifting
              capacity of two and a half metric tons and could hoist loads at a
              meter per second. The extremely efficient drive recovered
              electrical energy as heavy loads were being lowered and stored it
              in an accumulator battery. After some initial problems, the unit
              worked well for more than three decades.
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
            <time className="font-mono italic">1906/07</time>
            <div className="text-lg font-black">
              The world`s first reversing electric drive
            </div>
            <p className="">
              Siemens built the world`s first reversing electric drive in
              1906/07, for a blooming train at the Georgsmarienhütte steel mill
              near Osnabrück. The motor had a maximum output of 6,550 kilowatts
              (kW).
            </p>
          </div>
          <hr />
        </li>
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
            <time className="font-mono italic">1999</time>
            <div className="text-lg font-black">The Simodrive Posmo A</div>
            <p className="">
              Originally, motors for machine tools and production machinery were
              controlled centrally. It was not until the 1990s, analogously to
              the entire automation process, that controls were gradually
              distributed or decentralized. `Smart` drives, suited for complex
              tasks in particular, were developed for the purpose. One milestone
              was the Simodrive Posmo A positioning drive, presented by Siemens
              in 1999. Its control was integrated directly into the motor
              itself.
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
            <time className="font-mono italic">2008</time>
            <div className="text-lg font-black">
              The world`s first ore mill using a “Frozen Charge Shaker”
            </div>
            <p className="">
              In 2008, Siemens pushed the start button on the world`s first ore
              mill with a `Frozen Charge Shaker`` function, at the Paracatu gold
              mine run in Brazil by the Canada-based Kinross Gold Corporation.
              This solution, integrated into the gearless Simine Mill GD mill
              drive, made it possible to selectively release charge that had
              clumped onto the mill`s interior wall, thus keeping the mill from
              being damaged if the charge were to drop uncontrolled and
              shortening maintenance times considerably. At a production value
              of several thousand US dollars per hour, this avoided production
              losses of several million dollars at each maintenance interval.
            </p>
          </div>
          <hr />
        </li>
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
            <time className="font-mono italic">2013</time>
            <div className="text-lg font-black">
              The IDS integrated drive train
            </div>
            <p className="">
              Originally, motors for machine tools and production machinery were
              controlled centrally. It was not until the 1990s, analogously to
              the entire automation process, that controls were gradually
              distributed or decentralized. `Smart` drives, suited for complex
              tasks in particular, were developed for the purpose. One milestone
              was the Simodrive Posmo A positioning drive, presented by Siemens
              in 1999. Its control was integrated directly into the motor
              itself.
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
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black">
              The world`s largest direct-drive conveyor system
            </div>
            <p className="">
              Antapaccay and Las Bambas, in 2012/13, were the first copper mines
              in Peru to be equipped with gearless drives. Two years later,
              Siemens delivered the world`s largest direct-drive conveyor system
              for the mine in Cuajone, Peru, owned by a Mexican mining company,
              Southern Copper Corporation (SCC). This was a belt system that
              replaced a rail line to carry ore from the mine to the processing
              plant.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
