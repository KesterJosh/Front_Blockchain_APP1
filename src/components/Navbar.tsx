"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/constants";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import images from "../../public/images";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center py-5 relative bg-[#150A2A]">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="bg-white rounded-full p-0">
          <Image
            alt="logo"
            src={images.logo}
            className="w-12 md:w-16 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="max-md:hidden text-white">
          {/* <div className="max-xl:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-4 lg:gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-sm lg:text-base font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div> */}
          <div className="flex items-center gap-3.5 lg:gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-sm lg:text-base font-medium "
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2.5 lg:gap-4 xl:gap-6 lg:justify-between text-white">
          <Link className="" href={"/"}>
            Signup
          </Link>
          <Link
            href={"/"}
            className="px-8 py-2.5 rounded-lg bg-[#5800FF33] border border-[#A576FF]"
          >
            Login
          </Link>

          <div
            className="ml-1 md:hidden px-1 py-1 rounded-md xs:rounded-lg border border-border-200 dark:border-border-300 flex justify-center items-center cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <TbMenu2 className="text-xl text-text-200 dark:text-white" />
          </div>
        </div>
      </div>

      {/* Add the sliding menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[85%] 2xs:w-[80%] xs:w-[70%] sm:w-[60%] bg-white dark:bg-[#232323] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="px-5 2xs:px-6 py-8 flex flex-col gap-8 h-full">
          <div className="flex justify-between px-1 2xs:px-2 mb-2 2xs:mb-4">
            <Image
              alt="logo"
              src={images.logo}
              className="w-14 cursor-pointer"
              onClick={() => router.push("/")}
            />
            <IoCloseOutline
              className="text-4xl text-[#41415A] dark:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="border-b border-[#F1F1F1] dark:border-[#3D3D3D] text-base font-semibold text-text-100 dark:text-white py-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-6 2xs:mt-10">
            <Link
              href={"/login"}
              className="px-6 py-3 rounded-lg 2xs:rounded-xl border border-black text-black font-semibold text-base text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              className="px-6 py-3 rounded-lg 2xs:rounded-xl bg-[#5800FF33] border border-[#A576FF] text-black font-semibold text-base text-center"
              href={"/signup"}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Add overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
