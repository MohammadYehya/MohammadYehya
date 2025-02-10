"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CirclePlus } from "lucide-react";
import { MyExperiences } from "../../../public/data/config";

export default function Experience() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center">
        <div
          className={`my-10 w-full lg:w-[70%] flex flex-col justify-center items-center transition-all duration-1000 lg:gap-y-0 gap-y-3 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="lg:text-7xl text-5xl font-bold mb-8">Experience</h1>
          {MyExperiences.content.map((details, index) => (
            <div
              className="flex even:flex-row odd:flex-row-reverse w-full justify-center lg:p-0 p-2"
              key={index}
            >
              <Card className="flex flex-1 h-96 shadow-2xl border-slate-300 p-4">
                {}
              </Card>
              <div className="lg:flex lg:flex-col items-center mx-4 hidden ">
                <Separator
                  orientation="vertical"
                  className="flex flex-1 bg-slate-400"
                />
                <CirclePlus />
                <Separator
                  orientation="vertical"
                  className="flex flex-1 bg-slate-400"
                />
              </div>
              <Card className="lg:flex lg:flex-1 opacity-0 hidden p-4"></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
