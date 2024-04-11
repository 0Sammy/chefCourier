"use client"
import { usePathname } from 'next/navigation'
//Needed Images
import logo from "../../public/images/logo.png";
//Deafult Mechanism
import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    const pathname = usePathname()
    return(
        <main className={`${pathname === "/who-are-you/register" || pathname === "/who-are-you/login" ? "hidden" : ""} pt-[14rem] pb-[4rem] px-4 sm:px-10 md:px-12 lg:px-14 bg-footerBrown text-white text-xs sm:text-sm md:text-base`}>
            <div className="text-white flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between">
            <div className="flex flex-col">
                <h4 className="font-bold text-orange">Quick Actions</h4>
                <Link href="/tracking" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Tracking And Trace</Link>
                <Link href="/quote" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Same Day Delivery</Link>
                <Link href="/quote" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Request A Quote</Link>
                <Link href="/contact" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Support</Link>
                <Link href="/legal" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Legal</Link>
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-orange">Company</h4>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/privacy">Privacy Statement</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/contact">Partner With Us</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/services">Services</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/company">Why Us?</Link>
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-orange">Contact Us</h4>
            <p className="mt-2">General Inquiries: contactus@kjcsolution.net</p>
            <p className="mt-2">Support: support@kjcsolution.net</p>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/faq">FAQ</Link>         
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-orange">Newsletter</h4>
                <p className="mt-2 capitalize">Join our community and be the first to know of any update.</p>
                <div className="mt-8 flex flex-row items-center">
                    <input className="w-56 sm:w-60 py-3 px-4 focus:outline-blue text-black caret-orange placeholder:text-sm rounded-md" type="email" name="email" id="email" placeholder="Enter Your Email..." />
                    <button className="font-semibold md:w-40 bg-orange hover:border-r-8 hover:border-blue px-2 py-3 rounded-md hover:bg-white hover:text-blue duration-500" ><Link href="/">Subscribe</Link></button>
                </div>
            </div>
        </div>
        <div className="mt-16 flex flex-row justify-between border-y border-white py-4">
            <div className="flex flex-row items-center">
                <div className="border-r border-white pr-4">
                    <div className="p-4 bg-orange">
                        <Image src={logo} alt="KJC Solution Logo" className="w-20 md:w-10" placeholder="blur"/>  
                    </div>
                </div>
               <div className="ml-4">
               <p className="headingFont text-white text-xs md:text-sm lg:text-base">Most Reliable Courier Company.</p>
               </div>
            </div>
            <div className="flex items-center">
                <p className="text-xs md:text-sm">Connecting Continents, Delivering Dreams.</p>
            </div>
            
        </div>
        </main>
    )
}


