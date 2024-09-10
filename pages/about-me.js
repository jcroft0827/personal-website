import AboutMeBody from "@/components/AboutMeBody";
import AboutMeHero from "@/components/AboutMeHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutMe() {
  return (
    <div 
      id="about-me-body" 
      className="bg-backgroundColor text-secondaryColor scroll-smooth"
    >
        <Header />
        <AboutMeHero />
        <AboutMeBody />
        <Footer />
    </div>
  )
}
