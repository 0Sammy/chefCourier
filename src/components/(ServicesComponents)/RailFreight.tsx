import Image from "next/image";
import Link from "next/link";
//Import Images
import rail from "../../../public/images/rail.jpeg";
import rail1 from "../../../public/images/rail1.jpeg";
import logo from "../../../public/images/logo.png";
//Import Icons
import { MdGppGood } from "react-icons/md";
const RailFreight = () => {
  return (
    <main className="flex flex-col gap-y-5">
      <p className="mt-10 text-xs md:text-sm">
        Discover the steadfast reliability of KJC Solution&apos;s Rail
        Freight services — a robust solution that harnesses the efficiency of
        rail transportation. As the tracks weave through diverse landscapes, we
        present an array of services designed to cater to a spectrum of rail
        freight needs. <br />
        <br />
        At KJC Solution, our Rail Freight services signify a commitment to
        sustainable and efficient logistics. With the reliability of rail
        transportation, we provide a comprehensive solution that combines speed,
        security, and the precision needed for the successful transit of your
        cargo.
      </p>
      <div className="mt-10 flex gap-x-5">
        <div className="relative w-1/2">
          <Image
            src={rail}
            alt="Rail Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 left-0 w-6 md:w-10">
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
            src={rail1}
            alt="Rail Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 right-0 w-6 md:w-10">
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
                Intercontinental Rail Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Our Intercontinental Rail Freight service seamlessly connects
                continents, offering a cost-effective and environmentally
                friendly alternative to traditional shipping methods.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Bulk Cargo Rail Transport
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                For large volumes of goods, our Bulk Cargo Rail Transport
                service provides an efficient solution, utilizing the capacity
                of trains for the secure transport of sizable shipments.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Time-Definite Rail Freight:
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Align your shipments with precision using our Time-Definite Rail
                Freight service, ensuring timely delivery schedules are met with
                the reliability of rail transportation.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Specialized Rail Containers
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Tailored for specific cargo requirements, our Specialized Rail
                Containers provide a secure and customized solution for
                transporting goods that demand special handling.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[49%]">
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Cross-Country Rail Shipping
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Traverse the nation with ease through our Cross-Country Rail
                Shipping service, offering a reliable and cost-effective mode of
                transportation for shipments within the country.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                High-Value Cargo Rail Transport
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Safeguard high-value goods with our High-Value Cargo Rail
                Transport, utilizing the security features of rail
                transportation for the transit of valuable shipments.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Temperature-Controlled Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Ensure the integrity of temperature-sensitive cargo with our
                Temperature-Controlled Rail Freight, utilizing
                climate-controlled railcars for the secure transportation of
                perishable goods.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Rail Freight Network Connectivity
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Leverage our expansive Rail Freight Network Connectivity,
                connecting key destinations with a well-coordinated rail
                infrastructure for efficient and reliable transportation.
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

export default RailFreight;
