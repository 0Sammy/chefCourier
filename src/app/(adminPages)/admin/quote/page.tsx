//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import getAllQuote from "@/app/actions/getAllQuote";
import QuoteDetails from "@/components/(AdminComponents)/QuoteDetails";

export const revalidate = 1

const page = async () => {
    const quoteDetails = await getAllQuote()
    
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