import { create } from 'zustand';

type quoteStore = {
    country: string;
    updateCountry: (newCountry: string) => void;
}

export const useQuoteStore = create<quoteStore>((set) => ({ 
    country: "",
    updateCountry: (newCountry: string) => set({country : newCountry})
}));