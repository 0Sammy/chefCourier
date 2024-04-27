import { create } from 'zustand';

type adminStore = {
    email: string;
    notificationEmail: string;
    updateEmail: (newEmail: string) => void;
    updateNotificationEmail: (newEmail: string) => void;
}

export const useAdminStore = create<adminStore>((set) => ({ 
    email: "",
    notificationEmail: "",
    updateEmail: (newEmail: string) => set({email : newEmail}),
    updateNotificationEmail: (newEmail: string) => set({notificationEmail : newEmail})
}));