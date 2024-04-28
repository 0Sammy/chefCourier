"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { signOut } from 'next-auth/react'

//Import Icons
import { GoHomeFill } from "react-icons/go";
import { FaFileSignature } from "react-icons/fa6";
import { MdReceiptLong } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { LuMenuSquare } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";


const Sidebar = ({currentRole}: {currentRole: string}) => {
    const pathName = usePathname()
  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <main>
      <div className="fixed left-0 top-0 z-50 hidden h-screen w-80 bg-black p-10 lg:block">
        <p className="mt-10 flex gap-x-3 border-b border-gray-600 pb-4 text-sm font-bold text-orange md:text-base">
          <RiAdminFill size={24} /> ADMINISTRATION
        </p>
        <div className={`mt-20 flex flex-col gap-y-5 font-semibold`}>
          <Link
            href="/admin/dashboard"
            prefetch
            className={`${pathName === "/admin/dashboard" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
          >
            <GoHomeFill size={24} /> Dasboard
          </Link>
          <Link
            href="/admin/orders"
            prefetch
            className={`${pathName === "/admin/orders" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
          >
            <MdReceiptLong size={24} /> Orders
          </Link>
          <Link
            href="/admin/contact"
            prefetch
            className={`${pathName === "/admin/contact" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
          >
            <IoMdContact size={24} /> Contact
          </Link>
          <Link
            href="/admin/quote"
            prefetch
            className={`${pathName === "/admin/quote" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
          >
            <FaFileSignature size={24} /> Quotes
          </Link>
          {currentRole === "superAdmin" &&
            <Link
              href="/admin/admin"
              prefetch
              className={`${pathName === "/admin/admin" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
            >
            <RiAdminFill  size={24} /> Admin
            </Link>
          }
          
        </div>
        <button
          onClick={() => signOut()}
          className={`absolute bottom-20 flex items-center gap-x-3 rounded-md p-4 text-sm text-white duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange`}
        >
          <LuLogOut size={24} /> Logout
        </button>
      </div>
      <LuMenuSquare
        className="relative left-4 top-4 mt-2 cursor-pointer text-orange focus:text-blue lg:hidden z-[40]"
        size={40}
        onClick={toggleOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 top-0 z-50 h-screen w-80 bg-black p-10 lg:hidden"
          >
            <AiOutlineCloseSquare
              onClick={toggleOpen}
              size={40}
              className="mb-10 cursor-pointer text-orange"
            />
            <p className="mt-10 flex gap-x-3 border-b border-gray-600 pb-4 text-sm font-bold text-orange md:text-base">
              <RiAdminFill size={24} /> ADMINISTRATION
            </p>
            <div className={`mt-20 flex flex-col gap-y-5 font-semibold`}>
              <Link
                href="/admin/dashboard"
                prefetch
                className={`${pathName === "/admin/dashboard" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange`}
              >
                <GoHomeFill size={24} /> Dasboard
              </Link>
              <Link
                href="/admin/orders"
                prefetch
                className={`${pathName === "/admin/orders" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange`}
              >
                <MdReceiptLong size={24} /> Orders
              </Link>
              <Link
                href="/admin/contact"
                prefetch
                className={`${pathName === "/admin/contact" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
              >
                <IoMdContact size={24} /> Contact
              </Link>
              <Link
              href="/admin/quote"
              prefetch
              className={`${pathName === "/admin/quote" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
              >
                <FaFileSignature size={24} /> Quotes
              </Link>
              {currentRole === "superAdmin" &&
                <Link
                  href="/admin/admin"
                  prefetch
                  className={`${pathName === "/admin/admin" ? "text-orange -translate-y-2 translate-x-2" : "text-white"} flex items-center gap-x-3 rounded-md p-4 text-sm  duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange md:text-base`}
                >
                <RiAdminFill  size={24} /> Admin
                </Link>
              }
              </div>
              <button
                onClick={() => signOut()}
                className={`absolute bottom-20 flex items-center gap-x-3 rounded-md p-4 text-sm text-white duration-500 hover:-translate-y-2 hover:translate-x-2 hover:text-orange hover:underline focus:-translate-y-2 focus:translate-x-2 focus:text-orange active:text-orange`}
              >
              <LuLogOut size={24} /> Logout
              </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Sidebar;
