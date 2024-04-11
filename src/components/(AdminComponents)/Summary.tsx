//Import Needed Utilities
import { formatDate } from "@/lib/dateUtils";
//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
import { MdReceiptLong } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
 
type PackageProps = {
    packageLength : number
    packagesDelivered: number
    contactForms: number
    quotes: number
}

const Summary = ({packageLength, packagesDelivered, contactForms, quotes}: PackageProps ) => {
    //For the Date
    const currentDate = new Date()
    const formattedDate = formatDate(currentDate)
    return ( 
        <main className="">
            <div className="flex justify-end">
               <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">{formattedDate}.</p> 
            </div>
            <div className="flex gap-x-5 overflow-x-auto special mt-10 pb-4">
               <div className="w-1/4 min-w-[18rem] bg-[#4CB9E7] p-8 flex gap-x-5 rounded-md">
               <PiPackageFill className="text-white mt-1" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{packageLength}</p>
                        <p className="text-base">Total Packages</p>
                    </div>
                </div>
                <div className="w-1/4 min-w-[18rem] bg-[#FB8B24] p-8 flex gap-x-5 rounded-md">
                    <BsInfoCircleFill className="text-white mt-1" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{contactForms}</p>
                        <p className="text-base">Total Support</p>
                    </div>
                </div>
                <div className="w-1/4 min-w-[18rem] bg-[#65B741] p-8 flex gap-x-5 rounded-md">
                    <BsFillPatchCheckFill className="text-white mt-1" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{packagesDelivered}</p>
                        <p className="text-base">Total Packages Delivered</p>
                    </div>
                </div> 
                <div className="w-1/4 min-w-[18rem] bg-red-600 p-8 flex gap-x-5 rounded-md">
                    <MdReceiptLong className="text-white mt-1" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{quotes}</p>
                        <p className="text-base">Total Requested Quotes</p>
                    </div>
                </div> 
            </div>
            
        </main>
     );
}
 
export default Summary;