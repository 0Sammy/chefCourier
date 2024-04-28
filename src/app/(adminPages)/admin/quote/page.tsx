import getAllQuote from "@/app/actions/getAllQuote";

//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import QuoteDetails from "@/components/(AdminComponents)/QuoteDetails";

//Import Providers
import { getUserDetails } from "@/providers/currentUser";

export const revalidate = 0
const page = async () => {

    const { user } = await getUserDetails();
    const quoteDetails = await getAllQuote(user?.email ?? "super@admin.com")
    //console.log({quoteDetails})
    
    return ( 
        <main>
            <div className="px-4 py-4 lg:px-10">
                <AdminHeading route="home" coloredRoute="Quotes"/>
            </div>
            <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
                <QuoteDetails quoteDetails = {quoteDetails}/>
            </div>
        </main>
     );
}
 
export default page;