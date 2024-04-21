import Image from "next/image";
import Link from "next/link";
//Import Images
import importImg from "../../../public/images/import.jpeg";
import import1 from "../../../public/images/import1.jpeg";
import logo from "../../../public/images/logo.svg";
//Import Icons
import { MdGppGood } from "react-icons/md";

const ImportExport = () => {
  return (
    <main className="flex flex-col gap-y-5">
      <p className="mt-10 text-xs md:text-sm">
        Unlock the world of global trade with KJC Solution&apos;s Import and
        Export services — a gateway to seamless international commerce.
        Navigating the complexities of borders and regulations, we offer a
        comprehensive suite of services tailored to facilitate the movement of
        goods across the globe. <br />
        <br />
        At KJC Solution, our Import and Export services are designed to
        empower businesses with a global reach. With a commitment to efficiency,
        compliance, and reliability, we pave the way for your goods to traverse
        borders seamlessly in the dynamic landscape of international trade.
      </p>
      <div className="mt-10 flex gap-x-5">
        <div className="relative w-1/2 h-[110%]">
          <Image
            src={importImg}
            alt="Import & Export Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 left-0">
            <Image
              src={logo}
              alt="KJC Solution Logo"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="relative w-1/2">
          <Image
            src={import1}
            alt="Im[port & Export Freight Img"
            className="transform rounded-xl duration-500 hover:scale-105"
            placeholder="blur"
          />
          <div className="absolute bottom-0 right-0">
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
                Customs Clearance Expertise
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Trust our seasoned experts for smooth customs clearance,
                ensuring your imports and exports comply with regulations and
                swiftly move through border checkpoints.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Documentation Management
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Navigate the paperwork maze effortlessly with our Documentation
                Management service, where we handle the intricate details of
                import and export documentation, ensuring compliance at every
                stage.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Tariff Consultation Services:
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Rely on our Tariff Consultation Services to optimize costs and
                navigate tariff complexities, ensuring your shipments move
                seamlessly across international borders.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Duty Drawback Assistance
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Maximize cost savings with our Duty Drawback Assistance,
                reclaiming duties paid on imported goods that are subsequently
                exported, providing a financial advantage.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[49%]">
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Trade Compliance Audits
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Ensure adherence to international trade regulations with our
                Trade Compliance Audits, a proactive service that mitigates
                risks and enhances the efficiency of your import and export
                operations.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Freight Insurance Solutions:
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Safeguard your shipments with our Freight Insurance Solutions,
                providing comprehensive coverage for your goods during transit,
                mitigating risks associated with international shipping.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Global Freight Network
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Leverage our extensive Global Freight Network for seamless
                imports and exports, connecting you to key trade routes
                worldwide with efficiency and reliability.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <MdGppGood className="mt-4 shrink-0 text-xl text-orange md:text-2xl lg:text-3xl" />
            <div className="mt-4">
              <p className="text-base font-bold text-blue md:text-lg">
                Incoterms Consultation
              </p>
              <p className="mt-1 text-xs sm:text-sm">
                Optimize your international trade contracts with our Incoterms
                Consultation, ensuring clear and mutually beneficial terms for
                buyers and sellers in different countries.
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

export default ImportExport;
