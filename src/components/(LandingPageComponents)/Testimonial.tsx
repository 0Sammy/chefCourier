"use client";
import { useState } from "react";
import Image from "next/image";
// Import Icons
import { IoArrowRedoSharp, IoArrowUndo } from "react-icons/io5";
import { FaQuoteRight } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";

//Import Needed Images
import c from "../../../public/images/c.png";
import c1 from "../../../public/images/c1.png";
import c2 from "../../../public/images/c2.png";
import c3 from "../../../public/images/c3.png";
import c4 from "../../../public/images/c4.png";
import c5 from "../../../public/images/c5.png";
import c6 from "../../../public/images/c6.png";
import c7 from "../../../public/images/c7.png";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides = [
    { id: 1, imgSrc: c, name: "Mason Harris", work:"International Sales Manager", text: "Managing international shipments for GlobalTech Solutions and reliability have significantly improved our supply chain. It's a pleasure working with a courier service that understands the needs of businesses operating on a global scale."},
    { id: 2, imgSrc: c1, name: "Kenji Nakamura", work: "Finance Analyst", text: "KJC Solution's precise tracking and timely deliveries have streamlined our financial operations at Tokyo Finance Corp. The efficiency and professionalism they exhibit make them an indispensable partner for any business." },
    { id: 3, imgSrc: c2, name: "Carlos Gutierrez", work:"Renewable Energy Engineer", text: "Working in the renewable energy sector demands precision and efficiency. KJC Solution's reliable courier services have played a vital role in ensuring that our green innovations reach their destinations promptly. Kudos to KJC Solution for their exceptional service!"},
    { id: 4, imgSrc: c3, name: "David Foster", work:"Photographer", text: "As a photographer, timely delivery is crucial for my business. KJC Solution has been a game-changer for LensCraft Photography. Their efficient courier services have simplified our logistics, allowing us to focus on capturing moments while they handle the rest. Truly the best in the business!" },
    { id: 5, imgSrc: c4, name: "Dr. Emily Baker", work:"Medical Doctor", text: "KJC Solution has revolutionized the way we handle medical supplies at St. Jude's Hospital. The swift and reliable courier services ensure that critical supplies reach us on time, enabling us to provide the best care to our patients. Thank you, KJC Solution, for making a positive impact on healthcare." },
    { id: 6, imgSrc: c5, name: "Aisha Patel", work:"Fashion Designer", text: "Chic Trends Ltd relies on KJC Solution to transport our fashion creations worldwide. Their attention to detail and commitment to meeting delivery deadlines have significantly contributed to the success of our global fashion brand. Highly recommended!" },
    { id: 7, imgSrc: c6, name: "James Robertson", work:"Marine Biologist", text: "As a marine biologist, our research often requires transporting delicate samples and equipment across oceans. KJC Solution's commitment to the safety and timely delivery of our marine specimens has made them an invaluable partner for the AquaMarine Research Institute." },
    { id: 8, imgSrc: c7, name: "Olivia Johnson", work:"Software Developer", text: "KJC Solution has been a game-changer for TechSprint Innovations. As a software developer, receiving components and equipment on time is crucial for project deadlines. KJC Solution's reliable and swift deliveries have significantly improved our development process." },
  ];

  const handleButtonClickNext = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
  };

  const handleButtonClickPrev = () => {
    const prevIndex = (activeIndex - 1) % slides.length;
    if (prevIndex < 0) {
      setActiveIndex(7);
    } else {
      setActiveIndex(prevIndex);
    }
  };

  return (
    <main className="px-4 sm:px-10 md:px-12 lg:px-14 pb-[8rem]">
      <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
        What Our Customers Are Saying.
      </h1>
      <div className="relative mt-20 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`h-80 min-w-full md:flex md:flex-row md:items-center md:justify-between`}
            >
              <div className="group h-full w-full bg-bgWhite p-8 duration-500 hover:bg-blue sm:p-10 md:w-[49%] md:p-8 lg:w-[40%] lg:p-6 xl:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-5">
                    <Image src={slide.imgSrc} alt="client image" className="w-14 h-14 lg:h-20 lg:w-20" placeholder="blur"/>
                    <div className="group-hover:text-white">
                      <h4 className="text-base font-semibold md:text-lg">
                        {slide.name}
                      </h4>
                      <p className="text-xs md:text-sm">
                        {slide.work}
                      </p>
                    </div>
                  </div>
                  <div className="p-2 xl:p-4 sm:flex items-center  justify-center rounded-[50%] bg-orange">
                    <FaQuoteRight size={24} className="text-white" />
                  </div>
                </div>
                <div className="group-hover:text-white">
                  <p className="text-xs lg:text-sm mt-4  sm:mt-6 lg:mt-8 font-semibold">
                    {slide.text}
                  </p>
                  <div className="flex gap-x-2 mt-4 sm:mt-6 lg:mt-8">
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  </div>
                  
                </div>
              </div>
              <div className="hidden group md:block h-full w-full bg-bgWhite p-8 duration-500 hover:bg-blue sm:p-10 md:w-[49%] md:p-8 lg:w-[40%] lg:p-6 xl:p-8">
              {index + 1 < slides.length &&  (
              <>
              <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-5">
                    <Image src={slides[index + 1].imgSrc} alt="client image" className="w-14 h-14 lg:h-20 lg:w-20" placeholder="blur"/>
                    <div className="group-hover:text-white">
                      <h4 className="text-base font-semibold md:text-lg">
                        {slides[index + 1].name}
                      </h4>
                      <p className="text-xs md:text-sm">
                        {slides[index + 1].work}
                      </p>
                    </div>
                  </div>
                  <div className="p-2 xl:p-4 sm:flex items-center  justify-center rounded-[50%] bg-orange">
                    <FaQuoteRight size={24} className="text-white" />
                  </div>
                </div>
                <div className="group-hover:text-white">
                  <p className="text-xs lg:text-sm mt-4  sm:mt-6 lg:mt-8 font-semibold">
                    {slides[index + 1].text}
                  </p>
                  <div className="flex gap-x-2 mt-4 sm:mt-6 lg:mt-8">
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  <BsEmojiHeartEyesFill className="text-ratingYellow" size={24}/>
                  </div>
                  
                </div>
                </> 
              )}
              </div>
            </div>
          ))}
        </div>
        <div className="relative left-[62%] top-full mt-10 flex gap-x-3 sm:left-[70%] min-[560px]:left-[75%] md:left-[80%] xl:left-[90%]">
          <div className="group transform rounded-[50%] border border-orange p-2 duration-500 hover:-translate-x-2 hover:bg-orange">
            <IoArrowUndo
              onClick={handleButtonClickPrev}
              size={24}
              className="cursor-pointer text-orange group-hover:text-white"
            />
          </div>
          <div className="group transform rounded-[50%] border border-orange p-2 duration-500 hover:translate-x-2 hover:bg-orange">
            <IoArrowRedoSharp
              onClick={handleButtonClickNext}
              size={24}
              className="cursor-pointer text-orange group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
