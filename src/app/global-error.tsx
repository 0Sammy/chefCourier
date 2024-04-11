"use client"
import Link from "next/link";
export default function NotFound(){
return(
    <main className="relative bg-[url('../../public/images/bg404.jpg')] w-full h-screen flex items-center justify-center bg-cover object-center bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative text-center px-4">
            <h1 className="hollowText text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem]">Error</h1>
            <p className="capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Sorry, we encountered an issue.</p>
            <div className="mt-20 transform hover:translate-x-2 hover:-translate-y-2 duration-500">
            <Link href="/admin/dashboard" className="px-10 text-center py-2 md:py-3 bg-orange hover:bg-blue text-white text-sm md:text-base">Back To Dashboard</Link>
            </div>
        </div>
    </main>
)
}