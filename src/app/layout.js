import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Latest News, Entertainment, Technology and More | Briefism",
  description:
    "Stay informed with Briefism. Get the latest news in a nutshell, delivered with clarity and brevity.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "block",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9578547467175156"
          crossorigin="anonymous"
        ></Script>
      </head>
      <body className={`font-light select-none ${montserrat.className}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto mt-[calc(48px+20px)] px-5 lg:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
