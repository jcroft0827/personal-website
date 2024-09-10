import Link from "next/link";

export default function AboutMeHero() {
    return (
        <div
            id="about-me-hero-section"
            className="w-full bg-secondaryColor text-accentColor"
        >
            <div
                id="about-me-hero-container"
                className="max-w-[64rem] mx-auto flex flex-col text-center items-center p-5"
            >
                <h1 className="text-4xl">
                    About Me
                </h1>
                <h2
                    className="text-primaryColor text-3xl mb-5"
                >
                    Crafting Digital Experiences
                </h2>
                <p
                    className="text-lg md:text-xl mb-5"
                >
                    Hello there! I'm Joseph Croft, a passionate freelance web designer, and developer with a mission to transform ideas into stunning digital realities. With a blend of creativity, technical prowess, and an eye for detail, I'm dedicated to creating websites that not only look great but also perform flawlessly.
                </p>
                <Link
                    className="btn btn-primary md:max-w-[32rem]"
                    href="#footerSection"
                    scroll={false}
                >
                    Let's Chat
                </Link>
            </div>
        </div>
    )
}
