//Providers
import { getUserDetails } from "@/providers/currentUser";

//Actions
import getPackages from "@/app/actions/getPackages";
import getAllStatus from "@/app/actions/getAllStatus";
import getAllContactForms from "@/app/actions/getAllContactForm";
import getAllQuote from "@/app/actions/getAllQuote";


//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import Summary from "@/components/(AdminComponents)/Summary";
import LastPackages from "@/components/(AdminComponents)/Transaction";
import AdminDetails from "@/components/(AdminComponents)/AdminDetails";



export const revalidate = 1
const page = async () => {

   const { user } = await getUserDetails();

   const packages = await getPackages(user?.email ?? "super@admin")
   const status = await getAllStatus()
   const forms = await getAllContactForms()
   const quotes = await getAllQuote(user?.email ?? "super@admin.com")
   //Sort the status and get the values
   const deliveredItems = status.filter(item => item.status === 'Delivered');

    return ( 
        <main>
         <AdminDetails adminEmail={user?.email ?? ""} notificationEmail={user?.notificationEmail ?? ""}/>

            <div className="px-4 py-4 lg:px-10">
               <AdminHeading route="home" coloredRoute="dashboard"/>
            </div>
            <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
               <Summary packageLength={packages.length} packagesDelivered={deliveredItems.length} contactForms={forms.length} quotes={quotes.length}/>
               <LastPackages orders={packages} />
            </div> 
        </main>
     );
}
 
export default page;