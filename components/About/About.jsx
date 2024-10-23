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
      <div className="container"></div>
    </section>
  );
};

export default About;
