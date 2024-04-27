// import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Latest News, Entertainment, Technology and More | Briefism",
  description:
    "Stay informed with Briefism. Get the latest news in a nutshell, delivered with clarity and brevity.",
};

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "block",
// }); //  ${montserrat.className} in body className

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-slate-700 select-none`}>
        <>
          <Navbar />
          <main className="max-w-7xl mx-auto mt-[calc(48px+20px)] px-5 lg:px-0">
            {children}
          </main>
          <Footer />
        </>
        <Script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9578547467175156"
        />
      </body>
    </html>
  );
}
