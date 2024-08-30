import Link from "next/link";

export default function Testimonies() {
    return (
        <div id="testimoniesSection" className="w-full">
            <div id="testimoniesContainer"
                className="max-w-[800px] py-10 mx-auto bg-backgroundColor text-secondaryColor"
            >
                <div id="testimoniesHeadContainer">
                    <h3>Testimonies</h3>
                </div>
                {/* Testimonies Header */}

                <div id="testimoniesBodyContainer"
                    className="flex flex-col gap-2 justify-center items-center mt-10 md:flex-row md:gap-10"
                >
                    <div id="testimoniesImgContainer" className="max-w-52">
                        <img
                            src="https://josephcroft-website.s3.amazonaws.com/Hero_Image.webp"
                            alt="Two business men shaking hands over a website development job"
                            id="about-me-img"
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <h4 className="mb-2">Website Company Name</h4>

                        <div className="flex gap-2 mb-5">
                            <div className="min-w-2 min-h-full bg-secondaryColor/50"></div>
                            <p className=" code">
                                This is the testimonial from the customer.
                            </p>
                        </div>

                        <Link href={"/"} className="flex gap-1 hover:text-primaryColor transition-all">
                            Check it out
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* Testimonies Body */}

            </div>
        </div>
    )
}
