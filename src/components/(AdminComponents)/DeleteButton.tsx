"use client"
import { FormEvent} from "react";

//Utils
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { permanentRedirect } from "next/navigation";

//Import Types
import { deleteProps } from "@/types/default";

const DeleteButton = ({loggedInEmail, notificationEmail} :deleteProps) => {

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        toast.info("Deleting User")
        
        const formData = { email: loggedInEmail };
        const emailData = {
          to: notificationEmail,
          subject: ("Admin Deleted"),
          emailType: ("adminDeleted"),
        };
        //console.log({emailData})
        //console.log({formData})

        makeApiRequest("/adminDelete", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Client was deleted successfully.")
              
              permanentRedirect("/admin/admin")
            },
            onError: (error: any) => {
              // Handle error
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
              }
              toast.error("Unable to delete user now, please try again later.")
              permanentRedirect("/admin/admin")
            },
          });
    }


    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base border border-red-600 bg-red-600 rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-red-600 duration-500">Delete</button>
            </form>
        </main>
     );
}
 
export default DeleteButton;