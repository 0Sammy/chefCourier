"use client";
import React, { useEffect, useState } from "react";
//Icons
import {
  LiaShipSolid,
  LiaWarehouseSolid,
  LiaTruckSolid,
} from "react-icons/lia";
import { IoMdPaperPlane } from "react-icons/io";


const SecondSection = () => {
  const [currentDiv, setCurrentDiv] = useState<number>(0);
  // eslint-disable-next-line react/jsx-key
  const icons = [<LiaShipSolid />,<LiaWarehouseSolid />,<IoMdPaperPlane />,<LiaTruckSolid />,
  ];
  const texts = [ "Experience unparalleled reliability in Sea Freight with KJC Solution—our meticulous planning and global network ensure timely deliveries across oceans.",
                  "KJC Solution's Warehousing solutions guarantee optimal storage and distribution efficiency, providing a seamless link in your supply chain.",
                  "Choose KJC Solution for Air Freight excellence—our swift and secure aerial logistics ensure your shipments reach their destinations with unmatched speed.",
                  "In Trucking, KJC Solution stands out for its precision and flexibility, delivering your goods on time, every time, with a commitment to reliability and safety."
  ];
  const headings = [
    "Sea Freight", "Warehousing", "Air Freight", "Trucking"
  ]

  //Use Effect Function For The Automatic Background Changing
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % 4);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="px-4 lg:py-[8rem] sm:px-10 md:px-12 lg:px-14">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 text-white">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className={`flex h-60 w-80 flex-col gap-y-3 items-center justify-center bg-${index === currentDiv ? 'orange' : 'blue'} px-4 group hover:bg-orange duration-500`}>
          {React.cloneElement(icons[index], {
            className: `${index === currentDiv ? 'text-white' : 'text-orange'} group-hover:text-white duration-500 text-2xl md:text-4xl`,
          })}
          <p className="text-xl font-bold">{headings[index]}</p>
          <p className="text-xs md:text-sm text-center">
            {texts[index]}
          </p>
        </div>
        ))}
      </div>
    </main>
  );
};

export default SecondSection;
