import Link from "next/link";

export default function AboutMeSection() {
    return (
        <div id="about-me-section" className="w-full my-5 bg-backgroundColor">
            <div id="about-me-wrapper" className="px-4 md:px-0">

                <div id="about-me-header">
                    <h3>About Me</h3>
                </div>
                {/* About Me Header */}

                <div id="about-me-body"
                    className="bg-secondaryColor text-accentColor md:max-w-[32rem] lg:max-w-[64rem] mx-auto rounded-sm"
                >
                    <div id="about-me-body-wrapper"
                        className="flex flex-col justify-around items-center p-4 lg:flex-row"
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <div id="about-me-img-wrapper"
                                className="rounded-sm border border-accentColor overflow-hidden flex items-end mx-auto md:mx-0 sm:rounded-full sm:w-52 sm:h-52"
                            >
                                <img
                                    src="https://josephcroft-website.s3.amazonaws.com/Hero_Image.webp"
                                    alt="Two business men shaking hands over a website development job"
                                    id="about-me-img"
                                    className="w-full"
                                />
                            </div>
                            {/* About Me Image Wrapper */}

                            <div id="about-me-info-wrapper"
                                className="flex flex-col mb-10 mx-auto md:mx-0 lg:mb-0"
                            >
                                <div className="flex flex-row gap-5 md:flex-col">
                                    <div id="about-me-info-head-wrapper">
                                        <h4 className="tracking-wide -mb-1">Joseph Croft</h4>
                                        <h5 className="text-primaryColor">Web Developer</h5>
                                    </div>

                                    <div id="about-me-contact-info-wrapper">
                                        <a id="about-me-phone-link"
                                            href="tel:7165660673"
                                            className="contact-link"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                            </svg>
                                            716-566-0673
                                        </a>

                                        <a id="about-me-email-link"
                                            href="mailto:jcroft@josephcroft.com"
                                            className="contact-link"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                            jcroft@josephcroft.com
                                        </a>
                                    </div>
                                </div>

                                <Link href={'/'} className="btn btn-square mt-4">Read More</Link>
                            </div>
                            {/* About Me Info Wrapper */}

                        </div>

                        <div id="about-me-text-wrapper"
                            className="flex flex-col gap-2 max-w-[450px]"
                        >
                            <p className="text-xl">
                                A dedicated freelance web designer and developer
                            </p>
                            <p>
                                <span className="text-lg text-primaryColor">My mission:</span> To elevate your online presence and drive significant business growth through cutting-edge web design and development solutions.
                            </p>
                            <p>
                                <span className="text-lg text-primaryColor">My focus:</span> Creating user-friendly, responsive, and SEO-optimized websites, I am committed to helping your business stand out in the digital landscape.
                            </p>
                        </div>
                        {/* About Me Text Wrapper */}

                    </div>
                    {/* About Me Body Wrapper */}

                </div>
                {/* About Me Body */}
            </div>
        </div>
    )
}
