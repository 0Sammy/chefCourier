import { formatStatus } from "@/lib/status";
import { formatDateTime } from "@/lib/dateTimeUtils";
//Import Needed Icons
import { FaCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { GoCheckCircle } from "react-icons/go";

type trackingProps = {
    trackingID: string,
    packageTracking : any,
    onHideModal: () => void
}
const Tracking = ({trackingID, packageTracking, onHideModal }: trackingProps) => {

    const statusChangesArray = packageTracking.statusChanges;
    //Get Each Statuses
    const firstStatus = statusChangesArray[0]
    const secondStatus = statusChangesArray[1]
    const thirdStatus = statusChangesArray[2]
    const fourthStatus = statusChangesArray[3]
    const fifthStatus = statusChangesArray[4]
    const lastStatus = statusChangesArray[statusChangesArray.length - 1]?.status;

    
     return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[70] top-0 left-0">
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[42rem] bg-bgWhite p-4 md:p-8">
                <div className="absolute top-4 right-4 text-red-600">
                    <RxCrossCircled size={24} className="cursor-pointer" onClick={onHideModal}/>
                </div>
                <div>
                    <p className="text-xs font-semibold">TRACKING ID</p>
                    <p className="mt-1 font-light text-base sm:text-lg md:text-xl">{trackingID}</p>
                </div>
                <div className="mt-4">
                    <p className="text-xs font-semibold">Estimated Delivery</p>
                    <p className="mt-1 font-light text-base sm:text-lg md:text-xl">{formatDateTime(packageTracking.estimatedDeliveryDate)}</p>
                </div>
                
                <div className="mt-4 flex flex-col justify-center w-10">
                    
                    <div className="relative">
                        <div className={`h-[2rem] w-3 rounded-t-3xl ${firstStatus ? "bg-bgGreen" : "bg-bgGrey"}  mx-auto`}></div>
                        <div className={`${firstStatus?.status === lastStatus ? "bg-bgGreen animate-bounce" : "bg-white"} h-2 w-2 rounded-[50%] mx-auto absolute z-10 left-[40%]`}></div>
                        <div className="absolute left-[100%] w-[14rem] sm:w-[20rem]">
                            <p className="text-xs font-semibold">FROM</p>
                            <p className="font-light text-base sm:text-lg md:text-xl">{firstStatus && packageTracking.originPort}</p>
                            <p className="text-xs text-black capitalize">{firstStatus ? firstStatus?.location : ""}</p>
                            <p className="text-xs text-bgGreen">{formatDateTime(firstStatus?.timestamp ?? "Time Unavailable")}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`h-[5.5rem] w-3 ${secondStatus ? "bg-bgGreen" : "bg-bgGrey"} mx-auto`}></div>
                        <div className={`${secondStatus?.status === lastStatus ? "bg-bgGreen animate-bounce" : "bg-white"} h-2 w-2 rounded-[50%] mx-auto absolute z-10 left-[40%]`}></div>
                        <div className="absolute left-[100%] w-[14rem] sm:w-[20rem]">
                            <p className="font-light text-base sm:text-lg md:text-xl">{formatStatus(secondStatus?.status) ?? ""}</p>
                            <p className="text-xs text-black capitalize">{secondStatus ? secondStatus?.location : ""}</p>
                            <p className="text-xs text-bgGreen">{secondStatus ? (formatDateTime(secondStatus?.timestamp)) : ""}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`h-[5.5rem] w-3 ${thirdStatus ? "bg-bgGreen" : "bg-bgGrey"} mx-auto`}></div>
                        <div className={`${thirdStatus?.status === lastStatus ? "bg-bgGreen animate-bounce" : "bg-white"} h-2 w-2 rounded-[50%] mx-auto absolute z-10 left-[40%]`}></div>
                        <div className="absolute left-[100%] w-[14rem] sm:w-[20rem]">
                            <p className="font-light text-base sm:text-lg md:text-xl">{formatStatus(thirdStatus?.status) ?? ""}</p>
                            <p className="text-xs text-black capitalize">{thirdStatus ? thirdStatus?.location : ""}</p>
                            <p className="text-xs text-bgGreen">{thirdStatus ? (formatDateTime(thirdStatus?.timestamp)) : ""}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`h-[5.5rem] w-3 ${fourthStatus ? "bg-bgGreen" : "bg-bgGrey"} mx-auto`}></div>
                        <div className={`${fourthStatus?.status === lastStatus ? "bg-bgGreen animate-bounce" : "bg-white"} h-2 w-2 rounded-[50%] mx-auto absolute z-10 left-[40%]`}></div>
                        <div className="absolute left-[100%] w-[14rem] sm:w-[20rem]">
                            <p className="font-light text-base sm:text-lg md:text-xl">{formatStatus(fourthStatus?.status) ?? ""}</p>
                            <p className="text-xs text-black capitalize">{fourthStatus ? fourthStatus?.location : ""}</p>
                            <p className="text-xs text-bgGreen">{fourthStatus ? (formatDateTime(fourthStatus?.timestamp)) : ""}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className={`h-[5.5rem] w-3 ${fifthStatus ? "bg-bgGreen" : "bg-bgGrey"} mx-auto`}></div>
                    </div>
                    <div className="relative flex items-center">
                       <div className={`w-10 h-10 rounded-[50%] ${fifthStatus ? "bg-bgGreen" : "bg-bgGrey"} flex items-center justify-center -mt-2`}><GoCheckCircle className={`${fifthStatus ? "text-white" : "text-bgGrey"}`} size={26}/></div>
                       <div className="absolute left-[100%] w-[14rem] sm:w-[20rem] -mt-2 ml-2">
                            <p className="font-light text-sm sm:text-base md:text-lg">{fifthStatus && "DELIVERED"}</p>
                            <p className={`${fifthStatus ? "" : "hidden"} text-base font-medium text-bgGreen -mt-1`}>{packageTracking.destinationPort}</p>
                        </div> 
                    </div>
                    
                </div>
            <div className="mt-8">
                <p className="text-xs font-semibold">{packageTracking.transportationMode} to</p>
                <p className="mt-1 font-light text-base sm:text-lg md:text-xl">{packageTracking.destinationPort}</p>
            </div>
            </div>
        </main>
     );
}
 
export default Tracking;