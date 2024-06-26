"use client"
import { FormEvent, useState } from "react";
import { formatDateTime } from "@/lib/dateTimeUtils";
import { MdEditSquare } from "react-icons/md";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";

type StatusItem  = {
  id: string;
  status: string;
  location: string;
  timestamp: string;
  editing: boolean;
}

const Status = ({ packageStatuses }: any) => {
    const [statusItems, setStatusItems] = useState<StatusItem[]>(() =>
    packageStatuses.map((status: any) => ({ ...status, editing: false }))
  );
//Form States
const [verifyBtnVisible, setVerifyBtnVisible] = useState<boolean>(false)
const [updatedData, setUpdatedData] = useState<StatusItem>()
const [loading, setLoading] = useState<boolean>(false)
  
  
  const handleEditClick = (id: string) => {
    setStatusItems((prevStatusItems) =>
      prevStatusItems.map((statusItem) =>
        statusItem.id === id ? { ...statusItem, editing: true } : statusItem
      )
    );
  };
  const handleInputChange = (id: string, field: string, value: string) => {
    setStatusItems((prevStatusItems) =>
      prevStatusItems.map((statusItem) =>
        statusItem.id === id ? { ...statusItem, [field]: value } : statusItem
      )
    );
  };
  const handleUpdateClick = (id: string) => {
    setStatusItems((prevStatusItems) =>
      prevStatusItems.map((statusItem) =>
        statusItem.id === id ? { ...statusItem, editing: false } : statusItem
      )
    );
  };
  const updatePackage = (id: string) => {
    const updatedStatus = statusItems.find((statusItem) => statusItem.id === id);
    if (updatedStatus) {
        setUpdatedData(updatedStatus)
    }
    setVerifyBtnVisible((prev) => !prev)
  }

//OnSubmit Function
const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)
    const formData = updatedData
    
    //console.log({formData})

    makeApiRequest("/editStatus", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false)
          toast.success("Package status was edited properly.");
          window.location.reload()
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false)
          if (error) {
            if (error === "Missing Fields") {
              toast.error("Please Fill In All The Details");
            } else {
              toast.error("Your Response Wasn't Submitted, Please Try Again Later.");
            }
          }
          window.location.reload()
        },
      });
    
}
  return (
    <main>
      <div className="mt-4 flex flex-wrap gap-5">
        {statusItems.map((statusItem: StatusItem) => (
            <div key={statusItem.id} className="border border-[#7676801F] rounded-lg p-2">
              <div className="flex justify-end text-orange cursor-pointer" onClick={() => handleEditClick(statusItem.id)}>
                <MdEditSquare size={18}/>
              </div>
              <form className="mt-2 flex flex-col gap-y-2" onSubmit={onSubmit}>
                <input type="text" name="status" id={`status-${statusItem.id}`} value={statusItem.status} readOnly={!statusItem.editing} onChange={(e) => handleInputChange(statusItem.id, "status", e.target.value)} className="focus:bg-white outline-0 border focus:border-orange px-4 py-2 md:py-3 border-black/70 rounded-md"
                />
                <input type="text" name="location" id={`location-${statusItem.id}`} value={statusItem.location} readOnly={!statusItem.editing} onChange={(e) => handleInputChange(statusItem.id, "location", e.target.value)} className="focus:bg-white outline-0 border focus:border-orange px-4 py-2 md:py-3 border-black/70 rounded-md"
                />
                <p className="text-slate-600 text-[0.6rem] md:text-xs xl:text-sm ml-2">
                  {formatDateTime(statusItem.timestamp)}
                </p>
                {statusItem.editing && ( 
                <div className="flex flex-col gap-y-2">
                    <button type="button" onClick={() => updatePackage(statusItem.id)} className="mt-4 bg-indigo-500 text-white px-2 py-2 rounded-lg hover:bg-indigo-800 duration-300">Update</button>
                    <div className="flex justify-between">
                        {verifyBtnVisible && <input type="submit" value={loading ? "Updating" : "Update"} className="font-bold text-green-600 cursor-pointer text-[0.6rem] md:text-xs xl:text-sm"/>}
                        <p className="text-red-600 cursor-pointer text-[0.6rem] md:text-xs xl:text-sm" onClick={() => handleUpdateClick(statusItem.id)}>Cancel</p>
                    </div>
                    
                </div>
                )}
              </form>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Status;
