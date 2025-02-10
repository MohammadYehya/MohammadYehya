"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MyProjects, MySkills } from "../../../public/data/config";
import { CalendarClock, Component } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setOpen(true);
  }, []);
  function getPath(skill: string) {
    return MySkills.content
      .map(
        (group) => group.content.find((item) => item.name === skill)?.imgpath
      )
      .toSorted()[0];
  }
  return (
    <>
      <Navbar />
      <div
        className={`my-10 w-full flex justify-center transition-all duration-1000 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex px-4 md:px-14 justify-center flex-col">
          <h1 className="text-7xl font-bold flex justify-center mb-5">
            Projects
          </h1>
          <div className="flex flex-wrap justify-center gap-y-2 md:gap-x-2">
            {MyProjects.content.map((item, index) => {
              return (
                <Card
                  key={index}
                  className="flex md:flex-1 flex-col w-full md:min-w-[300px] md:max-w-[300px] p-5 hover:scale-110 hover:cursor-pointer transition-all duration-500 shadow-2xl"
                  onClick={() => {
                    router.push(item.link);
                  }}
                >
                  {item.Logo ? (
                    <Image src={item.Logo} alt="" width={50} height={50} />
                  ) : (
                    <></>
                  )}
                  <div className="font-bold text-lg mt-4">{item.title}</div>
                  <Separator className="my-4" />
                  <div className="text-sm text-slate-500 flex items-center mb-2">
                    <Component className="scale-[70%]" />
                    {item.type}
                  </div>
                  <div className="text-sm text-slate-500 flex items-center mb-4">
                    <CalendarClock className="scale-[70%]" />
                    {item.startDate} - {item.endDate}
                  </div>
                  <div className="text-sm text-slate-500 flex items-center mb-4">
                    {item.description}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex flex-1 flex-wrap gap-2">
                    {item.tech.map((item, index) => (
                      <div
                        className="w-10 h-10 border border-black rounded-md flex justify-center items-center"
                        key={index}
                      >
                        <Image
                          src={`${getPath(item)}`}
                          alt=""
                          width={20}
                          height={1}
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
