"use client";
import React, { useState } from "react";
import Link from "next/link";
//Import needed components
import Heading from "../h1";
import AirFreight from "./AirFreight";
import OceanFreight from "./OceanFreight";
import RoadFrieght from "./RoadFrieght";
import RailFreight from "./RailFreight";
import ImportExport from "./Import&Export";
import Others from "./Others"
//Import needed Icons
import { FaHandPointRight } from "react-icons/fa";
import { BsFacebook, BsTrainFreightFrontFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { LuCalendarCheck } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";
import { LiaShipSolid } from "react-icons/lia";
import { FaTruckFront } from "react-icons/fa6";
import { VscArrowSwap } from "react-icons/vsc";
;

const ServiceOverview = () => {

  // Get today's date
  const today = new Date();

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  // Format date as 'April 5, 2022'
  const formattedDate = today.toLocaleDateString('en-US', options);

  const servicesArray = [
    { name: "Air Freight", status: "air" },
    { name: "Ocean Freight", status: "ocean" },
    { name: "Road Freight", status: "road" },
    { name: "Rail Freight", status: "rail" },
    { name: "Import & Export", status: "import" },
    { name: "Other Services", status: "other" },
  ];
  // eslint-disable-next-line react/jsx-key
  const icons = [<BsFacebook />,<SiInstagram />,<IoLogoTwitter />,<FaYoutube />,
  ];
  //Text States
  const [show, setShow] = useState<string>("air");
  //Render based on the value of show
  let content 
  let icon
  let body

  switch (show) {
    case 'air':
        icon = <GiCommercialAirplane className="text-sm sm:text-base md:text-lg lg:text-xl"/> 
      content = <p className="text-xs md:text-sm">Air Freight</p>;
      body = <AirFreight />
      break;
    case 'ocean':
        icon = <LiaShipSolid className="text-sm sm:text-base md:text-lg lg:text-xl"/>
      content = <p className="text-xs md:text-sm">Ocean Freight</p>;
      body = <OceanFreight />
      break;
    case 'road':
        icon = <FaTruckFront className="text-orange text-xl"/>
      content = <p className="text-xs md:text-sm">Road Freight.</p>;
      body = <RoadFrieght />
      break;
    case 'rail':
        icon = <BsTrainFreightFrontFill className="text-sm sm:text-base md:text-lg lg:text-xl"/>
      content = <p className="text-xs md:text-sm">Rail Freight.</p>;
      body = <RailFreight />
      break;
    case 'import':
        icon = <VscArrowSwap className="text-sm sm:text-base md:text-lg lg:text-xl"/>
      content = <p className="text-xs md:text-sm">Import & Export.</p>;
      body = <ImportExport />
      break;
    case 'other':
        icon = <BsFillPatchQuestionFill className="text-sm sm:text-base md:text-lg lg:text-xl"/>
      content = <p className="text-xs md:text-sm">Other Services.</p>;
      body = <Others />
      break;
    default:
        icon = <GiCommercialAirplane className="text-sm sm:text-base md:text-lg lg:text-xl"/>
      content = <p className="text-xs md:text-sm">Air Freight</p>;
      body = <AirFreight />
  }
  return (
    <main className="bg-bgWhite px-4 py-[8rem] sm:px-10 md:px-12 lg:px-14">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 lg:gap-y-0">
        <div className="flex w-full flex-row gap-x-3 special overflow-x-auto pb-4 sm:gap-x-5 md:gap-x-7 lg:w-[30%] lg:flex-col lg:justify-start lg:gap-x-0 lg:gap-y-3 xl:w-[25%]">
          <div className="w-60 shrink-0 rounded-xl bg-blue px-4 py-8 lg:w-full xl:px-8">
            <h1 className="text-xl font-bold text-white lg:text-2xl">
              Recent Services
            </h1>
            {servicesArray.map((services, index) => (
              <div key={index} className="mt-4 flex items-center gap-x-2">
                <div className="rounded-[50%] bg-orange p-1">
                  <FaHandPointRight className="text-lg text-white" />
                </div>
                <p
                  onClick={() => setShow(servicesArray[index].status)}
                  className={`text-${show === servicesArray[index].status ? "orange1" : "white" } cursor-pointer font-semibold transform duration-500 hover:translate-x-2`}
                >
                  {servicesArray[index].name}
                </p>
              </div>
            ))}
          </div>
          <div className="w-60 shrink-0 rounded-xl bg-blue px-4 py-8 lg:w-full xl:px-8">
            <h1 className="mb-10 text-xl font-bold text-white lg:text-2xl">
              Require a specific service not outlined here?
            </h1>
            <Link
              href="/contact"
              className="rounded-md px-6 py-3 bg-white text-orange duration-500"
            >
              Contact Us
            </Link>
          </div>
          <div className="w-60 shrink-0 rounded-xl bg-blue px-4 py-8 lg:w-full xl:px-8">
            <h1 className="mb-10 text-xl font-bold text-white lg:text-2xl">
              Follow Us On
            </h1>
            <div className="flex justify-between">
              {icons.map((icon, index) => (
                <div key={index} className="rounded-[50%] bg-orange p-2">
                  {React.cloneElement(icons[index], {
                    className: "text-2xl text-white cursor-not-allowed",
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] xl:w-[85%]">
          <Heading heading="Service" coloredHeading="Overview" />
          <div className="flex gap-x-3 md:gap-x-5 mt-4">
                <div className="flex gap-x-2 items-center">
                  <LuCalendarCheck className="text-orange text-xl"/>
                  <p className="text-xs md:text-sm">{formattedDate}.</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    {icon}
                   {content}
                </div>
          </div>
          <div>
          {body}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceOverview;
