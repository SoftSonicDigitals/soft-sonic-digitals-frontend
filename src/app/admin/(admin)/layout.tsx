import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { SideNavBar } from "@/components/Dashboard/Navbar";
import { NavbarOpenWrapper } from "@/context/NavbarContext";
import { LeadDetailsWrapper } from "@/context/LeadDetailsContext";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SoftSonic",
  description: "Consulting and Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.className}  overflow-x-hidden`}>
          <NavbarOpenWrapper>
            <LeadDetailsWrapper>
              <SideNavBar />
              {children}
              <Toaster position="top-right" reverseOrder={false} />
            </LeadDetailsWrapper>
          </NavbarOpenWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
