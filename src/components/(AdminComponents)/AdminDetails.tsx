"use client"
import { useEffect } from "react";
//Import States
import { useAdminStore } from "@/store/admin";


const AdminDetails = ({adminEmail, notificationEmail}: {adminEmail : string, notificationEmail : string}) => {

    const { updateEmail, updateNotificationEmail } = useAdminStore()

    useEffect(() => {

       updateEmail(adminEmail)
       updateNotificationEmail(notificationEmail)  
       
    },[adminEmail, notificationEmail, updateEmail, updateNotificationEmail])
    

    return (
        <main></main>
     );
}
 
export default AdminDetails;