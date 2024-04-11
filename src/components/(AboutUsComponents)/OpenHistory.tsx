"use client";
import { useState } from "react";
//Import Icons
import { RxCross1 } from "react-icons/rx";

const OpenHistory = () => {
  //Close State
  const [close, setClose] = useState<boolean>(false);
  //Close Function
  const closeToggle = () => {
    return setClose((prevClose) => !prevClose);
  };
  return (
    <main
      className={`${
        close ? "hidden" : ""
      } fixed left-0 top-0 z-[70] flex h-screen w-full items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="h-[40rem] w-80 bg-bgWhite p-4 md:w-96 lg:w-[30rem]">
        <div className="flex flex-col items-end">
          <RxCross1
            size={24}
            className="cursor-pointer"
            onClick={closeToggle}
          />
          <p className="text-xs font-bold">close</p>
        </div>
        <div className="overflow-y-auto my-10 h-[80%]">
          <p className="text-sm leading-relaxed font-[500]">
            Inaugurated in July 29 2016, <span className="text-orange">KJC Solution </span>originated as a vision in the
            bustling landscape of the United States. Witnessing a surge in
            demand for efficient shipping and courier services, we established
            our roots in the heart of commerce. <br /> <br /> Over the years, our commitment
            to excellence propelled us to unprecedented heights, solidifying our
            reputation as a trailblazer in the industry. Recognizing the growing
            international market, we embarked on a strategic expansion journey. <br /> <br />
            In 2018, responding to the call for our services in the Middle East,
            we proudly opened our branch in the vibrant city of Baghdad, Iraq. 
            This pivotal move allowed us to seamlessly connect continents,
            bridging the gap between East and West. <br /> <br /><span className="text-orange">KJC Solution</span> has evolved
            into a comprehensive courier service provider, offering a spectrum
            of solutions across air and sea shipments, express deliveries, and
            custom logistics. <br /> <br />Our unwavering dedication to customer satisfaction
            and precision in every delivery has positioned us among the best in
            the business. <br /> <br />Today, with a global network spanning continents, we
            continue to redefine standards and set new benchmarks in the
            shipping and courier domain. <br /> <br />Our journey is a testament to the
            values that drive us – reliability, efficiency, and an unyielding
            commitment to exceeding expectations.
          </p>
        </div>
      </div>
    </main>
  );
};

export default OpenHistory;
