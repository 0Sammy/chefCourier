import Image from "next/image";
import Link from "next/link"
//Import Necessary Images
import ctaImg from "../../../public/images/cta.jpeg";
const CTA = () => {
  return (
    <main className="font-semibold relative top-[10rem] mx-auto flex h-[34rem] w-[90%] flex-col  bg-bgWhite shadow-sm sm:w-[80%] md:w-[70%] md:flex-row md:gap-y-0 lg:w-[60%]">
      <div className="h-full w-full md:w-1/2">
        <Image
          src={ctaImg}
          alt="CTA Image"
          className="h-full w-full object-cover"
          placeholder="blur"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-center p-2 sm:p-4 md:w-1/2 md:p-6 lg:p-8">
        <h1 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl mt-5 md:mt-10">
          Ready To Join The Future?
        </h1>
        <p className="text-xs md:text-sm mt-5 md:mt-10">
          Are you ready to join the future? Choosing KJC Solution will be the
          last difficult decision you will have to make. Call us right now and
          let the most powerful logistics solution ever developed make decisions
          for you.
        </p>
        <Link href="/quote" className="transform hover:translate-x-2 hover:-translate-y-2 w-40 text-center py-2 md:py-3 bg-orange hover:bg-blue text-white duration-500 mt-5 md:mt-10 text-sm md:text-base">Get Free Quote</Link>
      </div>
    </main>
  );
};

export default CTA;
