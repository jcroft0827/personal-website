import Footer from "@/components/Footer";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioHero from "@/components/PortfolioHero";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });


export default function Portfolio() {
    return (
        <>
            <Head>
                {/* Title */}
                <title>Joseph Croft - IT Support Specialist and Aspiring Software Developer</title>
                <meta
                    name="description"
                    content="Showcasing Joseph Croft's portfolio as an IT Support Specialist with 8 years of experience, a skilled software developer with 8 years of academic and personal projects, and a web developer with 4 years of expertise. Open to advanced IT Support roles and entry-level software or web development positions."
                />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Joseph Croft - IT Support Specialist and Aspiring Software Developer"
                />
                <meta
                    property="og:description"
                    content="Explore Joseph Croft's professional portfolio, featuring 8 years of IT Support experience, 4 years in sales at The Floral POS, and expertise in software and web development. Seeking advanced IT Support roles or entry-level software/web development opportunities."
                />
                <meta property="og:image" content="https://josephcroft.com/og-image.jpg" /> {/* Replace with an actual image */}
                <meta property="og:url" content="https://josephcroft.com" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta
                    name="twitter:title"
                    content="Joseph Croft - IT Support Specialist and Aspiring Software Developer"
                />
                <meta
                    name="twitter:description"
                    content="Explore Joseph Croft's professional portfolio, featuring 8 years of IT Support experience, 4 years in sales at The Floral POS, and expertise in software and web development. Seeking advanced IT Support roles or entry-level software/web development opportunities."
                />
                <meta name="twitter:image" content="https://josephcroft.com/twitter-image.jpg" /> {/* Replace with an actual image */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="Joseph Croft, IT Support Specialist, software development, web development, IT Support roles, entry-level software developer, entry-level web developer, professional portfolio"
                />

                {/* Viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
            </Head>

            <PortfolioHeader />

            <PortfolioHero />

            <Footer />
        </>
    );
}