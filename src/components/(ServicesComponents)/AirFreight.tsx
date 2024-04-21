import Image from "next/image";
import Link from "next/link";
//Import Images
import air from "../../../public/images/air.jpeg";
import air1 from "../../../public/images/air1.jpeg";
import logo from "../../../public/images/logo.svg";
//Import Icons
import { MdGppGood } from "react-icons/md";

const AirFreight = () => {
  return (
    <main className="flex flex-col gap-y-5">
      <p className="mt-10 text-xs md:text-sm">
        Embark on a journey of efficiency and reliability with United
        Traverse&apos;s comprehensive range of Air Freight services. Our
        commitment to delivering excellence is evident in the diverse options we
        offer to cater to every shipping need. Whether it&apos;s the urgency of
        our Next Flight Out service, the precision of Temperature-Controlled Air
        Freight, or the cost-effectiveness of Consolidated Air Freight, United
        Traverse ensures a seamless experience tailored to your requirements.{" "}
        <br /> <br />
        Experience the advantage of our Door-to-Door Air Freight, providing
        end-to-end convenience for your shipments. Our Priority Air Freight
        service guarantees premium handling for those time-sensitive deliveries.
        For oversized or heavy cargo, trust our specialized Heavy Cargo Air
        Transport to navigate the unique challenges with ease. <br />
        <br /> Need exclusive service? Our Charter Air Freight allows you to
        customize your shipping experience with a dedicated aircraft.
        Furthermore, leverage our extensive Global Network Air Freight for
        international shipments, connecting you to key destinations worldwide.{" "}
        <br />
        <br /> At KJC Solution, we understand that each shipment is unique.
        With our diverse portfolio of Air Freight services, we stand ready to
        meet your shipping needs with precision, speed, and unwavering
        reliability.
      </p>
      <div className="mt-10 flex gap-x-5">
        <div className="relative w-1/2">
          <Image
            src={air}
            alt="Air Freight Img"
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
            src={air1}
            alt="Air Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 right-0 w-6 md:w-10">
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
                Express Air Cargo
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Swift and reliable, our express air cargo service ensures your
                time-sensitive shipments reach their destination with the utmost
                speed.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Standard Air Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                For regular shipments, our standard air freight service offers a
                balance of efficiency and cost-effectiveness, ensuring timely
                delivery.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Door-to-Door Air Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Experience end-to-end convenience with our door-to-door air
                freight, providing seamless shipping solutions from your
                location to the recipient&apos;s doorstep.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Next Flight Out (NFO)
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Urgency is our priority. Our Next Flight Out service guarantees
                your shipment is on the next available flight for the quickest
                delivery.
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
                Safeguard the integrity of your sensitive cargo with our
                temperature-controlled air freight, ensuring items such as
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
                Heavy Cargo Air Transport
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                No shipment is too large. Our heavy cargo air transport service
                specializes in transporting oversized or heavy goods efficiently
                and securely.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Priority Air Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Enjoy premium service with our priority air freight, where your
                shipment is accorded top priority for expedited handling and
                delivery.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Consolidated Air Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Cost-effective and efficient, our consolidated air freight
                service combines shipments to maximize space and minimize costs
                without compromising on delivery timelines.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Charter Air Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Tailor-made for your unique needs, our charter air freight
                service provides dedicated aircraft for exclusive use, offering
                flexibility and control over your shipment{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Global Network Air Freight
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Leverage our extensive global network for seamless international
                shipments, connecting you to key destinations worldwide with
                efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link href="/quote" className="transform hover:translate-x-2 hover:-translate-y-2 w-40 text-center py-2 md:py-3 bg-orange hover:bg-blue text-white duration-500 mt-5 md:mt-10 text-sm md:text-base">Get Started Now</Link>
      </div>
    </main>
  );
};

export default AirFreight;
