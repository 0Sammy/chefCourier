import Link from "next/link";

export default function HeroSection(){
    return(
        <main className="relative bg-[url('../../public/images/b4.jpg')] pt-[8rem] pb-[12rem] bg-cover object-center bg-center text-white selection selection:text-white">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
                <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[620]">Your Gateway to any</h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[620] mt-2 md:mt-4">Destination in the World.</h1>
                    <p className="text-sm md:text-base my-4 text-gray-400 font-semibold">Our company offers courier services around the globe.</p>
                    <div className="flex gap-x-5 mt-8">
                        <Link href="/quote" className="transform bg-white text-orange hover:-translate-y-2 text-sm md:text-base border-orange border-2 p-2 md:px-4 lg:px-8 md:py-3 duration-500 hover:bg-white">
                            Request Quote
                        </Link>
                        <Link href="/tracking" className="transform bg-white text-orange hover:-translate-y-2 text-sm md:text-base border-orange border-2 p-2 md:px-4 lg:px-8 md:py-3 duration-500 hover:bg-white">
                            Track Delivery
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}