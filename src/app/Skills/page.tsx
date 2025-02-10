"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";
import { Card } from "@/components/ui/card";
import { MySkills } from "../../../public/data/config";
import Image from "next/image";

export default function Skills() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <>
      <Navbar />
      <div
        className={`my-10 w-full flex justify-center transition-all duration-1000 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex px-4 md:w-[80%] justify-center flex-col">
          <h1 className="text-7xl font-bold flex justify-center mb-5">
            Skills
          </h1>
          {MySkills.content.map((item, index) => (
            <div className="" key={index}>
              <div className="flex justify-center items-center mt-10">
                <div className="w-[50px] border flex"></div>
                <div className="flex text-sm px-4 text-gray-400">
                  {item.group}
                </div>
                <div className="border flex flex-1"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-y-3 md:gap-x-3 mt-4">
                {item.content.map((details, index) => {
                  return (
                    <Card
                      key={index}
                      className={`flex flex-row justify-start lg:flex-1 w-full md:min-w-[49%] md:max-w-[49%] lg:min-w-[30%] lg:max-w-[30%] p- h-14 hover:h-32 group items-center transition-all duration-300 ease-in-out overflow-clip`}
                    >
                      <div className="font-bold items-start flex w-full pl-5">
                        {details.name}
                      </div>
                      <Image
                        src={details.imgpath}
                        alt=""
                        width={175}
                        height={1}
                        className="opacity-60"
                        draggable={false}
                      />
                      {/* <div
                      className={`group-hover:flex text-transparent group-hover:text-black transition-all duration-500 ease-in-out`}
                    >
                      Proficiency: {details.proficiency}
                    </div> */}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
