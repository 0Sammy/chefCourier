import Image from "next/image";
import Link from "next/link";
//Import Images
import other from "../../../public/images/other.jpeg";
import other1 from "../../../public/images/other1.jpeg";
import logo from "../../../public/images/logo.svg";
//Import Icons
import { MdGppGood } from "react-icons/md";

const Others = () => {
  return (
    <main className="flex flex-col gap-y-5">
      <p className="mt-10 text-xs md:text-sm">
        Embark on a seamless journey with KJC Solution&apos;s comprehensive
        courier services. From our efficient Parcel Courier for swift and secure
        deliveries to specialized solutions like Medical Couriers and Legal
        Couriers, we prioritize the secure and timely transport of sensitive
        materials. <br /> <br /> Streamline your print materials distribution with our Print
        and Deliver services, ensuring marketing collateral reaches the right
        place at the right time. Empower your e-commerce business with
        end-to-end E-commerce Logistics, offering comprehensive solutions for
        order fulfillment and last-mile delivery. <br /><br />Trust our experts for
        Specialized Freight Solutions, handling everything from valuable artwork
        to fragile items with personalized care. Optimize your retail supply
        chain with Retail Distribution, ensuring timely deliveries to meet
        market demands. <br /><br />Make your events successful with Event Logistics, where
        our dedicated team handles transportation and on-site logistics. Our
        commitment extends beyond packages; it&apos;s a promise of excellence in
        every shipment across diverse industries and specialized needs.
      </p>
      <div className="mt-10 flex gap-x-5">
        <div className="relative w-1/2">
          <Image
            src={other}
            alt="Medical Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0left-0 w-6 md:w-10 ">
            <Image
              src={logo}
              alt="KJC Solution Logo"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src={other1}
            alt="Parcel Img"
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
                Parcel Courier Services
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Experience swift and secure deliveries with our Parcel Courier
                Services. Whether it&apos;s a small package or a sizable parcel,
                we ensure door-to-door convenience and reliable tracking for
                your peace of mind.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Medical Couriers
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                For the healthcare sector, trust our specialized Medical
                Couriers. With a focus on precision and urgency, we ensure the
                safe and timely transport of medical specimens, equipment, and
                supplies to and from medical facilities.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Legal Couriers
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Navigate the legal landscape with confidence using our Legal
                Courier services. We understand the importance of legal
                documents, and our dedicated couriers ensure the secure and
                timely delivery of your sensitive legal materials.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Print and Deliver
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Streamline your print materials distribution with our Print and
                Deliver services. From marketing collateral to important
                documents, our efficient service ensures your materials are
                delivered to the right place at the right time.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[49%]">
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Event Logistics
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Make your events a success with our Event Logistics services.
                From transporting event materials to managing on-site logistics,
                we ensure everything runs smoothly, allowing you to focus on the
                success of your event.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                E-commerce Logistics
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Empower your e-commerce business with our comprehensive
                E-commerce Logistics services. From order fulfillment to
                last-mile delivery, we provide end-to-end solutions to enhance
                your customer satisfaction and streamline your online
                operations.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Specialized Freight Solutions
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                CFor unique shipping needs, trust our Specialized Freight
                Solutions. Whether it&apos;s valuable artwork, fragile items, or
                specialized equipment, our experts tailor freight solutions to
                meet the specific requirements of your cargo..
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Retail Distribution
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Optimize your retail supply chain with our Retail Distribution
                services. We ensure timely and efficient delivery of goods to
                retail outlets, helping you maintain a seamless flow of products
                to meet market demands.
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

export default Others;
