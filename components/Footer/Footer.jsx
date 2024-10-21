import logo from "@/public/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white p-10 w-full md:h-48">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="logo" width={150} height={150} />
          <span className="my-1">Visos IT paslaugos vienoje vietoje!</span>

          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-1 hover:opacity-80 hover:scale-105 transition ease-in-out">
              <Link className="flex gap-1 text-gray-200 animate-pulse" href="/">
                <FaInstagram size={20} />
                <span>Resetas.lt</span>
              </Link>
            </div>

            <div className="flex flex-row gap-1 hover:opacity-80 hover:scale-105 transition ease-in-out">
              <Link className="flex gap-1 text-gray-200 animate-pulse" href="/">
                <FaFacebook size={20} />
                <span>Resetas.lt</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:border-l border-white px-4">
          <span>test!</span>
        </div>

        <div className="flex flex-col items-center md:border-l border-white px-4">
          <span>test!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
