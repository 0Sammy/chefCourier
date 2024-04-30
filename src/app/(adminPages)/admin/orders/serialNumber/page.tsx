import getAllSerialNumber from "@/app/actions/getAllSerialNumbers";

//Import Needed Providers
import { getUserDetails } from "@/providers/currentUser";

//Import Needed Components
import AdminDetails from "@/components/(AdminComponents)/AdminDetails";
import SerialNumberForm from "@/components/(AdminComponents)/SerialNumberForm";


export const revalidate = 0
const page = async () => {

    const { user } = await getUserDetails();
    const serialNumberRecord = await getAllSerialNumber(user?.email ?? "super@admin.com")
    //console.log({serialNumberRecord})

    return ( 
        <main className="px-4 py-4 lg:px-10 text-xs md:text-sm xl:text-base text-[#141619]">
            <AdminDetails adminEmail={user?.email ?? ""} notificationEmail={user?.notificationEmail ?? ""}/>
            <SerialNumberForm serialNumbers={serialNumberRecord}/>
        </main>
     );
}
 
export default page;