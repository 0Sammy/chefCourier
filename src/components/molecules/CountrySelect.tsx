
import { useState } from 'react';

//Country Data
import countries from '../../../public/data/countries.json';

//Icons
import { MdArrowDropDown } from "react-icons/md";

//Types
import { Country } from '@/types/default';

//Stores
import { useQuoteStore } from '@/store/quote';

const CountrySelect = () => {

  const { updateCountry } = useQuoteStore()
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country.name);
    updateCountry(country.name)
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative -mt-[1rem]">
      <p className='text-xs md:text-sm font-bold'>Country</p>
      <div
        className={`relative w-full focus:outline-none bg-white border-b focus:border-orange border-footerBrown px-4 py-2 cursor-pointer ${
          isDropdownOpen ? 'rounded-b-none border-b-0' : ''
        }`}
        onClick={toggleDropdown}
      >
        <div className={`flex items-center justify-between  ${selectedCountry && "-mt-[0.3rem]"}`}>
          <span>{selectedCountry || ''}</span>
          <div className={`transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`}>
            <MdArrowDropDown />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 w-full max-h-48 overflow-y-auto rounded-md bg-white border border-[#E6E7E8] shadow-lg z-10">
          {countries.map((country) => (
            <div
              key={country.code}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSelect(country)}
            >
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
