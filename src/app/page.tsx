"use client";
import { UserData } from "@/lib/data/config";
import img from "@/lib/data/selfpic.png";
import Image from "next/image";
import { Github, Linkedin, UserPen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";
// import { NumberTicker } from "@/components/magicui/number-ticker";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  },[]);
  return (
    <>
      <Navbar />
      <div
        className={`flex p-2 lg:px-40 lg:py-28 h-10 w-screen flex-col transition-all duration-1000 ${
          open ? "opacity-100 " : "opacity-0 "
        }`}
      >
        <div
          className={`flex flex-col lg:flex-row lg:justify-normal justify-center items-center`}
        >
          {/* Content */}
          <div
            className={`flex flex-col lg:justify-normal justify-center items-center lg:items-start text-center lg:text-start transition-all duration-1000 ${
              open ? " translate-x-0" : " -translate-x-full"
            }`}
          >
            <h1 className="text-7xl font-bold w-auto flex flex-col">
              <div className="">
                {UserData.name} {UserData.lastname},
              </div>
              <div className="w-auto relative mt-4 md:mt-0">
                <div className="absolute inset-x-[12.5%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
                <div className="absolute inset-x-[12.5%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
                <div className="absolute inset-x-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
                <div className="absolute inset-x-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
              </div>
            </h1>
            <h2 className="pt-4 pb-2 text-lg font-mono text-gray-600">
              {UserData.profession}
            </h2>
            <p className="flex lg:w-auto pb-4 px-4 lg:pr-20 lg:px-0">
              {UserData.about}
            </p>
            {/* <div className="flex justify-evenly items-center  w-[80%] h-auto p-4 mb-2">
              <div>
                <NumberTicker
                  value={6}
                  className="text-5xl font-medium tracking-tighter flex-1 justify-center flex mb-1"
                />
                Projects Completed
              </div>
              <div>
                <NumberTicker
                  value={2}
                  className="text-5xl font-medium tracking-tighter flex-1 justify-center flex mb-1"
                />
                Years of Experience
              </div>
              <div>
                <NumberTicker
                  value={700}
                  className="text-5xl font-medium tracking-tighter flex-1 justify-center flex mb-1"
                />
                Contributions
              </div>
            </div> */}
            <p className="flex gap-x-3">
              <Link
                href={UserData.github}
                className="rounded-full p-2 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:scale-110"
              >
                <Github />
              </Link>
              <Link
                href={UserData.linkedin}
                className="rounded-full p-2 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:scale-110"
              >
                <Linkedin />
              </Link>
              <Link
                href={"/Contact"}
                className="rounded-full p-2 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:scale-110"
              >
                <UserPen />
              </Link>
            </p>
          </div>

          {/* Image */}
          <div
            className={`flex mt-4 transition-all duration-1000 ${
              open ? " translate-x-0" : " translate-x-1/2"
            }`}
          >
            <Image
              src={img}
              alt="Self Pic"
              className="rounded-full border-4 border-white shadow-black shadow-2xl max-w-60"
            />
          </div>
        </div>
      </div>
    </>
  );
}
