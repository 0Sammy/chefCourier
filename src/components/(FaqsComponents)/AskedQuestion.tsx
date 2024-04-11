import Image from "next/image";
import Link from "next/link";

//Import needed components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "../h1";
//Import Needed Images
import faqImg from "../../../public/images/faq.jpeg";


const AskedQuestion = () => {
  return (
    <main className="bg-bgWhite px-4 py-[8rem] sm:px-10 md:px-12 lg:px-14">
      <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:justify-between lg:gap-y-0 lg:items-center">
        <div className="w-full lg:w-[49%]">
          <div className="mb-10">
            <p className="mb-4 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
              CLIENTS INQUIRIES
            </p>
            <Heading heading="Frequently Asked" coloredHeading="Questions" />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What services does KJC Solution offer?
              </AccordionTrigger>
              <AccordionContent>
                KJC Solution provides comprehensive courier shipping
                services, including air freight, ocean freight, road freight,
                and specialized services like medical couriers and legal
                couriers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I track my shipment with KJC Solution?
              </AccordionTrigger>
              <AccordionContent>
                You can easily track your shipment by using the tracking number
                provided to you. Simply enter the number on our website&apos;s{" "}
                <Link
                  href="/tracking"
                  className="cursor-pointer underline"
                >
                  Tracking Tool
                </Link>{" "}
                for real-time updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What regions does KJC Solution serve?
              </AccordionTrigger>
              <AccordionContent>
                We operate globally, serving a wide range of regions. Whether
                you need shipping services locally or internationally, United
                Traverse has you covered.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I contact KJC Solution customer support?
              </AccordionTrigger>
              <AccordionContent>
                For any inquiries or assistance, you can reach our customer
                support team through the{" "}
                <Link
                  href="/contact"
                  className="cursor-pointer underline"
                >
                  Contact Us{" "}
                </Link>{" "}
                page on our website or via email at{" "}
                <span className="underline">support@unitedtraverse.com</span>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What types of packaging does KJC Solution recommend?
              </AccordionTrigger>
              <AccordionContent>
                We recommend using sturdy and secure packaging to ensure the
                safety of your items during transit. For specific packaging
                guidelines, refer to our Shipping Guidelines section.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How can I become a partner or affiliate with KJC Solution?
              </AccordionTrigger>
              <AccordionContent>
                If you&apos;re interested in partnership or affiliation
                opportunities, please contact our business development team at 
                  {" "}<span className="underline">
                  partnerships@unitedtraverse.com
                </span>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                What payment methods does KJC Solution accept?
              </AccordionTrigger>
              <AccordionContent>
                KJC Solution accepts a variety of payment methods, including
                major credit cards, PayPal, and bank transfers. Details can be
                found in the Payment Options section.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Are there restrictions on items that can be shipped with United
                Traverse?
              </AccordionTrigger>
              <AccordionContent>
                Yes, certain items may be restricted or require special
                handling. Please review our Shipping Restrictions page or
                contact our customer support for specific information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How does KJC Solution ensure the security of sensitive
                shipments?
              </AccordionTrigger>
              <AccordionContent>
                We prioritize the security of all shipments. Sensitive items are
                handled with extra care, and our advanced tracking systems
                provide added security and transparency throughout the shipping
                process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                Can I request a quote for shipping services from United
                Traverse?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! You can easily request a quote by filling out the
                online form on our <Link href="/quote" className="cursor-pointer underline">Get a Quote</Link> page. Our team will promptly
                provide you with a customized quote based on your shipping
                needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full lg:w-[45%]">
          <Image src={faqImg} alt="Container Images" className="rounded-md" placeholder="blur"/>
        </div>
      </div>
    </main>
  );
};

export default AskedQuestion;
