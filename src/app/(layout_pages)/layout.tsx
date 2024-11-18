import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import { Footer, Navbar } from "@/components/LayoutComponents";

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
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
