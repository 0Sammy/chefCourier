import { formatDateTime } from "@/lib/dateTimeUtils";
const ContactFormDetails = (formDetails: any) => {
  return (
    <main className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
      {!formDetails ||
        (formDetails.length === 0 && (
          <div className="w-full">
            <p className="text-center text-xl font-bold">
              No Contact Us Request Yet
            </p>
          </div>
        ))}
      {formDetails &&
        formDetails.length !== 0 &&
        formDetails.formDetails.map((detail: any) => (
          <div
            key={detail.id}
            className="special1 h-64 w-1/4 min-w-[18rem] overflow-auto rounded-md bg-orange p-4 text-white"
          >
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Full Name</p>
              <p className="text-sm font-bold md:text-base">{detail.name}</p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Email</p>
              <p className="text-sm font-bold md:text-base">{detail.email}</p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Subject</p>
              <p className="text-sm font-bold md:text-base">{detail.subject}</p>
            </div>
            <div className="mt-1 flex flex-col gap-y-1">
              <p className="text-xs md:text-sm">Message</p>
              <p className="text-sm font-bold md:text-base">{detail.message}</p>
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

export default ContactFormDetails;
