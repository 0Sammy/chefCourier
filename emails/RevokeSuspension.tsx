/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";



export default function RevokeSuspensionTemplate() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={paragraph}>
             Hello, your account has been UNBLOCKED unsuccessfully. 
          </Text>
          <Text style={paragraph}>
              This means your full right as an administrator of KJC Solution has been restored.
          </Text>
          <Text style={paragraph}>
            Well, kindly stick to the rules nad regulations in order to maintain this access.
          </Text>
          <Container style={footer}>
            <Text>
            This Message Was Processed by KJC Solution Super Admininstrator.
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
