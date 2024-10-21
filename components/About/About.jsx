import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const About = () => {
  return (
    <section
      className={`${roboto.variable} border-t border-t-gray-200 border-b-gray-200 dark:border-t-slate-800 dark:border-b-slate-800 border-b`}
    >
      <div className="container">
        <span class="bg-red-100 text-red-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Default
        </span>
      </div>
    </section>
  );
};

export default About;
