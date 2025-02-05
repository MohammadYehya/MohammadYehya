"use client";
import Link from "next/link";
import { useState } from "react";
import { data } from "../../lib/data/config";
import { CodeXml } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
      <nav className="w-screen max-w-screen h-[45px] flex items-center bg-white bg-opacity-90 sticky top-3 shadow lg:px-2 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="w-full flex items-center justify-between text-slate-800 px-8">
          <div className="mr-4 font-bold flex lg:flex-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex"
            >
              <CodeXml className="mr-2" />
              <div className="hidden lg:flex">{`${data.UserData.name} ${data.UserData.lastname}`}</div>
            </Link>
          </div>
          <div className="mr-4 font-bold flex flex-1 justify-center lg:hidden">
            <Link
              href="/"
              className="flex"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {`${data.UserData.name} ${data.UserData.lastname}`}
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="hidden lg:block">
            <ul className="flex flex-col mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              {Object.keys(data.NavItems).map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-2 px-4 text-black hover:bg-slate-300 transition-all duration-200"
                >
                  <Link href={data.NavItems[item as keyof typeof data.NavItems].href} className="flex items-center">
                    <div className="scale-[60%]"></div>
                    {data.NavItems[item as keyof typeof data.NavItems].icon}
                    {data.NavItems[item as keyof typeof data.NavItems].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">test</div>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 min-h-screen w-full bg-white transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden z-50`}
      >
        <div className="flex flex-row items-center border-b  pt-[45px]">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-full gap-4 p-4">
          {
            Object.keys(data.NavItems).map((item, index) => (
              <li
              key={index}
              className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
            >
              <Link
                href={data.NavItems[item as keyof typeof data.NavItems].href}
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="scale-[60%]"></div>
                {data.NavItems[item as keyof typeof data.NavItems].icon}
                {data.NavItems[item as keyof typeof data.NavItems].name}
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
