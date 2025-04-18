"use client";

import TypewriterComponent from "typewriter-effect";
import HeroCards from "./HeroCards";

import Link from "next/link";
import { IoIosCall } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <section>
        <div className="relative flex flex-col justify-center items-center dark:bg-slate-800 bg-contain bg-center bg-no-repeat text-center rounded-b h-dvh text-white transform transition-transform duration-500">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/videos/hero.mp4"
            autoPlay
            muted
            loop
          ></video>

          {/* Background Overlay */}
          <div className="absolute inset-0 dark:bg-black opacity-60 backdrop-blur-xs"></div>

          {/* Content */}
          <div className="relative z-10">
            <span className="flex justify-center text-4xl md:text-6xl font-bold mb-4 overflow-hidden whitespace-nowrap">
              <span className="text-red-600">RESET</span>AS.LT
            </span>

            <span className="text-lg md:text-2xl mb-8 text-neutral-300 w-80 md:w-full overflow-hidden">
              <TypewriterComponent
                options={{
                  strings: [
                    "Visos IT paslaugos vienoje vietoje",
                    "Kompiuterių remontas",
                    "Spausdintuvų remontas",
                    "Serverių sprendimai",
                    "Programavimas",
                    "UI/UX Dizainas",
                    "IT konsultacijos",
                    "Susisiekime jau dabar!",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: "natural",
                }}
              />
            </span>

            {/* FOR DESKTOPS */}

            <div className="hidden md:block">
              <button className="bg-red-600 animate-pulse hover:bg-red-700 hover:cursor-pointer text-white font-bold py-2 px-4 mt-1 rounded transition ease-in">
                PAGALBA
              </button>
            </div>

            {/* FOR MOBILE */}

            <div className="md:hidden block">
              <Link href="tel: +37067186969">
                <button className="bg-red-600 animate-pulse hover:bg-red-700 text-white font-bold py-2 px-4 mt-1 rounded transition ease-in">
                  <span className="flex flex-row gap-1">
                    <IoIosCall size={25} />
                    Skambinti
                  </span>
                </button>
              </Link>
            </div>

            <HeroCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
