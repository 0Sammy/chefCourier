"use client"
import { useState } from "react";

//Import The Form Components
import QuoteForm from "./QuoteForm";
import TrackingForm from "./TrackingForm";


export default function Forms({ allSerialNumbers }: any){
 //The Form States
  const [quoteForm, setQuoteForm] = useState<boolean>(true)
 //Toggling Function
  const toggleForm = () => {
    return setQuoteForm((PrevQuoteForm) => !PrevQuoteForm)
  }
    return(
        <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="bg-bgWhite relative z-10 mx-auto -top-[5rem] px-4 py-8 shadow-md"> 
                <h1 className="capitalize text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">on the spot freight quotations and tracking.</h1>
                <div className="flex justify-center mt-10">
                    <button onClick={toggleForm} className={`${quoteForm ? "bg-orange text-white" : ""} hover:bg-orange hover:text-black transform hover:-translate-x-2 duration-500 border-2 border-orange text-orange text-sm md:text-base px-2 sm:px-4 md:px-6 lg:px-8 py-2`}>Request a Quote</button>
                    <button onClick={toggleForm} className={`${!quoteForm ? "bg-orange text-white" : "" } hover:bg-orange hover:text-black transform hover:translate-x-2 duration-500 border-2 border-orange text-orange text-sm md:text-base px-2 sm:px-4 md:px-6 lg:px-8 py-2`}>Track and Trace</button>
                </div>
                <div>
                    {quoteForm ? <QuoteForm allSerialNumbers={allSerialNumbers} /> : <TrackingForm />}
                </div>
            </div>
        </main>
        
    )
}