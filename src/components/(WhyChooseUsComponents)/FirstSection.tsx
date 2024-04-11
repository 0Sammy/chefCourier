import Image from "next/image";
//Import Needed Image
import aboutUs from "../../../public/images/aboutUs.jpeg";
import signature from "../../../public/images/signature.jpg";
//Import Needed Icons
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const FirstSection = () => {
  return (
    <main className="py-[8rem] px-4 sm:px-10 md:px-12 lg:px-14">
      <div className="flex flex-col items-center lg:items-end xl:items-center lg:flex-row lg:justify-between gap-y-10 lg:gap-y-0">
        <div className="w-full lg:w-[49%]">
          <p className="mb-8 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
            ABOUT US
          </p>
          <h1 className="mb-8 text-2xl font-[620] sm:text-3xl md:text-4xl lg:text-5xl">
            We Have More Than 20 Years of{" "}
            <span className="text-orange">Experience</span>.
          </h1>
          <div className="flex gap-x-5">
            <div className="flex w-1/2 flex-col gap-y-5">
              <div className="flex gap-x-2">
                <IoCheckmarkCircleSharp className="-mt-2 text-6xl text-orange sm:text-5xl md:text-3xl lg:text-4xl" />
                <div>
                  <p className="text-sm font-bold md:text-base lg:text-lg xl:text-xl">
                    Fast Delivery
                  </p>
                  <p className="mt-2 text-xs md:text-sm">
                    Experience prompt and reliable shipping services that
                    prioritize the swift arrival of your packages.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <IoCheckmarkCircleSharp className="-mt-2 text-6xl text-orange sm:text-5xl md:text-3xl lg:text-4xl" />
                <div>
                  <p className="text-sm font-bold md:text-base lg:text-lg xl:text-xl">
                    Competitive Prices
                  </p>
                  <p className="mt-2 text-xs md:text-sm">
                    Enjoy cost-effective solutions without compromising on the
                    quality of our shipping services.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-2">
                <IoCheckmarkCircleSharp className="-mt-2 text-7xl text-orange sm:text-6xl md:text-4xl lg:text-5xl" />
                <div>
                  <p className="text-sm font-bold md:text-base lg:text-lg xl:text-xl">
                    Wide Delivery Area
                  </p>
                  <p className="mt-2 text-xs md:text-sm">
                    Reach more destinations with our extensive network, ensuring
                    your packages are delivered wherever you need them.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-xs md:text-sm"> <span className="text-orange font-bold text-sm md:text-base">&apos;&apos;</span>
                As the Operations Manager at KJC Solution, I take pride in
                orchestrating a seamless logistics network. Our commitment to
                efficiency ensures swift deliveries, while strategic planning
                and a dedicated team drive our success. KJC Solution is not
                just a shipping company; it&apos;s a promise of reliability, speed,
                and excellence in every operation. <span className="text-orange font-bold text-sm md:text-base">&apos;&apos;</span>
              </p>
              <Image src={signature} className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] my-4" alt="Operations Manager Signature" placeholder="blur"/>
              <p className="mt-2 text-sm md:text-base font-bold">Elijah Mitchell.</p>
              <p className="mt-1 text-xs md:text-sm text-orange">Operations Manager</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[49%] relative text-white">
            <Image src={aboutUs} alt="Elijah Mitchell Image" className="rounded-xl" placeholder="blur"/>
            <div className="rounded-lg shadow-md absolute -right-4 sm:-right-8 top-4 p-2 sm:p-4 md:px-8 md:py-4 lg:p-4  lg:px-8 lg:py-4 bg-orange flex flex-col items-center justify-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-[620]">250K<sup>+</sup></h1>
                <p className="text-xs md:text-sm font-semibold">Client Export & Import</p>
            </div>
            <div className="rounded-lg shadow-md absolute -left-4 sm:-left-8 bottom-4 p-2 sm:p-4 md:px-8 md:py-4 lg:p-4 lg:px-8 lg:py-4 bg-blue flex flex-col items-center justify-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-[620]">8<sup>+</sup></h1>
                <p className="text-xs md:text-sm font-semibold">Shipping Fleet</p>
            </div>
        </div> 
      </div>
    </main>
  );
};

export default FirstSection;
