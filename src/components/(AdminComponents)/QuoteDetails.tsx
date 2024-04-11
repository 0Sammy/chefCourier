import { formatDateTime } from "@/lib/dateTimeUtils";

const QuoteDetails = (quoteDetails: any) => {
  

  return (
    <main className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
      {!quoteDetails || quoteDetails.length === 0 &&
        <div className="w-full">
          <p className="text-center text-xl font-bold">No Quote Yet</p>
        </div>}
       
        {quoteDetails && quoteDetails.length !== 0 && quoteDetails.quoteDetails.map((detail: any) => (
          <div
            key={detail.id}
            className="special1 h-72 w-1/4 min-w-[18rem] overflow-auto rounded-md bg-orange p-4 text-white"
          >
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Full Name</p>
              <p className="text-sm font-bold md:text-base">
                {detail.fullName}
              </p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Email</p>
              <p className="text-sm font-bold md:text-base">{detail.email}</p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Phone Number</p>
              <p className="text-sm font-bold md:text-base">
                {detail.phoneNumber}
              </p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Pickup Location</p>
              <p className="text-sm font-bold md:text-base">
                {detail.pickupLocation}
              </p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Delivery Location</p>
              <p className="text-sm font-bold md:text-base">
                {detail.deliveryLocation}
              </p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Chosen Time and Date</p>
              <p className="text-sm font-bold md:text-base">
                {formatDateTime(detail.chosenDateTime)}
              </p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Important Details</p>
              <p className="text-sm font-bold md:text-base">
                {detail.importantDetails}
              </p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Time Created</p>
              <p className="text-sm font-bold md:text-base">
                {formatDateTime(detail.createdAt)}
              </p>
            </div>
          </div>
        ))}
    </main>
  );
};

export default QuoteDetails;
