"use client"
import { FormEvent, useState } from "react";

//Import Utils and Stores
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { useQuoteStore } from "@/store/quote";

//Import Types
import { quoteProps } from "@/types/default";

//Import Needed Components
import CountrySelect from "../molecules/CountrySelect";
import StatusModal from "./StatusModal";



const initialState: quoteProps = {
    fullName: "",
    email: "",
    adminEmail: "",
    phoneNumber: "",
    address: "",
    country: "",
    serialNumber: "",
    nearestAirport: "",
};

export default function QuoteForm({ allSerialNumbers }: any){
  
    //Form States and Functions
    const { country } = useQuoteStore()
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)

  //Status Modal Function
  const handleHideModal = () => {
   return setShow((prev) => !prev);
  };
  //Function for the State Changing
    const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  //Function for the Form Reset
    const handleFormReset = () => {
    setState(initialState);
  };

  //For the Function Submit
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)

    if (!allSerialNumbers.some((dataObject: { serialNumber: string; }) => dataObject.serialNumber === state.serialNumber)) {
      toast.error("Serial number does not exist. Kindly enter the correct one.");
      setLoading(false);
      return;
    }
    

    const adminEmail = allSerialNumbers.find((serialNumber: { serialNumber: string; }) => serialNumber.serialNumber === state.serialNumber)
    
    if (!adminEmail){
      setLoading(false)
      handleFormReset();
      setStatus("failure")
      setShow(true)
      return; 
    }

    const formData = {...state, country: country, adminEmail: adminEmail.adminEmail };
    const emailData = {...state, country: country, to: adminEmail.adminNotificationEmail, subject:"New Quote", emailType: "quote"}
    
    //console.log({formData})
    //console.log({emailData})

    makeApiRequest("/quote", "post", formData, {
      onSuccess: () => {
        // Handle success
        setLoading(false)
        setStatus("success")
        setShow(true)
        handleFormReset();
          makeApiRequest("/send-email", "post", emailData, {
            onSuccess: () => {
              // Handle success
              console.log("Email was sent successfully.")
            },
            onError: (error: any) => {
              // Handle error
              console.log("Couldn't send email, due to some error. " + error.message)
            },
          });
        window.location.reload()
      },
      onError: (error: any) => {
        // Handle error
        handleFormReset();
        setLoading(false)
        if (error) {
          setStatus("failure")
          setShow(true)
        }
      },
    });
  };

    return(
        <>
        {show && <StatusModal theStatus={status} onHideModal={handleHideModal}/>}
        <div className="bg-white px-4 sm:px-6 md:px-8 xl:px-12 py-8 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto text-xs:text-sm xl:text-base font-semibold">
            <p className="text-orange font-bold">Needed Information</p>
            <form className="mt-8 text-xs sm:text-sm md:text-base" onSubmit={onSubmit}>
                  <div className="w-full my-4">
                    <input required type="text" name="serialNumber" onChange={handleChange} value={state.serialNumber} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown  px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Serial Number</p>
                  </div>
                  <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-3">
                    <div className="w-full md:w-1/3">
                     <input required type="text" name="fullName" onChange={handleChange} value={state.fullName} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                     <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Full Name</p>
                    </div>
                    <div className="w-full md:w-1/3">
                     <input type="email" name="email" onChange={handleChange} value={state.email} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown  px-4 py-2"/> 
                     <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Email</p>
                     <p className="text-xs text-orange relative -top-4 font-bold invisible peer-invalid:visible">Invalid Email</p>
                    </div>
                    <div className="w-full md:w-1/3">
                       <input pattern="\d*" title="Please enter your phone number (digits)" required type="tel" name="phoneNumber" onChange={handleChange} value={state.phoneNumber} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                       <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Phone Number</p>
                    </div>
                  </div>
                <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:justify-between md:gap-x-3 mt-4">
                    <div className="w-full md:w-1/3 mb-4">
                      <CountrySelect />
                    </div>
                    <div className="w-full md:w-1/3">
                      <input required type="text" name="address" onChange={handleChange} value={state.address} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/>
                      <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Address</p>
                    </div>
                    <div className="w-full md:w-1/3">
                      <input required type="text" name="nearestAirport" onChange={handleChange} value={state.nearestAirport} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Nearest Airport To You</p>
                    </div>
                </div>
                <input type="submit" value={loading ? "Submitting Quote..." : "Submit Quote"} className="w-full text-center text-sm md:text-base py-3 bg-orange text-white mt-4 hover:bg-blue duration-500 cursor-pointer" />
            </form>
        </div>
        </>
    )
}