import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import { ContactPageNavbar } from "@/components/ContactPage";

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
    <html lang="en">
      <body className={raleway.className}>
        <ContactPageNavbar />
        {children}
      </body>
    </html>
  );
}
