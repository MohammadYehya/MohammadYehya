"use client";
import { data } from "@/lib/data/config";
import img from "@/lib/data/selfpic.png";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex p-2 lg:p-40 h-10 w-full flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-normal justify-center items-center">
        <div className="flex flex-col lg:justify-normal justify-center items-center lg:items-start text-center lg:text-start">
          <h1 className="text-6xl font-bold w-auto flex flex-col">
            <div className="">
              {data.UserData.name} {data.UserData.lastname},
            </div>
          <div className="w-auto relative">
            <div className="absolute inset-x-[12.5%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
            <div className="absolute inset-x-[12.5%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
            <div className="absolute inset-x-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
            <div className="absolute inset-x-[37.5%] top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
          </div>
          </h1>

          <p className="flex lg:w-auto py-4 px-4 lg:pr-20 lg:px-0">
            {data.UserData.about}
          </p>
          <p className="flex gap-x-3">
            <Link href={data.UserData.github} className="rounded-full p-2 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:scale-110">
              <Github />
            </Link>
            <Link href={data.UserData.linkedin} className="rounded-full p-2 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:scale-110">
              <Linkedin />
            </Link>
          </p>
        </div>
        <div>
          <Image
            src={img}
            alt="Self Pic"
            className="rounded-full border-4 border-white shadow-black shadow-2xl max-w-60 mt-4"
          />
        </div>
      </div>
    </div>
  );
}
