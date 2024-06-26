import getPackages from "@/app/actions/getPackages";

//Import Providers
import { getUserDetails } from "@/providers/currentUser";

//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import OrderSummary from "@/components/(AdminComponents)/OrderSummary";
import AdminDetails from "@/components/(AdminComponents)/AdminDetails";

export const revalidate = 0
const page = async () => {

    const { user } = await getUserDetails();
    const packages = await getPackages(user?.email ?? "super@admin.com")
    

    return ( 
        <main>
            <AdminDetails adminEmail={user?.email ?? ""} notificationEmail={user?.notificationEmail ?? ""}/>
            <div className="px-4 py-4 lg:px-10">
                <AdminHeading route="home" coloredRoute="orders"/>
            </div>
            <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
                <OrderSummary orders={packages}/>
            </div>
        </main>
     );
}
 
export default page;