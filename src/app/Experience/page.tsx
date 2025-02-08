'use client'
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";

export default function Experience() {
  const [open, setOpen] = useState(false);
      useEffect(() => {
        setOpen(true);
      },[]);
  return (
    <>
      <Navbar />
      <div className={`my-10 flex flex-col w-full justify-center transition-all duration-1000 ${open ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-7xl font-bold">Experience</h1>
        {[1, 2, 3, 4].map((x, index) => (
          <div
            className={`flex ${
              index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
            } gap-4`}
            key={index}
          >
            <div className="flex flex-1 flex-col justify-center lg:py-[50px]">
              {x}
            </div>
            <div>
              <div className="w-[1px] flex-1 bg-[--color]"></div>
              <div className="my-2 text-[--icon]"></div>
              <div className="w-[1px] flex-1 bg-[--color]"></div>
            </div>
            <div className="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div>
          </div>
        ))}
      </div>
    </>
  );
}
