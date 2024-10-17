import AboutMeSection from "@/components/AboutMeSection";
// import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph Croft Web Development Website</title>
      </Head>
      <Header />
      <Hero />
      <AboutMeSection />
      <Services />
      {/* <Testimonies /> */}
      <Footer />
    </>
  );
}
