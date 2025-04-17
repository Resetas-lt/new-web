import Link from "next/link";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineEnvelope, HiOutlineWrench } from "react-icons/hi2";
import { SiAnydesk } from "react-icons/si";

const Banner = () => {
  return (
    <div className="2xl:flex hidden p-2 dark:bg-zinc-900 w-full dark:text-white border-b border-b-gray-200 dark:border-b-zinc-700 bg-gray-100">
      <div className="flex w-full justify-center items-center md:mx-[10rem] space-x-10">
        <div className="flex flex-row xl:justify-center items-center gap-2 xl:w-3/5">
          <Link href="tel: +37067186969">
            <span className="flex items-center text-sm gap-1 border-b-2 border-b-slate-400 dark:border-b-white pr-2 hover:scale-105 font-semibold dark:hover:opacity-80 p-1 rounded transition ease-in">
              <IoPhonePortraitOutline size={19} />
              <span>+370 671 86969</span>
            </span>
          </Link>

          <span className="text-black dark:text-gray-700 mx-2 mt-2">|</span>

          <Link href="tel: +37068301107">
            <span className="flex items-center text-sm gap-1 border-b-2 border-b-slate-400 dark:border-b-white pr-2 hover:scale-105 font-semibold dark:hover:opacity-80 p-1 rounded transition ease-in">
              <IoPhonePortraitOutline size={19} />
              <span>+370 683 01107</span>
            </span>
          </Link>

          <span className="text-black dark:text-gray-700 mx-2 mt-2">|</span>

          <Link href="mailto: servisas@resetas.lt">
            <span className="flex items-center text-sm gap-1 border-b-2 border-b-slate-400 dark:border-b-white pr-2 hover:scale-105 font-semibold dark:hover:opacity-80 p-1 rounded transition ease-in">
              <HiOutlineEnvelope size={19} />
              <span>servisas@resetas.lt</span>
            </span>
          </Link>

          <span className="text-black dark:text-gray-700 mx-2 mt-2">|</span>

          <Link href="mailto: info@resetas.lt">
            <span className="flex items-center text-sm gap-1 border-b-2 border-b-slate-400 dark:border-b-white pr-2 hover:scale-105 font-semibold dark:hover:opacity-80 p-1 rounded transition ease-in">
              <HiOutlineEnvelope size={19} />
              <span>info@resetas.lt</span>
            </span>
          </Link>
        </div>

        <div className="md:flex hidden flex-row justify-center gap-2 md:w-2/5 w-full">
          <span className="flex items-center text-sm gap-1 border-b-2 border-b-slate-400 dark:border-b-white pr-2 hover:scale-105 font-semibold dark:hover:opacity-80 p-1 rounded transition ease-in">
            <SiAnydesk className="text-red-600" size={19} />

            <Link
              href="https://download.anydesk.com/AnyDesk.exe"
              target="_blank"
            >
              Anydesk
            </Link>
          </span>

          <span className="text-black dark:text-gray-700 mx-2 mt-2">|</span>

          <span className="flex items-center text-sm gap-1 border-b-2 border-b-slate-400 dark:border-b-white pr-2 hover:scale-105 font-semibold dark:hover:opacity-80 p-1 rounded transition ease-in">
            <HiOutlineWrench size={19} />

            <Link href="#">Registruoti gedimą</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
