import getIndividualUser from "@/app/actions/getIndividualUser";
import { formatDateTime } from "@/lib/dateTimeUtils";

//Import Needed Components
import SuspendButton from "@/components/(AdminComponents)/SuspendButton";
import DeleteButton from "@/components/(AdminComponents)/DeleteButton";

export const revalidate = 1;
const page = async ({ params }: { params: { id: string } }) => {


    const adminId = params.id;
    const adminDetails = await getIndividualUser(adminId)

    return ( 
        <main>
            <div className="px-4 py-4 lg:px-10 text-xs md:text-sm xl:text-base text-[#141619]">
                <div className="max-h-screen border border-[#7676801F] rounded-xl p-4 mt-20">
                    <h1 className="text-sm md:text-base xl:text-lg font-semibold">Admin Details</h1>
                    <div className="flex flex-col gap-y-5 mt-10">
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black/70 text-xs md:text-sm">Admin Role</p>
                            <p className={`font-semibold capitalize ${adminDetails?.role === "superAdmin"? "text-[#248A3D]" : "text-[#0040DD]"}`}>{adminDetails?.role}</p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black/70 text-xs md:text-sm">Is admin suspended</p>
                            <p className="font-semibold">{adminDetails?.isSuspended ? "You suspended the Nigga" : "Nigga isn't suspended"}</p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black/70 text-xs md:text-sm">Admin Email</p>
                            <p className="font-semibold">{adminDetails?.email}</p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black/70 text-xs md:text-sm">Admin Notification Email</p>
                            <p className="font-semibold">{adminDetails?.notificationEmail}</p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black/70 text-xs md:text-sm">Date and Time of Creation</p>
                            <p className="font-semibold">{adminDetails && formatDateTime(adminDetails?.createdAt.toISOString())}</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-sm md:text-base xl:text-lg font-semibold">Quick Actions</h1>
                        <div className="mt-5 flex justify-between items-center">
                            <SuspendButton loggedInEmail={adminDetails?.email ?? ""} role={adminDetails?.role ?? ""} adminEmail={adminDetails?.notificationEmail ?? ""} userSuspended={adminDetails?.isSuspended ?? false}/>
                            <DeleteButton loggedInEmail={adminDetails?.email ?? ""} notificationEmail={adminDetails?.notificationEmail ?? ""}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default page;