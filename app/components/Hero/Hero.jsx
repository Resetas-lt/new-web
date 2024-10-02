"use client"; // Ensure this component is rendered on the client side

import { motion } from "framer-motion";

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
        ></video>

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="flex justify-center text-4xl md:text-6xl font-bold mb-4 overflow-hidden whitespace-nowrap"
            initial="hidden"
            animate="visible"
            variants={typingContainer}
          >
            {coloredText}
            <motion.span
              className="bg-white ml-1 w-1"
              style={{ height: "1em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
                delay: 1,
              }}
            ></motion.span>
          </motion.div>

          <p className="text-lg md:text-2xl mb-8 text-neutral-300">
            Visos IT paslaugos vienoje vietoje
          </p>
          <button className="bg-red-600 animate-pulse hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition ease-in">
            PAGALBA
          </button>

          <div className="cards-container mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Kompiuteriai", "Spausdintuvai", "Serveriai"].map(
              (title, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.75, duration: 1 }}
                >
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
