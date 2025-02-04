import { data } from "@/lib/data/config";
import img from "../../public/selfpic.png";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex p-2 lg:p-40 h-10 w-full flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-normal justify-center items-center">
        <div className="flex flex-col lg:justify-normal justify-center items-center lg:items-start text-center lg:text-start">
          <h1 className="text-6xl font-bold w-auto flex">
            {data.UserData.name} {data.UserData.lastname},
          </h1>
          <p className="flex lg:w-auto py-4 px-4 lg:pr-20 lg:px-0">{data.UserData.about}</p>
          <p className="flex gap-x-3">
            <Link href={data.UserData.github}>
              <Github />
            </Link>
            <Link href={data.UserData.linkedin}>
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
