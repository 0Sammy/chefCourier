import getPackages from "@/app/actions/getPackages";

//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import OrderSummary from "@/components/(AdminComponents)/OrderSummary";

export const revalidate = 1

const page = async () => {
    const packages = await getPackages()

    return ( 
        <main>
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