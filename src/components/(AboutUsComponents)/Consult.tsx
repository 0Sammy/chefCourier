import Link from "next/link";
//Import Needed Components
import Heading from "../h1";
//Import Needed Images
import img from "../../../public/images/remove.jpg";
//Import Icons
import { MdGppGood } from "react-icons/md";
const Consult = () => {
  return (
    <main className="relative bg-[url('../../public/images/bg5.jpeg')] bg-cover bg-center object-center py-[8rem] text-white selection:bg-orange selection:text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
        <div className="flex flex-col items-center justify-center w-[90%] sm:w-[80%] md:w-[70%] xl:w-[60%] text-center mx-auto">
          <Heading
            heading="Consult The Services You Need Now!!!"
          />
          <p className="text-sm md:text-base mt-10 leading-relaxed">
            Discover a seamless solution to all your shipping and courier needs
            with KJC Solution. Our comprehensive services ensure that whether
            it&apos;s express deliveries, international shipments, or custom
            logistics, we stand as the ultimate answer to your shipping
            requirements, providing reliability, efficiency, and a commitment to
            exceed your expectations.
          </p>
          <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between mt-10 w-full items-center">
            <div className="flex items-center gap-x-1 w-[12rem]">
              <MdGppGood className=" text-white text-3xl"/>
              <p className="font-semibold text-xs sm:text-sm md:text-base">Fast Delivery</p>
            </div>
            <div className="flex items-center gap-x-1 w-[12rem]">
              <MdGppGood className=" text-white text-3xl"/>
              <p className="font-semibold text-xs sm:text-sm md:text-base">Competitive Prices</p>
            </div>
            <div className="flex items-center gap-x-1 w-[12rem]">
              <MdGppGood className=" text-white text-3xl"/>
              <p className="font-semibold text-xs sm:text-sm md:text-base">Wide Delivery Area</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-20 border border-white px-6 py-2 duration-500 bg-white text-orange"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Consult;
