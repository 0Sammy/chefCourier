"use client";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
//Import Icons
import { MdMarkEmailRead, MdContactSupport } from "react-icons/md";

type InitialStateProps = {
  firstName: string;
  email: string;
  lastName: string;
  body: string;
};
const initialState: InitialStateProps = {
  firstName: "",
  email: "",
  lastName: "",
  body: "",
};

const Contact = () => {
  //Copying of the emails states and variables
  const supportEmail = "Support@kjcsolution.com";
  const partnershipEmail = "Partnership@kjcsolution.com";
  const [supportCopied, setSupportCopied] = useState<boolean>(false);
  const [partnershipCopied, setPartnershipCopied] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [state, setState] = useState(initialState);
  //Function
  const handleFormChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleFormReset = () => {
    setState(initialState);
  };
  const handleCopySupport = async () => {
    try {
      await navigator.clipboard.writeText(supportEmail);
      setSupportCopied(true);
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };
  const handleCopyPartnership = async () => {
    try {
      await navigator.clipboard.writeText(partnershipEmail);
      setPartnershipCopied(true);
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };
  //Text State
  const [text, setText] = useState<string>("");
  //Maximum Length
  const maxLength = 200;
  //Length Function
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };
  [
    show &&
      toast.success(
        "Thank You For Reaching Out, We Will Get Back To You As Soon As Possible.",
      ),
  ];
  return (
    <main className="relative bg-[url('../../public/images/contact.jpeg')] bg-cover bg-center object-center py-[8rem] text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Get In Touch.
        </h1>
        <div className="mt-20 flex flex-col-reverse items-center justify-center gap-y-5 md:flex-row md:gap-x-10 md:gap-y-0">
          <div className="h-96 w-80 bg-white text-black duration-500 md:w-96">
            <form className="p-4">
              <div className="flex w-full justify-between">
                <div className="w-[49%]">
                  <label htmlFor="firstName" className="text-xs md:text-sm">
                    First Name
                  </label>
                  <input
                    required
                    onChange={handleFormChange}
                    value={state.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter Your First Name"
                    className="mt-2 w-full border border-black p-2 text-sm outline-none placeholder:text-xs focus:border-orange"
                  />
                </div>
                <div className="w-[49%]">
                  <label htmlFor="lastName" className="text-xs md:text-sm">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    onChange={handleFormChange}
                    value={state.lastName}
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    className="mt-2 w-full border border-black p-2 text-sm outline-none placeholder:text-xs focus:border-orange"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="text-xs md:text-sm">
                  Email
                </label>
                <input
                  required
                  type="text"
                  onChange={handleFormChange}
                  value={state.email}
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  className="mt-2 w-full border border-black p-2 text-sm outline-none placeholder:text-xs focus:border-orange"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="body" className="text-xs md:text-sm">
                  Body{" "}
                  <span className="text-xs">
                    ({maxLength - text.length}/{maxLength})
                  </span>
                </label>
                <textarea
                  required
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    handleChange(e);
                    handleFormChange(e);
                  }}
                  value={state.body}
                  name="body"
                  id="body"
                  maxLength={200}
                  placeholder="Enter Your Message"
                  className="mt-2 w-full resize-none border border-black p-2 py-4 text-sm outline-none placeholder:text-xs focus:border-orange"
                />{" "}
              </div>
              <button
                type="button"
                onClick={() => {setShow(true); handleFormReset()}}
                className="mt-4 w-full cursor-pointer border border-orange bg-orange py-2 text-center text-white duration-500 hover:bg-white hover:text-orange"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex h-60 w-80 flex-col justify-center bg-orange px-4 text-white md:w-96 md:px-8">
            <p className="text-xs font-semibold md:text-sm">
              For Partnership Contact
            </p>
            <div className="mt-2 flex items-center gap-x-2">
              <div className="group rounded-[50%] bg-bgWhite p-2">
                <MdMarkEmailRead
                  size={24}
                  className="text-orange group-hover:text-blue"
                />
              </div>
              <div>
                <h1
                  className="cursor-grabbing text-base font-bold md:text-lg"
                  onClick={handleCopyPartnership}
                >
                  Partnership@kjcsolution.net
                </h1>
                {partnershipCopied && (
                  <p className="text-xs">Copied to clipboard!</p>
                )}
              </div>
            </div>
            <p className="mt-8 text-xs font-semibold md:text-sm">
              For Support Contact
            </p>
            <div className="mt-2 flex items-center gap-x-2">
              <div className="group rounded-[50%] bg-bgWhite p-2">
                <MdContactSupport
                  size={24}
                  className="text-orange group-hover:text-blue"
                />
              </div>
              <div>
                <h1
                  className="cursor-grabbing text-base font-bold md:text-lg"
                  onClick={handleCopySupport}
                >
                  Support@kjcsolution.net
                </h1>
                {supportCopied && (
                  <p className="text-xs">Copied to clipboard!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
