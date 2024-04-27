"use client"
import { FormEvent } from "react";
import { toast } from "sonner"

//Import Utils
import { makeApiRequest } from "@/lib/apiUtils"
import { useAdminStore } from "@/store/admin";

//Import Types
import { suspendProps } from "@/types/default"

const SuspendButton = ({ loggedInEmail, role, adminEmail, userSuspended }: suspendProps) => {

    const { email } = useAdminStore()

    const onSubmit = (event: FormEvent) => {
      event.preventDefault();

      if (email === loggedInEmail){
        toast.warning("You can't suspend yourself Nigga.")
        return;
      }

      if (role === "superAdmin"){
        toast.warning("You can't suspend a super admin Nigga.")
        return;
      }

      toast.info(userSuspended ? "Revoking user suspension" : "Suspending User")
      const formData = { email: loggedInEmail, currentUpdate: !userSuspended };
        
        const emailData = {
          to: adminEmail,
          subject: (userSuspended ? "Admin Suspension Revoked" : "Admin Suspended"),
          emailType: (userSuspended ? "revokeSuspension" : "userSuspension"),
        };

        //console.log({formData})
        //console.log({emailData})

        makeApiRequest("/adminSuspend", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Admin suspension status was updated successfully.")
              makeApiRequest("/send-email", "post", emailData, {
                onSuccess: () => {
                  // Handle success
                  toast.success("Email was sent successfully.")
                  window.location.reload()
                },
                onError: (error: any) => {
                  // Handle error
                  toast.error("Couldn't send suspension email.")
                  console.log("Couldn't send email, due to some error. " + error.message)
                },
              });
            },
            onError: (error: any) => {
              // Handle error
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
              }
              toast.error("Unable to verify user now, please try again later.")
            },
          });
    }

    return ( 
        <main>
            <form onSubmit={onSubmit}>
                <button type="submit" className="text-xs md:text-sm xl:text-base border border-orange bg-orange rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-orange duration-500">{userSuspended ? "Resume" : "Suspend"}</button>
            </form>
        </main>
     );
}
 
export default SuspendButton;