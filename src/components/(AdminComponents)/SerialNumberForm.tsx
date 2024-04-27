"use client"
import { FormEvent, useEffect, useState } from "react";

//Import Needed Utils
import { generateRandomSerial } from "@/lib/GenerateSerialNumber";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { formatDateTime } from "@/lib/dateTimeUtils";

//Import Needed Stores
import { useAdminStore } from "@/store/admin";

//Import Types
import { serialNumber } from "@/types/default";

const SerialNumberForm = ({serialNumbers}: {serialNumbers : serialNumber[]}) => {

    useEffect(() => {
        const newNumber: string = generateRandomSerial()
        setNewNumber(newNumber)
    },[])

    //States
    const { email } = useAdminStore()
    const [newNumber, setNewNumber] = useState<string>("")
    const [loading, setLoading]= useState<boolean>(false)

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)

        const formData: { adminEmail: string; serialNumber: string; } = { adminEmail: email, serialNumber: newNumber }
        console.log({formData})
        
        makeApiRequest("/createSerialNumber", "post", formData, {
         onSuccess: () => {
           // Handle success
           setLoading(false);
           toast.success("The Serial Number Was Created Successfully.");
           window.location.reload()
         },
         onError: (error: any) => {
           // Handle error
           setLoading(false);
           if (error) {
             if (error === "Missing Fields") {
               toast.error("Try again, if error persists, contact the developer");
             } else {
               toast.error("Serial Wasn't Created, Please Try Again Later");
             }
           }
         },
       });
    }

    


    return ( 
        <main className="h-screen border border-[#7676801F] rounded-xl p-4 mt-10">
            <h1 className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold">Create a New Serial Number</h1>
            <form onSubmit={onSubmit} className=" mt-10">
                <p className="my-4 font-semibold">New Serial Number</p>
                <div className="flex items-center justify-between">
                    <p className="font-medium">{newNumber}</p>
                    <button type="submit" className="text-xs md:text-sm xl:text-base border border-green-600 bg-green-600 rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-green-600 duration-300">{loading ? "Generating" : "Generate New Serial Number"}</button> 
                </div>
                
            </form>
            
            <div className="mt-10 overflow-y-auto special1">
                <h1 className="text-sm sm:text-base md:text-lg xl:text-xl font-semibold">Your Serial Numbers</h1>
                {serialNumbers.map(serialNumber => (
                <div key={serialNumber.id} className="flex justify-between border border-[#7676801F] mt-2 p-2 md:p-4 xl:p-6 rounded-md">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-[#8E8E93] text-[10px] md:text-xs">Serial Number</p>
                        <p className="text-[#020100] text-xs xl:text-sm font-medium">{serialNumber.serialNumber}</p>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <p className="text-[#8E8E93] text-[10px] md:text-xs">Created Date</p>
                        <p className="text-[#020100] text-xs xl:text-sm font-medium">{formatDateTime(serialNumber.createdAt.toString())}</p>
                    </div>
                </div>
                ))}
            </div>
        </main>
     );
}
 
export default SerialNumberForm;