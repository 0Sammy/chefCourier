"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import Link from "next/link";

type InitialStateProps = {
  packageID: string;
  statusChanges: string;
  location: string;
  timestamp: string,
};
const initialState: InitialStateProps = {
  packageID: "",
  statusChanges: "",
  location: "",
  timestamp: "",
};
const StatusChange = ({ thePackageID }: { thePackageID: string }) => {
    const router = useRouter()
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  //OnChange Function
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
    const formData = { ...state, packageID: thePackageID }

    makeApiRequest("/statusChange", "post", formData, {
      onSuccess: () => {
        // Handle success
        handleFormReset();
        setLoading(false)
        toast.success("The Package Status Was Updated Successfully.");
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
            toast.error("The Package Status Wasn't Updated. Please try again.");
          }
        }
      },
    });
  };
  return (
    <main className="w-full text-[#141619] text-xs md:text-sm xl:text-base">
      <form onSubmit={onSubmit} className="mt-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="statusChanges" className="block cursor-pointer text-xs md:text-sm">
            New Status
          </label>
          <input required type="text" placeholder="Enter new status" onChange={handleChange} value={state.statusChanges} name="statusChanges" id="statusChanges" className="focus:bg-white outline-0 border focus:border-orange px-8 py-2 md:py-3 border-black/70 rounded-md"/>
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <label htmlFor="location" className="cursor-pointer text-xs md:text-sm">Enter Location or Note</label>
          <input type="text" name="location" id="location" placeholder="Enter new location or note" className="focus:bg-white outline-0 border focus:border-orange px-8 py-2 md:py-3 border-black/70 rounded-md" onChange={handleChange}
          value={state.location}/>
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <label htmlFor="timestamp" className="cursor-pointer text-xs md:text-sm">Enter Desired Date and Time</label>
          <input required type="datetime-local" name="timestamp" id="timestamp"  className="bg-white w-full focus:bg-white outline-0 border focus:border-orange px-8 py-2 md:py-3 border-black/70 rounded-md" onChange={handleChange}
          value={state.timestamp}/>
        </div>
        <div className="mt-8">
          <input
            type="submit"
            value={
              loading ? "Updating Package Status..." : "Update Package Status"
            }
            className="w-full cursor-pointer rounded-md bg-orange p-3 text-xs font-semibold text-white duration-500 hover:bg-orange1 md:p-3 md:text-sm"
          />
        </div>
      </form>
      <div className="my-4 text-center">
      <Link className="text-[0.6rem] sm:text-xs md:text-sm hover:underline duration-500 font-semibold" href="/tracking" target="_blank">Confused about the package status? Kindly Check it here.</Link>
      </div>
    </main>
  );
};

export default StatusChange;
