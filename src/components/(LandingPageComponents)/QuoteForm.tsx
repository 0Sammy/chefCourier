"use client"
import { FormEvent, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
//Import Needed Modals
import StatusModal from "./StatusModal";

type InitialStateProps = {
    fullName: string;
    email: string;
    phoneNumber: string;
    pickupLocation: string;
    deliveryLocation: string;
    chosenDateTime: string;
    importantDetails: string;
  };
  const initialState: InitialStateProps = {
    fullName: "",
    email: "",
    phoneNumber: "",
    pickupLocation: "",
    deliveryLocation: "",
    chosenDateTime: "",
    importantDetails: "",
  };
export default function QuoteForm(){
    //Form States and Functions
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
    const formData = state;

    makeApiRequest("/quote", "post", formData, {
      onSuccess: () => {
        // Handle success
        handleFormReset();
        setLoading(false)
        setStatus("success")
        setShow(true)
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
        <div className="bg-white px-4 py-8 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto">
            <p className="text-orange font-bold">Personal Data</p>
            <form className="mt-8 text-xs sm:text-sm md:text-base" onSubmit={onSubmit}>
                <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between md:gap-x-3">
                   <div className="w-full md:w-1/3">
                    <input required type="text" name="fullName" onChange={handleChange} value={state.fullName} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown  px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Full Name</p>
                   </div>
                   <div className="w-full md:w-1/3">
                    <input type="email" name="email" onChange={handleChange} value={state.email} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown  px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Email</p>
                    <p className="text-xs text-orange relative -top-4 font-bold invisible peer-invalid:visible">Invalid Email</p>
                   </div>
                   <div className="w-full md:w-1/3">
                      <input required type="tel" name="phoneNumber" onChange={handleChange} value={state.phoneNumber} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Phone Number</p>
                   </div>
                </div>
                <p className="text-orange font-bold mt-4">Package Information</p>
                <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between md:gap-x-3 mt-8">
                    <div className="w-full md:w-1/3">
                      <input required type="text" name="pickupLocation" onChange={handleChange} value={state.pickupLocation} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Pickup Location</p>
                    </div>
                    <div className="w-full md:w-1/3">
                      <input required type="text" name="deliveryLocation" onChange={handleChange} value={state.deliveryLocation} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Delivery Location</p>
                   </div>
                   <div className="w-full md:w-1/3">
                      <input required type="datetime-local" name="chosenDateTime" onChange={handleChange} value={state.chosenDateTime} className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-[0.425rem] cursor-pointer"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Date and Time</p>
                   </div>
                </div>
                <div className="w-full mt-8">
                      <textarea required name="importantDetails" onChange={handleChange} value={state.importantDetails} className="resize-none w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-[0.425rem] cursor-pointer"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[5.5rem] peer-focus:-top-[6rem] duration-500">Important Details</p>
                      <p className="text-xs font-bold relative -top-[1.4rem]">Please provide all relevant dimensions, weight, instructions etc</p>
                </div>
                <input type="submit" value={loading ? "Submitting Quote..." : "Submit Quote"} className="w-full text-center text-sm md:text-base py-2 md:py-3 bg-orange text-white mt-4 hover:bg-blue duration-500 cursor-pointer" />
            </form>
        </div>
        </>
    )
}