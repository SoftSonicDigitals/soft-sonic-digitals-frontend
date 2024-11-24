import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Thankyou = (name: string) => (
  <Html>
    <Head />
    <Preview>Thank you for reaching out SoftSonic</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`/Logo.svg`} width="32" height="32" alt="Magneto Logo" />

        <Text style={title}>Thank you for reaching out SoftSonic</Text>

        <Section style={section}>
          <Text style={text}>
            Dear <strong className="capitalize">{name}</strong>,
          </Text>
          <Text style={text}>
            Thank you for contacting <strong>Softsonic Digitals</strong>. We
            have received your inquiry and will get back to you shortly.
          </Text>

          <Text style={text}>Best regards,</Text>
          <Text style={text}>The Softsonic Team</Text>
        </Section>

        <Text style={footer}>
          Softsonic Digitals・88 Colin P Kelly Jr Street ・San Francisco, CA
          94107
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Thankyou;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "30px",
};
