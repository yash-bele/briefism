import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Latest News, Breaking News, Entertainment, Technology, Health & Lifestyle News | Briefism",
  description:
    "Stay informed with Briefism - Your go-to source for concise and insightful news briefs. Explore breaking stories, in-depth analyses, and stay updated on global events, technology, lifestyle, and more. Get the latest news in a nutshell, delivered with clarity and brevity. Your daily briefing starts here.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "block",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
