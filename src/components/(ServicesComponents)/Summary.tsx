import { IoPeople } from "react-icons/io5";
import { GiCargoCrate } from "react-icons/gi";
import { PiPackageFill } from "react-icons/pi";
import { LiaShipSolid } from "react-icons/lia";

const Summary = () => {
  return (
    <main className="relative bg-[url('../../public/images/bg4.jpeg')] bg-cover bg-center object-center py-[8rem] text-white selection:bg-orange selection:text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
          <div className="mx-auto flex w-[90%] flex-row items-center text-center gap-x-5 sm:w-[80%] lg:w-[70%] overflow-x-auto special pb-4">
            <div className="min-w-[12rem] w-1/4 flex flex-col items-center gap-y-3">
                <PiPackageFill className="text-3xl sm:text-4xl md:text-5xl  shrink-0"/>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">2 Million<sup className="">+</sup></h1>
                <p className="font-bold text-lg">Delivered Goods</p>
                <div className="h-1 w-full bg-orange"></div>
            </div>
            <div className="min-w-[12rem] w-1/4 flex flex-col items-center gap-y-3">
                <GiCargoCrate className="text-3xl sm:text-4xl md:text-5xl  shrink-0"/>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">1,200<sup className="">+</sup></h1>
                <p className="font-bold text-lg">Client Import & Export</p>
                <div className="h-1 w-full bg-orange"></div>
            </div>
            <div className="min-w-[12rem] w-1/4 flex flex-col items-center gap-y-3">
                <LiaShipSolid className="text-3xl sm:text-4xl md:text-5xl  shrink-0"/>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">8<sup className="">+</sup></h1>
                <p className="font-bold text-lg">Shipping Fleet</p>
                <div className="h-1 w-full bg-orange"></div>
            </div>
            <div className="min-w-[12rem] w-1/4 flex flex-col items-center gap-y-3">
                <IoPeople className="text-3xl sm:text-4xl md:text-5xl  shrink-0"/>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">500<sup className="">+</sup></h1>
                <p className="font-bold text-lg">Elite Professionals</p>
                <div className="h-1 w-full bg-orange"></div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default Summary;
