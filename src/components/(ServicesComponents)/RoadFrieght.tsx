import Image from "next/image";
import Link from "next/link";
//Import Images
import road from "../../../public/images/road.jpeg";
import road1 from "../../../public/images/road1.jpeg";
import logo from "../../../public/images/logo.svg";
//Import Icons
import { MdGppGood } from "react-icons/md";

const RoadFrieght = () => {
  return (
    <main className="flex flex-col gap-y-5">
      <p className="mt-10 text-xs md:text-sm">
        Embark on a journey of efficiency and reliability with United
        Traverse&apos;s Road Freight services. Designed to traverse the diverse
        landscapes of roadways, our comprehensive offerings ensure a seamless
        and secure solution for land transportation. As the wheels of progress
        turn, we present a range of services that cater to every road freight
        need. <br />
        <br />
        At KJC Solution, our commitment to excellence extends to the highways
        and byways. With our Road Freight services, we guarantee that every
        shipment is handled with precision, speed, and the unwavering
        reliability of our trucking fleet.
      </p>
      <div className="mt-10 flex gap-x-5">
        <div className="relative w-1/2">
          <Image
            src={road}
            alt="Road Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 left-0">
            <Image
              src={logo}
              alt="KJC Solution Logo"
              className="rounded-md"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src={road1}
            alt="Road Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 right-0">
            <Image
              src={logo}
              alt="KJC Solution Logo"
              className="rounded-md"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row sm:justify-between">
        <div className="w-full sm:w-[49%]">
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Full Truck Load (FTL)
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Opt for exclusive use with our Full Truck Load service, where a
                dedicated truck ensures the secure transportation of larger
                shipments with efficiency.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Less than Truck Load (LTL)
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                For smaller shipments, our Less than Truck Load service combines
                multiple shipments in a single truck, providing a cost-effective
                solution without compromising on reliability.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Express Road Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Swift and time-sensitive, our Express Road Freight service
                ensures your shipments reach their destination with speed,
                meeting tight delivery schedules.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Temperature-Controlled Road Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Safeguard the integrity of temperature-sensitive cargo with our
                Temperature-Controlled Road Freight, offering climate-controlled
                trucks for the transportation of perishable goods.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Door-to-Door Road Freight:
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Enjoy end-to-end convenience with our Door-to-Door Road Freight
                service, providing seamless solutions from your location to the
                recipient&apos;s doorstep.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[49%]">
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Flatbed Trucking
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Ideal for oversized or unconventional cargo, our Flatbed
                Trucking service accommodates shipments that require open and
                flexible transportation.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Hazmat Road Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Trust our expertise in handling hazardous materials with our
                Hazmat Road Freight service, ensuring compliance with safety
                regulations for the secure transport of dangerous goods.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Cross-Border Road Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Seamlessly navigate international borders with our Cross-Border
                Road Freight service, facilitating efficient and timely
                transportation across diverse regions.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Intermodal Road Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Optimize efficiency with our Intermodal Road Freight service,
                combining road and rail transport for a well-coordinated and
                cost-effective logistics solution.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Last-Mile Delivery
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Ensure the final leg of your shipment&apos;s journey is smooth with
                our Last-Mile Delivery service, providing meticulous delivery to
                the end recipient, including residential areas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          href="/quote"
          className="mt-5 w-40 transform bg-orange py-2 text-center text-sm text-white duration-500 hover:-translate-y-2 hover:translate-x-2 hover:bg-blue md:mt-10 md:py-3 md:text-base"
        >
          Get Started Now
        </Link>
      </div>
    </main>
  );
};

export default RoadFrieght;
