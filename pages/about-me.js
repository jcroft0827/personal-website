import AboutMeBody from "@/components/AboutMeBody";
import AboutMeHero from "@/components/AboutMeHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function AboutMe() {
  return (
    <div
      id="about-me-body"
      className="bg-backgroundColor text-secondaryColor scroll-smooth"
    >
      <Head>
        <title>Joseph Croft - About Me</title>
        <meta property="og:title" content="Joseph Croft - About Me" key="title" />
      </Head>
      <Header />
      <AboutMeHero />
      <AboutMeBody />
      <Footer />
    </div>
  )
}
