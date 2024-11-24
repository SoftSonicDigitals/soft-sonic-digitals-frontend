import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const Thankyou = (name: string) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>Thank you for reaching out SoftSonic</Preview>
      <Body className={"bg-[#ffffff] text-[#24292e] font-sans"}>
        <Container className="max-w-[480px] my-auto ">
          <Img src={`logo.svg`} width="32" height="32" alt="Magneto Logo" />

          <Text className="text-2xl ">
            Thank you for reaching out SoftSonic
          </Text>

          <Section
            className="p-[24px] rounded-md"
            style={{ border: "solid 1px #dedede" }}
          >
            <Text className="mb-1">
              Dear <strong className="capitalize">{"hello"}</strong>,
            </Text>
            <Text className="mb-1">
              Thank you for contacting <strong>Softsonic Digitals</strong>. We
              have received your inquiry and will get back to you shortly.
            </Text>

            <Text className="!my-1">Best regards,</Text>
            <Text className="!my-1">The Softsonic Team</Text>
          </Section>

          <Text className="text-gray-500 text-xs text-center !mt-8">
            Softsonic Digitals・88 Colin P Kelly Jr Street ・San Francisco, CA
            94107
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default Thankyou;
