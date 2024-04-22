"use client";
import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";
import { useRouter } from "next/navigation";

//Import Icons
import { FaRegAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaMehRollingEyes } from "react-icons/fa";
import { GoPasskeyFill } from "react-icons/go";

type InitialStateProps = {
  name: string;
  email: string;
  password: string;
};
const initialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
};
export default function Register() {
  const router = useRouter();
  //State for the form loading
  const [loading, setLoading] = useState<boolean>(false)
  //State For The PassPhrase
  const [passPhrase, setPassPhrase] = useState<string>("");
  //Input State, For the Password
  const [inputType, setInputType] = useState<"text" | "password">("password");
  //State for the inputs
  const [state, setState] = useState(initialState);
  //Ref Hook for the Password field
  const inputRef = useRef<HTMLInputElement | null>(null);
  //Function for the Input type toggle
  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  //Function for the State Changing
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
    setPassPhrase('')
  };
  //For the Function Submit
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)
    const formData = state;

    if (passPhrase !== process.env.ACCOUNT_CREATION_PASSPHRASE) {
      toast.error("LMAO, you are playing, STOP PLAYING!!!");
      setLoading(false)
      return;
    }
    makeApiRequest("/register", "post", formData, {
      onSuccess: () => {
        // Handle success
        handleFormReset();
        setLoading(false)
        toast.success("Account was created successfully.");
        router.push("/admin/dashboard");
      },
      onError: (error: any) => {
        // Handle error
        handleFormReset();
        setLoading(false)
        if (error) {
          if (error === "Email already exists") {
            toast.error("Email Already Exists");
          } else if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error("Account wasn't created. Please try again.");
          }
        }
      },
    });
  };

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden pb-[8rem]">
      <div className="mt-14 flex flex-col items-center p-5 md:items-start md:px-10 md:py-10 xl:px-20">
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="mt-4 text-2xl font-semibold sm:text-3xl md:text-4xl xl:text-5xl">
            Create Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-orange"></div>
        </div>
        <p className="mt-4 text-sm text-[#595B63] md:text-base">
          Already A Member?{" "}
          <span className="cursor-pointer text-orange duration-500 hover:text-orange1">
            <Link href="/who-are-you/login">Log In</Link>
          </span>
        </p>
        <form className="mt-10 w-full" onSubmit={onSubmit}>
          <div className="relative mt-4 w-[20rem] md:w-[30rem]">
            <input
              className="w-full rounded-md border border-slate-700 bg-bgWhite px-2 py-3 text-sm outline-none placeholder:text-xs focus:border-2 focus:border-orange"
              type="text"
              name="name"
              id="name"
              value={state.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
            <FaRegAddressCard size={18} className="absolute right-2 top-4" />
          </div>
          <div className="relative mt-4 w-[20rem] md:w-[30rem]">
            <input
              className="w-full rounded-md border border-slate-700 bg-bgWhite px-2 py-3 text-sm outline-none placeholder:text-xs focus:border-2 focus:border-orange"
              type="email"
              name="email"
              id="email"
              value={state.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <MdEmail size={18} className="absolute right-2 top-4" />
          </div>
          <div className="relative mt-4 w-[20rem] md:w-[30rem]">
            <input
              className="w-full rounded-md border border-slate-700 bg-bgWhite px-2 py-3 text-sm outline-none placeholder:text-xs focus:border-2 focus:border-orange"
              type="text"
              name="passPhrase"
              id="passPhrase"
              value={passPhrase}
              placeholder="Enter The Passphrase"
              onChange={(event: any) => setPassPhrase(event.target.value)}
            />
            <GoPasskeyFill size={18} className="absolute right-2 top-4" />
          </div>
          <div className="relative mt-4 w-[20rem] md:w-[30rem]">
            <input
              ref={inputRef}
              className="w-full rounded-md border border-slate-700 bg-bgWhite px-2 py-3 text-sm outline-none placeholder:text-xs focus:border-2 focus:border-orange"
              type={inputType}
              name="password"
              id="password"
              value={state.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <BsEmojiHeartEyesFill
              size={18}
              className={`${
                inputType === "text" ? "hidden" : ""
              } absolute right-2 top-4 cursor-pointer`}
              onClick={toggleInputType}
            />
            <FaMehRollingEyes
              size={18}
              className={`${
                inputType === "password" ? "hidden" : ""
              } absolute right-2 top-4 cursor-pointer`}
              onClick={toggleInputType}
            />
          </div>
          <div className="mt-8 flex w-[20rem] justify-between md:w-[30rem]">
            <button
              className="w-full rounded-md bg-orange py-4 text-center text-xs text-white duration-500 hover:bg-[#EDEDEE] hover:font-semibold hover:text-orange md:text-sm"
              type="submit"
            >
              {loading ? "Submitting..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
