import { ClientDetails } from "@/models/admin";
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

export const NewEnquiry = (leadDetails: ClientDetails) => (
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
      <Preview> New Enquiry Soft Sonic Digitals</Preview>
      <Body className={"bg-[#ffffff] text-[#24292e] font-sans"}>
        <Container className="max-w-[480px] my-auto ">
          <Img src={`logo.svg`} width="32" height="32" alt="Magneto Logo" />

          <Text className="text-2xl ">New Enquiry Soft Sonic Digitals</Text>

          <Section
            className="p-[24px] rounded-md "
            style={{ border: "solid 1px #dedede" }}
          >
            <Text className="mb-1">
              Dear <strong className="capitalize">{"hello"}</strong>,
            </Text>
            <Text className="text-base mb-6">
              A new enquiry has been successfully submitted to your system.
              Please find the details of the submission below for your review
              and necessary action.
            </Text>

            <div className="my-10">
              {Object.entries(leadDetails).map(([key, value], index) => (
                <div key={index}>
                  <div className="flex gap-5 mb-3">
                    <div className="w-28 capitalize">
                      {key.replaceAll("_", " ")}
                    </div>
                    <div>{value}</div>
                  </div>
                </div>
              ))}
            </div>

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

export default NewEnquiry;
