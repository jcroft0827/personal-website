import Link from "next/link";
import { easeIn, easeInOut, motion } from 'framer-motion';

export default function Hero() {

    // Animation Variables
    const loadUp = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0, opacity: 1, transition: {
                easeIn,
                delay: .2
            }
        },
    };

    const loadOpacity = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1, transition: {
                easeInOut,
                delay: .2
            }
        },
    };

    const loadLeftSide = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0, opacity: 1, transition: {
                easeIn,
                delay: .2
            }
        },
    };

    const loadRightSide = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0, opacity: 1, transition: {
                easeInOut,
                delay: .2
            }
        },
    };


    return (
        <div id="hero-section" className="bg-gradient-to-b from-secondaryColor to-backgroundColor from-70% min-h-[75vh] text-accentColor">

            <div id="heroContainer" className="max-w-[1024px] mx-auto pb-10">

                <div
                    id="hero-inner-head-wrapper"
                    className="mb-20 px-5"
                >
                    <div>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={loadUp}
                        >
                            Joseph Croft
                        </motion.h1>

                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={loadUp}
                            className="text-primaryColor"
                        >
                            Web Developer
                        </motion.h2>
                    </div>
                </div>
                {/* Hero Header */}

                <div
                    id="hero-inner-body-wrapper"
                    className="flex flex-col gap-5 w-full px-5"
                >

                    <div
                        className="flex flex-col justify-center px-5 md:px-0 items-center gap-5 w-full md:flex-row"
                    >
                        <div
                            className="flex flex-col w-full items-center md:items-start md:w-1/2"
                        >
                            <div>
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={loadOpacity}
                                    className="text-3xl mb-5 font-semibold text-accentColor"
                                >
                                    Ready to...
                                </motion.p>

                                <motion.ul
                                    initial="hidden" animate="visible"
                                >
                                    <motion.li variants={loadLeftSide}>
                                        Transform your online presence?
                                    </motion.li>
                                    <motion.li variants={loadLeftSide}>
                                        Stand out online?
                                    </motion.li>
                                    <motion.li variants={loadLeftSide}>
                                        Accelerate your business growth?
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={loadRightSide}
                            className="sm:w-1/2 max-w-96"
                        >
                            <img
                                src="https://josephcroft-website.s3.amazonaws.com/Hero_Image.webp"
                                alt="Two business men shaking hands over a website development job"
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                    {/* Hero Body Top */}

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={loadUp}
                        className="w-full flex flex-col gap-5 justify-center"
                    >
                        <div>
                            <p className="text-accentColor text-2xl max-w-lg text-center mx-auto">
                                <span className="italic transition-all hover:text-primaryColor">
                                    <Link href="/">Contact me</Link>
                                </span> for expert web development, SEO optimization, & responsive design.
                            </p>
                        </div>
                        <Link href={"#footerSection"} className="btn btn-primary" scroll={false}>
                            Let's Connect
                        </Link>
                    </motion.div>
                    {/* Hero Body Bottom */}

                </div>
                {/* Hero Body */}
            </div>
        </div>
    )
}
