/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";



export default function AccountDeletedTemplate() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={paragraph}>
              Sorry, your account has been DELETED.
          </Text>
          <Text style={paragraph}>
              This is due to your incompliance to our rules and regulations.
          </Text>
          <Text style={paragraph}>
            If you think this was a mistake, kindly contact the Super Admininstrator.
          </Text>
          <Container style={footer}>
            <Text>
              This Message Was Processed by KJC Solution Super Administrator.
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
