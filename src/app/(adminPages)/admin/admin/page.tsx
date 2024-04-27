import { permanentRedirect } from "next/navigation";
import getAdmins from "@/app/actions/getAllAdmins";


//Providers
import { getUserDetails } from "@/providers/currentUser";

//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import AllAdmins from "@/components/(AdminComponents)/AllAdmins";
import AdminDetails from "@/components/(AdminComponents)/AdminDetails";


export const revalidate = 1
const page = async () => {

    const admins = await getAdmins()
    //console.log({admins})
    const { user } = await getUserDetails();

    //Check the current admin and make the necessary pushes
    if (user?.role !== "superAdmin"){
       permanentRedirect('/not-authorized') 
    }
    
    return ( 
        <main>
            <AdminDetails adminEmail={user?.email ?? ""} notificationEmail={user?.notificationEmail ?? ""}/>

            <div className="px-4 py-4 lg:px-10">
                <AdminHeading route="home" coloredRoute="admins"/>
                <AllAdmins admins={admins}/>
            </div>
        </main>
     );
}
 
export default page;