'use client'
import { useEffect, useState } from "react";
import Navbar from "@/components/myui/Navbar";

export default function Education() {
  const [open, setOpen] = useState(false);
      useEffect(() => {
        setOpen(true);
      },[]);
  return (
    <>
      <Navbar />
      <div className={`my-10 flex w-full justify-center transition-all duration-1000 ${open ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-7xl font-bold">Education</h1>
      </div>
    </>
  );
}
