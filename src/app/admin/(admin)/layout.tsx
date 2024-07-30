import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { SideNavBar } from "@/components/Dashboard";
import { NavbarOpenWrapper } from "@/context";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
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
        <body className={`${raleway.className} overflow-hidden`}>
          <NavbarOpenWrapper>
            <SideNavBar />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
          </NavbarOpenWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
