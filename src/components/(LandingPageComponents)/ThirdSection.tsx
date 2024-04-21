import Link from "next/link";

//Import Icons
import { PiPackageFill } from "react-icons/pi";
import { FaMapLocationDot, FaTruckPlane } from "react-icons/fa6";
import { RiTimerFlashFill } from "react-icons/ri";


export default function ThirdSection() {
  return (
    <main className="relative bg-[url('../../public/images/bg3.jpg')] bg-cover bg-center object-center py-[8rem] text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Why KJC Solution?
        </h1>
        <div className="mt-20 flex flex-col-reverse items-center gap-y-10 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:w-1/2 lg:w-[45%]">
            <p className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">
              Unveiling the Advantages of KJC Solution
            </p>
            <p className="mt-10 text-xs md:text-sm">
              We take great pride in offering the best shipping and
              transportation services available anywhere in the world. Utilizing
              cutting-edge software for tracking, processing, and
              communications, along with the decades of experience of our
              knowledgeable staff!
            </p>
            <div className="mt-16">
                <Link href="/about" className="bg-white text-orange px-10 py-2 md:py-3 duration-500">Read More</Link>
            </div>
            
          </div>
          <div className="w-full md:w-1/2 lg:w-[50%] flex flex-col gap-y-10">
             <div className="flex gap-x-6 items-start">
                <PiPackageFill size={60}/>
                <div>
                    <h1 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">Safe Packaging</h1>
                    <p className="text-xs md:text-sm mt-2">Our commitment to safety extends to every parcel we handle. Trust us for secure and meticulously packaged deliveries, ensuring your items reach their destination in perfect condition.</p>
                </div>
             </div>
             <div className="flex gap-x-6 items-start">
                <FaMapLocationDot size={60}/>
                <div>
                    <h1 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">Global Reach</h1>
                    <p className="text-xs md:text-sm mt-2">Embrace a world of possibilities with our expansive global reach. Wherever your package needs to go, our network ensures reliable and efficient deliveries, connecting you to destinations worldwide.</p>
                </div>
             </div>
             <div className="flex gap-x-6 items-start">
                <RiTimerFlashFill size={60}/>
                <div>
                    <h1 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">In Time Delivery</h1>
                    <p className="text-xs md:text-sm mt-2">Time is of the essence, and we understand the importance of punctuality. Count on us for precise and timely deliveries, meeting your deadlines and exceeding your expectations.</p>
                </div>
             </div>
             <div className="flex gap-x-6 items-start">
                <FaTruckPlane size={60}/>
                <div>
                    <h1 className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">Fastest Shipment</h1>
                    <p className="text-xs md:text-sm mt-2">Experience the pinnacle of speed with our fastest shipment services. Swift and efficient, we prioritize your urgency, ensuring your packages reach their destination with unmatched speed.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
