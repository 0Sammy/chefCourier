//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import Summary from "@/components/(AdminComponents)/Summary";
import LastPackages from "@/components/(AdminComponents)/Transaction";
import getPackages from "@/app/actions/getPackages";
import getAllStatus from "@/app/actions/getAllStatus";
import getAllContactForms from "@/app/actions/getAllContactForm";
import getAllQuote from "@/app/actions/getAllQuote";

export const revalidate = 1

const page = async () => {
   const packages = await getPackages()
   const status = await getAllStatus()
   const forms = await getAllContactForms()
   const quotes = await getAllQuote()
   //Sort the status and get the values
   const deliveredItems = status.filter(item => item.status === 'Delivered');

    return ( 
        <main>
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