import logo from "@/public/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdArrowRight, MdOutlineSchedule } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-10 pt-10 pb-2 w-full h-full">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="logo" width={150} height={150} />
          <span className="my-1 font-bold">
            Visos IT paslaugos vienoje vietoje!
          </span>

          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-1 hover:opacity-80 hover:scale-105 transition ease-in-out">
              <Link
                className="flex items-center gap-1 text-gray-200 animate-pulse"
                href="https://www.instagram.com/resetas.lt/"
                target="_blank"
              >
                <FaInstagram className="text-red-600" size={20} />
                <span>Resetas.lt</span>
                <FiExternalLink size={13} />
              </Link>
            </div>

            <div className="flex flex-row gap-1 hover:opacity-80 hover:scale-105 transition ease-in-out">
              <Link
                className="flex items-center gap-1 text-gray-200 animate-pulse"
                href="https://www.facebook.com/resetas.lt"
                target="_blank"
              >
                <FaFacebook className="text-red-600" size={20} />
                <span>Resetas.lt</span>
                <FiExternalLink size={13} />
              </Link>
            </div>
          </div>

          <div className="mt-2 text-sm">
            <span className="flex flex-row items-center gap-1">
              <MdOutlineSchedule className="text-red-600" size={20} />
              <span>I-V 9:00-18:00</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:border-l border-gray-600 px-4">
          <span class="font-sans text-sm text-gray-800 w-full text-center font-semibold me-2 px-2.5 py-0.5 rounded-tl-full rounded-br-full bg-gradient-to-r from-gray-100 to-red-200 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200">
            KLIENTAMS
          </span>

          <ul>
            <li>
              <span className="flex flex-row items-center footer-link">
                <MdArrowRight className="text-red-600" size={25} />
                <Link href="#">Gedimo registravimas</Link>
              </span>
            </li>

            <li>
              <span className="flex flex-row items-center footer-link">
                <MdArrowRight className="text-red-600" size={25} />
                <Link href="#">D.U.K.</Link>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:border-l border-gray-600 px-4">
          <span class="font-sans text-sm text-gray-800 w-full text-center font-semibold me-2 px-2.5 py-0.5 rounded-tl-full rounded-br-full bg-gradient-to-r from-red-200 to-gray-100 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200">
            NUORODOS
          </span>

          <ul>
            <li>
              <span className="flex flex-row items-center footer-link">
                <MdArrowRight className="text-red-600" size={25} />
                <Link
                  className="flex flex-row items-center"
                  href="https://rekvizitai.vz.lt/imone/resetas_lt/"
                  target="_blank"
                >
                  Rekvizitai.lt
                </Link>
                <FiExternalLink className="mx-1" />
              </span>
            </li>

            <li>
              <span className="flex flex-row items-center footer-link">
                <MdArrowRight className="text-red-600" size={25} />
                <Link href="#">Privatumo politika</Link>
                <FiExternalLink className="mx-1" />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div className="flex justify-between items-center font-mono font-semibold mt-3 py-4">
        <span className="text-center text-xs text-gray-200 md:py-3 w-full border-r border-gray-600">
          &copy; MB RESETAS LT. <br className="md:hidden block" /> Visos teisės
          saugomos.
        </span>

        <span className="text-center text-xs text-gray-200 font-semibold w-full">
          Sprendimas - <br className="md:hidden block" />{" "}
          <span className="text-red-600">MB RESETAS LT</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
