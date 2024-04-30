import getIndividualPackage from "@/app/actions/getIndividualPackage";
import { formatDateTime } from "@/lib/dateTimeUtils";
import { formatDate } from "@/lib/dateUtils";

//Import Needed Components
import StatusChange from "@/components/(AdminComponents)/StatusChange";
import Status from "@/components/(AdminComponents)/Status";


export const revalidate = 0
const Page = async ({ params }: { params: { id: string } }) => {
    const packageId = params.id

    const thePackage = await getIndividualPackage(packageId)
    const packageStatuses = thePackage?.statusChanges
  
    return ( 
        <main className="px-4 md:px-6 xl:px-8 py-8 text-xs md:text-sm xl:text-base">
          <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between">
            <div className="lg:w-[40%] border border-[#7676801F] p-4 rounded-xl">
                <p className="font-semibold text-[#141619]">Package Basic Info</p>
                <div className="flex flex-col gap-y-2 mt-4">
                  <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Tracking Number</p>
                      <p className="font-medium">{thePackage?.trackingNumber}</p>
                  </div>
                  <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Origin Port</p>
                      <p className="font-medium">{thePackage?.originPort}</p>
                  </div>
                  <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Destination Port</p>
                      <p className="font-medium">{thePackage?.destinationPort}</p>
                  </div>
                  <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Transportation Mode</p>
                      <p className="font-medium">{thePackage?.transportationMode}</p>
                  </div>
                  <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Estimated Delivery Date and Time</p>
                      <p className="font-medium">{formatDateTime(thePackage?.estimatedDeliveryDate ?? "")}</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[58%] border border-[#7676801F] p-4 rounded-xl">
                <p className="font-semibold text-[#141619]">Package Other Info</p>
                <div className="flex flex-col gap-y-2 mt-4">
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Pieces</p>
                      <p className="font-medium">{thePackage?.pieces}</p>
                    </div>
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Weight (KG)</p>
                      <p className="font-medium">{thePackage?.weight}</p>
                    </div>
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Length (CM)</p>
                      <p className="font-medium">{thePackage?.length}</p>
                    </div>
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Width (CM)</p>
                      <p className="font-medium">{thePackage?.width}</p>
                    </div>
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Height (CM)</p>
                      <p className="font-medium">{thePackage?.height}</p>
                    </div>
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Selected Created Date and Time</p>
                      <p className="font-medium">{formatDateTime(thePackage?.dateCreated ?? "")}</p>
                    </div>
                    <div className="flex flex-col ga-y-1">
                      <p className="text-[0.6rem] md:text-xs xl:text-sm text-black/50">Real Created Date and Time</p>
                      <p className="font-medium">{formatDate(thePackage?.realDateCreated ?? new Date)}</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between mt-10">
            <div className="lg:w-[58%] border border-[#7676801F] p-4 rounded-xl">
              <div className="flex justify-between">
                <p className="font-semibold text-[#141619]">Status Updates</p>
                <p>From the LATEST to the LEAST</p>
              </div>        
              <Status packageStatuses={packageStatuses}/>
            </div>
            <div className="lg:w-[40%] border border-[#7676801F] p-4 rounded-xl">
              <p className="font-semibold text-[#141619]">New Status</p>
              <StatusChange thePackageID={packageId}/>
            </div>
          </div>
    </main>
 );
}
 
export default Page;