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
            Nigga, your account has been DELETED.
          </Text>
          <Text style={paragraph}>
              You think I am joking? Enter KJCSolution.net let me see deepshit.
          </Text>
          <Text style={paragraph}>
            Have a nice day, and don't come snupping around, we whoop peoples' goddamn asses here.
            Have a nice life.
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
