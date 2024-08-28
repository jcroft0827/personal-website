import AboutMeSection from "@/components/AboutMeSection";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMeSection />
      <Services />
      <Testimonies />
      <Footer />
    </>
  );
}
