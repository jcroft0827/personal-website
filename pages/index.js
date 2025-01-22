import Footer from "@/components/Footer";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioHero from "@/components/PortfolioHero";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph Croft Web Development Website</title>  
        <meta property="og:title" content="Joseph Croft Web Development Website" key="title" />
      </Head>
      <PortfolioHeader />

      <PortfolioHero />

      <Footer />
    </>
  );
}
