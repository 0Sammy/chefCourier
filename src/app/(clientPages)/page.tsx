import getAllSerialNumberWithoutEmail from "../actions/getAllSerialNumbersWithoutEmail";

//Components
import HeroSection from "@/components/(LandingPageComponents)/HeroSection";
import SecondSection from "@/components/(LandingPageComponents)/SecondSection";
import ThirdSection from "@/components/(LandingPageComponents)/ThirdSection";
import FourthSection from "@/components/(LandingPageComponents)/FourthSection";
import Testimonial from "@/components/(LandingPageComponents)/Testimonial";
import Contact from "@/components/(LandingPageComponents)/Contact";
import CTA from "@/components/(LandingPageComponents)/CTA"


export const revalidate = 0
export default async function Home () {

  const allSerialNumbers = await getAllSerialNumberWithoutEmail()
  

  return (
    <main className="bg-white">
      <HeroSection />
      <SecondSection allSerialNumbers={allSerialNumbers} />
      <ThirdSection />
      <FourthSection />
      <Testimonial />
      <Contact />
      <CTA />
    </main>
  )
}
