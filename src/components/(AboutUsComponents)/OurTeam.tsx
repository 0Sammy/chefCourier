"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//Import Needed Components
import Heading from "@/components/h1";
import OpenHistory from "./OpenHistory";
//Import Images
import CEO from "../../../public/images/ceo.jpeg";
import operationsManager from "../../../public/images/aboutUs.jpeg";
import logisticsManager from "../../../public/images/logistics.jpeg";
import branchManager from "../../../public/images/branchManager.jpeg";
import shippingCoordinator from "../../../public/images//shippingCoordinator.jpeg";
import courierDriver from "../../../public/images/logisticsManager.jpeg";
//Import Links
import { FaLinkedin } from "react-icons/fa";
const OurTeam = () => {
  //The States
  const [open, setOpen] = useState<boolean>(false)
  //The Toggle Function
  const toggleOpen = () => {
    setOpen((prevOpen => !prevOpen))
  }
  return (
    <>{open && <OpenHistory />}
    <main className="px-4 py-[8rem] sm:px-10 md:px-12 lg:px-14">
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="border border-blue h-96 hover:scale-105 duration-500 shrink-0 w-[16rem] rounded-lg  p-4 shadow-md flex flex-col justify-center items-center">
          <p className="mb-4 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
            KJC Solution Team
          </p>
          <Heading heading="Our" coloredHeading="Team" />
          <p className="text-sm mt-4 text-left">
            Explore the heartbeat of KJC Solution - our dedicated team of
            shipping professionals committed to delivering excellence in courier
            services.
          </p>
          <Link href="/quote" className="transform hover:translate-x-2 hover:-translate-y-2 w-40 text-center py-2 md:py-3 bg-orange hover:bg-blue text-white duration-500 mt-5 md:mt-10 text-sm md:text-base">Get Free Quote</Link>
        </div>
        <div className="relative h-96 hover:scale-105 duration-500 shrink-0 group rounded-lg w-[16rem] shadow-md">
            <Image src={CEO} alt="CEO KJC Solution" className="rounded-lg "/>
            <div className="absolute top-0 right-0 bg-blue p-2">
             <FaLinkedin className="text-3xl group-hover:text-orange1 duration-500 text-white cursor-pointer"/>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue p-2 rounded-lg">
                <h1 className="font-bold text-lg text-white">Christopher Davis</h1>
                <p className="text-orange1 text-right text-sm group-hover:text-white duration-500 font-semibold">CEO</p>
            </div>
        </div>
        <div className="relative h-96 hover:scale-105 duration-500 shrink-0 w-[16rem] group rounded-lg shadow-md">
          <Image src={operationsManager} alt="Operations Manager KJC Solution" className="rounded-lg h-full object-cover"/>
            <div className="absolute top-0 right-0 bg-blue p-2">
             <FaLinkedin className="text-3xl group-hover:text-orange1 duration-500 text-white cursor-pointer"/>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue p-2 rounded-lg">
                <h1 className="font-bold text-lg text-white">Elijah Mitchell</h1>
                <p className="text-orange1 text-right text-sm group-hover:text-white duration-500 font-semibold">Operations Manager</p>
            </div>
        </div>
        <div className="relative h-96 hover:scale-105 duration-500 shrink-0 w-[16rem] group rounded-lg shadow-md">
            <Image src={logisticsManager} alt="Logistics Manager KJC Solution" className="rounded-lg "/>
            <div className="absolute top-0 right-0 bg-blue p-2">
             <FaLinkedin className="text-3xl group-hover:text-orange1 duration-500 text-white cursor-pointer"/>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue p-2 rounded-lg">
                <h1 className="font-bold text-lg text-white">Benjamin Turner</h1>
                <p className="text-orange1 text-right text-sm group-hover:text-white duration-500 font-semibold">Logistics Manager</p>
            </div>
        </div> 
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="relative h-96 hover:scale-105 duration-500 shrink-0 w-[16rem] group rounded-lg shadow-md">
            <Image src={branchManager} alt="Branch Manager KJC Solution Baghdad" className="rounded-lg "/>
            <div className="absolute top-0 right-0 bg-blue p-2">
             <FaLinkedin className="text-3xl group-hover:text-orange1 duration-500 text-white cursor-pointer"/>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue p-2 rounded-lg">
                <h1 className="font-bold text-lg text-white">Ahmed Al-Mansoori</h1>
                <p className="text-orange1 text-right text-sm group-hover:text-white duration-500 font-semibold">Branch Manager (IRAQ)</p>
            </div>
        </div>
        <div className="relative h-96 hover:scale-105 duration-500 shrink-0 w-[16rem] group rounded-lg shadow-md">
            <Image src={shippingCoordinator} alt="Shipping Coordinator KJC Solution Baghdad" className="rounded-lg h-full object-cover"/>
            <div className="absolute top-0 right-0 bg-blue p-2">
             <FaLinkedin className="text-3xl group-hover:text-orange1 duration-500 text-white cursor-pointer"/>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue p-2 rounded-lg">
                <h1 className="font-bold text-lg text-white">Malek Abbas</h1>
                <p className="text-orange1 text-right text-sm group-hover:text-white duration-500 font-semibold">Shipping Coordinator (IRAQ)</p>
            </div>
        </div>
        <div className="relative hover:scale-105 duration-500 h-96 shrink-0 w-[16rem] group rounded-lg shadow-md">
            <Image src={courierDriver} alt="Courier Driver KJC Solution Baghdad" className="rounded-lg "/>
            <div className="absolute top-0 right-0 bg-blue p-2">
             <FaLinkedin className="text-3xl group-hover:text-orange1 duration-500 text-white cursor-pointer"/>
            </div>
            <div className="absolute bottom-4 right-4 bg-blue p-2 rounded-lg">
                <h1 className="font-bold text-lg text-white">Karim Hassan</h1>
                <p className="text-orange1 text-right text-sm group-hover:text-white duration-500 font-semibold">Courier Driver (IRAQ)</p>
            </div>
        </div>
        <div className="hover:scale-105 duration-500 flex flex-col items-center justify-center h-96 shrink-0 w-[16rem] group rounded-lg shadow-md border border-blue p-4">
           <h1 className="capitalize text-2xl font-semibold text-center text-blue"> <span className="text-orange">KJC Solution&apos;s</span> brief history?</h1> 
           <button onClick={toggleOpen} className="mt-10 px-4 py-2 bg-orange border text-white border-orange hover:bg-white hover:text-orange duration-500">Read Here</button>  
        </div>
      </div>
    </main>
    </>
  );
};

export default OurTeam;
