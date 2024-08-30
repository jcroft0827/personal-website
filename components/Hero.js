import Link from "next/link";

export default function Hero() {
    return (
        <div id="hero-section" className="bg-gradient-to-b from-secondaryColor to-backgroundColor from-70% min-h-[75vh] text-accentColor">

            <div id="heroContainer" className="max-w-[1024px] mx-auto pb-10">

                <div id="hero-inner-head-wrapper" className="mb-20">
                    <h1 id="home-h1">Joseph Croft</h1>
                    <h2 id="home-h2" className="text-primaryColor">Web Developer</h2>
                </div>
                {/* Hero Header */}

                <div
                    id="hero-inner-body-wrapper"
                    className="flex flex-col gap-5 w-full px-5"
                >

                    <div className="flex flex-col justify-center items-center gap-5 w-full md:flex-row">
                        <div className="flex flex-col w-full items-center md:items-start md:w-1/2">
                            <div>
                                <p className="text-3xl mb-5 font-semibold text-accentColor">
                                    Ready to...
                                </p>
                                <ul>
                                    <li>
                                        Transform your online presence?
                                    </li>
                                    <li>
                                        Stand out online?
                                    </li>
                                    <li>
                                        Accelerate your business growth?
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:w-1/2 max-w-96">
                            <img
                                src="https://josephcroft-website.s3.amazonaws.com/Hero_Image.webp"
                                alt="Two business men shaking hands over a website development job"
                                className="w-full"
                            />
                        </div>
                    </div>
                    {/* Hero Body Top */}

                    <div className="w-full flex flex-col gap-5 justify-center">
                            <div>
                                <p className="text-accentColor text-2xl max-w-lg text-center mx-auto">
                                    <span className="italic transition-all hover:text-primaryColor">
                                        <Link href="/">Contact me</Link>
                                    </span> for expert web development, SEO optimization, & responsive design.
                                </p>
                            </div>
                        <Link href={"/"} className="btn btn-primary">
                            Let's Connect
                        </Link>
                    </div>
                    {/* Hero Body Bottom */}

                </div>
                {/* Hero Body */}

            </div>

        </div>
    )
}
