import Image from "next/image";
//Import images
import aboutUs from "../../../public/images/aboutUs1.jpeg";
import logo from "../../../public/images/logo.png";
//Import Icons
import { GrChatOption } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
const WhyChooseUs = () => {
  return (
    <main className="bg-bgWhite px-4 pt-[8rem] sm:px-10 md:px-12 lg:px-14 ">
      <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-end lg:justify-between lg:gap-y-0 xl:items-center">
        <div className="relative w-full lg:w-[49%]">
            <Image src={aboutUs} alt="KJC Solution Warehouse Img" className="rounded-xl" placeholder="blur"/>
            <div className="bg-orange rounded-lg shadow-sm w-10 absolute bottom-0 left-0">
            <Image src={logo} alt="KJC Solution Logo" placeholder="blur"/>
            </div>
        </div>
        <div className="w-full lg:w-[49%]">
          <p className="mb-8 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
            WHY CHOOSE US
          </p>
          <h1 className="mb-8 text-2xl font-[620] sm:text-3xl md:text-4xl lg:text-5xl">
            We <span className="text-orange">Export & Import Goods</span> all
            Over The World
          </h1>
          <p className="mb-8 text-xs md:text-sm leading-relaxed">
            At KJC Solution, we transcend boundaries to facilitate the export
            and import of goods worldwide. Our dedication to excellence drives
            seamless global transactions, supported by strategic partnerships
            and advanced logistics. <br /> <br />KJC Solution ensures the efficient flow
            of goods across international markets, inviting you to explore the
            diversity of our global trade network. Experience the synergy of
            quality and innovation as you embark on a journey with us into
            unparalleled global commerce.
          </p>
          <div className="flex gap-x-5">
                <div className="w-1/2 rounded-lg bg-white shadow-md py-6 px-4 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-3 lg:gap-x-5">
                        <GrChatOption className=" text-orange text-4xl sm:text-7xl"/>
                        <div>
                            <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">Live Chat 24 Hours</h1>
                            <p className="block mt-2 text-xs md:text-sm">Connect with our skilled support agents through our 24/7 Live Chat, ready to assist and converse with you whenever you need.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="w-1/2 rounded-lg bg-orange text-white shadow-md py-6 px-4 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-3 lg:gap-x-5">
                        <MdSupportAgent className="text-4xl sm:text-7xl"/>
                        <div>
                            <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">Import & Export Agent</h1>
                            <p className=" mt-2 text-xs md:text-sm">As your Import & Export Agents, we ensure smooth global trade, offering expert assistance and clear communication every step of the way</p>
                        </div>
                        
                    </div>
                    
                </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhyChooseUs;
