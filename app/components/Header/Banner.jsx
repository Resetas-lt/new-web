import Link from "next/link";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { SiAnydesk } from "react-icons/si";
import { GrServices } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="xl:flex hidden p-2 dark:bg-zinc-900 w-full dark:text-white border-b border-b-gray-200 dark:border-b-zinc-700 bg-gray-100">
      <div className="flex w-full justify-center items-center md:mx-[10rem] space-x-10">
        <div className="flex flex-row justify-center items-center gap-2 md:w-2/5 w-full">
          <Link href="tel: +37067186969">
            <span className="flex items-center text-sm gap-1 border-b-2 pr-2 min-w-full dark:hover:bg-white dark:hover:text-black hover:scale-105 dark:hover:opacity-80 p-1 rounded transition ease-in">
              <IoPhonePortraitOutline size={19} />
              <span>+370 671 86969</span>
            </span>
          </Link>

          <span className="text-gray-200 dark:text-gray-700 mx-2 mt-2">|</span>

          <Link href="tel: +37068301107">
            <span className="flex items-center text-sm gap-1 border-b-2 pr-2 dark:hover:bg-white dark:hover:text-black hover:scale-105 dark:hover:opacity-80 p-1 rounded transition ease-in">
              <IoPhonePortraitOutline size={19} />
              <span>+370 683 01107</span>
            </span>
          </Link>

          <span className="text-gray-200 dark:text-gray-700 mx-2 mt-2">|</span>

          <Link href="mailto: servisas@resetas.lt">
            <span className="flex items-center text-sm gap-1 border-b-2 pr-2 dark:hover:bg-white dark:hover:text-black hover:scale-105 dark:hover:opacity-80 p-1 rounded transition ease-in">
              <HiOutlineEnvelope size={19} />
              <span>servisas@resetas.lt</span>
            </span>
          </Link>
        </div>

        <div className="md:flex hidden flex-row justify-center gap-2 md:w-2/5 w-full">
          <span className="flex items-center text-sm gap-1 border-b-2 pr-2 dark:hover:bg-white dark:hover:text-black hover:scale-105 dark:hover:opacity-80 p-1 rounded transition ease-in">
            <SiAnydesk size={19} />

            <Link
              href="https://download.anydesk.com/AnyDesk.exe"
              target="_blank"
            >
              Anydesk
            </Link>
          </span>

          <span className="text-gray-200 dark:text-gray-700 mx-2 mt-2">|</span>

          <span className="flex items-center text-sm gap-1 border-b-2 pr-2 dark:hover:bg-white dark:hover:text-black hover:scale-105 dark:hover:opacity-80 p-1 rounded transition ease-in">
            <GrServices size={19} />

            <Link href="#">Registruoti gedimą</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
