"use client"; // Ensure this component is rendered on the client side

import { motion } from "framer-motion";

import TypewriterComponent from "typewriter-effect";

import HeroCards from "./HeroCards";

const Hero = () => {
  const typingContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "afterChildren",
      },
    },
  };

  const typingLetter = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const text = "RESETAS.LT";
  const coloredText = text.split("").map((char, index) => {
    const colorClass = index < 5 ? "text-red-600" : "text-white";
    return (
      <motion.span key={index} className={colorClass} variants={typingLetter}>
        {char}
      </motion.span>
    );
  });

  return (
    <>
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
        <div className="absolute inset-0 dark:bg-black opacity-60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="flex justify-center text-4xl md:text-6xl font-bold mb-4 overflow-hidden whitespace-nowrap"
            initial="hidden"
            animate="visible"
            variants={typingContainer}
          >
            {coloredText}
          </motion.div>

          <span className="text-lg md:text-2xl mb-8 text-neutral-300 w-80 md:w-full overflow-hidden">
            <TypewriterComponent
              options={{
                strings: ["Visos IT paslaugos vienoje vietoje"],
                autoStart: true,
                loop: true,
                delay: 170,
              }}
            />
          </span>

          <button className="bg-red-600 animate-pulse hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition ease-in">
            PAGALBA
          </button>

          <HeroCards />
        </div>
      </div>
    </>
  );
};

export default Hero;
