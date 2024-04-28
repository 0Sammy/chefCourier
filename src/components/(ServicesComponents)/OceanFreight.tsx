import Image from "next/image";
import Link from "next/link";
//Import Images
import ocean from "../../../public/images/ocean.jpeg";
import ocean1 from "../../../public/images/ocean1.jpeg";
import logo from "../../../public/images/logo.svg";
//Import Icons
import { MdGppGood } from "react-icons/md";

const OceanFreight = () => {
  return (
    <main className="flex flex-col gap-y-5">
      <p className="mt-10 text-xs md:text-sm">
        Dive into the expansive possibilities of global shipping with United
        Traverse&apos;s Ocean Freight services. Navigating the vast oceans, our
        comprehensive offerings ensure a reliable and efficient solution for a
        spectrum of shipping requirements. Embarking on a journey of maritime
        excellence, we present a range of services that cater to every need.{" "}
        <br /> <br />
        At KJC Solution, we set sail with a commitment to excellence in Ocean
        Freight services, ensuring that every shipment, regardless of size or
        complexity, reaches its destination with precision, security, and
        unparalleled reliability.
      </p>
      <div className="mt-10 flex gap-x-5">
        <div className="relative w-1/2">
          <Image
            src={ocean}
            alt="Ocean Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 left-0 w-6 md:w-10">
            <Image
              src={logo}
              alt="KJC Solution Logo"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src={ocean1}
            alt="Ocean Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 right-0 w-6 md:w-10 ">
            <Image
              src={logo}
              alt="KJC Solution Logo"
              className="rounded-md"
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
                Full Container Load (FCL)
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                For sizable shipments, our Full Container Load service offers
                dedicated containers, providing security and exclusivity for
                your cargo.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Less than Container Load (LCL):
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Ideal for smaller shipments, our Less than Container Load
                service combines multiple shipments in a single container,
                ensuring cost-effective and efficient delivery.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Ro-Ro (Roll-on/Roll-off):
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Streamline the transportation of wheeled cargo with our Ro-Ro
                service, allowing vehicles and heavy machinery to be rolled onto
                and off the vessel with ease.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Breakbulk Shipping
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Opt for flexibility with our Breakbulk Shipping service,
                designed for goods that don&apos;t fit standard containers,
                ensuring secure transport for unique cargo.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Temperature-Controlled Freight:
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Safeguard the integrity of temperature-sensitive cargo with our
                Temperature-Controlled Ocean Freight, ensuring items such as
                pharmaceuticals or perishables reach their destination in
                optimal condition.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[49%]">
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Door-to-Door Ocean Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Enjoy a hassle-free shipping experience with our Door-to-Door
                Ocean Freight service, providing end-to-end solutions from your
                location to the final destination.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Project Cargo Handling
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Navigate complex logistics with our Project Cargo Handling
                service, tailored for large, specialized shipments requiring
                meticulous planning and execution.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Hazmat Shipping
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Trust our expertise in handling hazardous materials with our
                Hazmat Shipping service, ensuring compliance with international
                regulations for the safe transport of dangerous goods.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Global Network Ocean Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Leverage our extensive global network for seamless international
                shipments, connecting you to key ports worldwide with efficiency
                and reliability.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Charter Ocean Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Customize your shipping experience with our Charter Ocean
                Freight, providing dedicated vessels for exclusive use and
                maximum control over your cargo.
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

export default OceanFreight;
