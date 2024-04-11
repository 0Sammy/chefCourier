"use client"
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";
import { useRouter } from "next/navigation";
//Import Needed Components
import Heading from "../h1";

//Import Needed Icons
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";


type InitialStateProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const initialState: InitialStateProps = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const ContactForm = () => {
  const router = useRouter();
  //State for the form
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState<boolean>(false)

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

    makeApiRequest("/contactForm", "post", formData, {
      onSuccess: () => {
        // Handle success
        handleFormReset();
        setLoading(false)
        toast.success("Thanks for reaching out! We've received your message and will be in touch shortly.");
        router.refresh();
      },
      onError: (error: any) => {
        // Handle error
        handleFormReset();
        setLoading(false)
        if (error) {
          if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error("Your Response Wasn't Submitted, Please Try Again Later.");
          }
        }
      },
    });
  };
  return (
    <main className="px-4 py-[8rem] sm:px-10 md:px-12 lg:px-14 bg-bgWhite">
      <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10 lg:gap-y-0">
        <div className="w-full lg:w-[50%]">
          <div>
            <p className="mb-4 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
              CONTACT US
            </p>
            <Heading heading="Get In" coloredHeading="Touch" />
            <p className="my-4 text-xs sm:text-sm md:text-base lg:text-lg">
              Connect With Us: Reach Out for Inquiries, Assistance, and
              Collaborations.
            </p>
          </div>
          <div className="flex gap-x-5 mt-10 overflow-x-auto special pb-4">
            <div className="flex gap-x-3 rounded-md border border-blue p-4 shrink-0">
                <MdEmail size={30} className="text-orange"/>
                <div>
                    <p className="text-lg font-bold md:text-xl">Email</p>
                    <p className="text-xs md:text-sm mt-1">Contactus@kjcsolution.net</p>
                </div>
            </div>
            <div className="flex gap-x-3 rounded-md border border-blue p-4 shrink-0">
                <HiLocationMarker size={30} className="text-orange"/>
                <div>
                    <p className="text-lg font-bold md:text-xl">Address</p>
                    <p className="text-xs md:text-sm mt-1">378-380, Deansgate A56 Manchester, M3 4LY - 192</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
            <form onSubmit={onSubmit}>
                <div className="flex gap-x-5">
                    <input required type="text" name="name" onChange={handleChange} value={state.name} id="name" placeholder="Enter Your Name" className="bg-white w-1/2 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue"/>
                    <input required type="email" name="email" onChange={handleChange} value={state.email} id="email" placeholder="Enter Your Email Address" className="bg-white w-1/2 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue"/>
                </div>
                <input required type="text" name="subject" onChange={handleChange} value={state.subject} id="subject" placeholder="Enter Your Subject Here" className="bg-white w-full mt-6 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue"/>
                <textarea required name="message" onChange={handleChange} value={state.message} id="message" placeholder="Enter Your Message Here" className="bg-white w-full h-40 mt-10 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue resize-none"></textarea>
                <input type="submit" value={loading ? "Submitting ..." : "Submit Button"} className="cursor-pointer p-3 w-40 bg-orange mt-6 text-xs md:text-sm text-center text-white rounded-md hover:bg-[#d64514]" />
            </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
