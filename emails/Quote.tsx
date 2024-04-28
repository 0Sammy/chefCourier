/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

//Import Types
import { emailProps } from "@/types/default";


export default function QuoteTemplate({fullName, email, phoneNumber, address, country, nearestAirport, serialNumber}: emailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={paragraph}>
            Nigga, one of your client just made a quote.
          </Text>
          <Text style={paragraph}>
              Yeah, see the information below.
          </Text>
          <Text style={detailsParagraph}>
            Details of the Quote:
            <ul>
              <li style={list}>Full Name: {fullName}</li>
              <li style={list}>Email: {email}.</li>
              <li style={list}>Phone Number: {phoneNumber}</li>
              <li style={list}>Address: {address}</li>
              <li style={list}>Country: {country}</li>
              <li style={list}>Nearest Airport: {nearestAirport}</li>
              <li style={list}>Used Serial Number: {serialNumber}</li>
            </ul>
          </Text>
          <Container style={footer}>
            <Text>
              Processed by KJC Solution Super Admin.
            </Text>
          </Container>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#FFF",
  width: "800px", // Expanded width
  margin: "0 auto",
  padding: "2rem",
};

const container = {
  border: "1px solid #B2B3BA",
  padding: "1rem",
  backgroundColor: "#FFF",
  width: "100%",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#161618",
  margin: "2rem 0",
};

const footer = {
  marginTop: "2rem",
  borderTop: "1px solid #B2B3BA",
  paddingTop: "1rem",
};

const detailsParagraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#2C3E50",
    margin: "1rem 0",
    fontWeight: "500",
  };
  
const list ={
    margin: "0.3rem 0",
    color: "#592F1A",
    fontWeight: "600",
}