import { formatDateTime } from "@/lib/dateTimeUtils";

const QuoteDetails = (quoteDetails: any) => {
  

  return (
    <main className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-xs md:text-sm xl:text-base">
      {!quoteDetails || quoteDetails.length === 0 &&
        <div className="w-full">
          <p className="text-center text-xl font-semibold">No Quote Yet</p>
        </div>}
       
        {quoteDetails && quoteDetails.length !== 0 && quoteDetails.quoteDetails.map((detail: any) => (
          <div
            key={detail.id}
            className="special1 h-72 w-1/4 min-w-[18rem] overflow-auto rounded-md bg-orange p-4 text-white"
          >
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Full Name</p>
              <p className="font-semibold">
                {detail.fullName}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Email</p>
              <p className="font-semibold">{detail.email}</p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Phone Number</p>
              <p className="font-semibold">
                {detail.phoneNumber}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Address</p>
              <p className="font-semibold">
                {detail.address}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Country</p>
              <p className="font-semibold">
                {detail.country}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Nearest Airport</p>
              <p className="font-semibold">
                {detail.nearestAirport}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Used Serial Number</p>
              <p className="font-semibold">
                {detail.serialNumber}
              </p>
            </div>
            <div className="mt-2 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm text-black">Time Created</p>
              <p className="font-semibold">
                {formatDateTime(detail.createdAt)}
              </p>
            </div>
          </div>
        ))}
    </main>
  );
};

export default QuoteDetails;
