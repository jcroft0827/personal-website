import Link from "next/link";
import { useState } from "react";


export default function Header() {

    const [open, setOpen] = useState(false);

    // Function to open the mobile nav
    function hamburgerClick() {
        setOpen(true);
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    // Used to style the nav links and distinguish between an inactive and active state
    const inactiveLink = "p-5 transition-all border-b border-secondaryColor/50 sm:p-0 sm:border-b-0 sm:hover:text-primaryColor";
    const activeLink = inactiveLink + " text-primaryColor";

    return (
        <div 
            id="headerSection" 
            className="position-fixed sticky top-0 left-0 right-0 bg-secondaryColor text-accentColor max-h-8"
        >
            <div 
                id="headerContainer" 
                className="w-full flex justify-between items-center px-5 py-1"
            >

                <Link href={'/'}>
                    <img src="https://josephcroft-website.s3.amazonaws.com/new_logo.webp" alt="Joseph Croft's Logo" className="w-6"/>
                </Link>

                <nav className="hidden sm:flex gap-4 tracking-wider uppercase">
                    <div id="headerNavLinkContainer" className="flex gap-4">
                        <Link href={"/"} className={inactiveLink}>About Me</Link>
                        <Link href={"/"} className={inactiveLink}>Blogs</Link>
                    </div>
                    <div id="divider" className="min-w-[.1rem] bg-primaryColor max-h-[1.5rem]"></div>
                    <div id="header-contact-container">
                        <a href="tel:7165660673" className="transition-all hover:text-primaryColor">716-566-0673</a>
                    </div>
                </nav>
                {/* Desktop Nav */}

                <button onClick={() => hamburgerClick()} className="flex flex-col ml-auto gap-[.3rem] py-2 px-3 relative z-20 sm:hidden">
                    <div className={(open ? "rotate-45 translate-y-[.4rem]" : "rotate-0 translate-y-0") + " min-w-5 min-h-[.09rem] bg-accentColor transition-all ease-in"}></div>
                    <div className={(open ? "hidden" : "block") + " min-w-5 min-h-[.05rem] bg-accentColor transition-all"}></div>
                    <div className={(open ? "-rotate-45" : "rotate-0") + " min-w-5 min-h-[.04rem] bg-accentColor transition-all ease-in"}></div>
                </button>
                {/* Mobile Hamburger Button */}

                <div className={(open ? "left-0" : "-left-full") + " absolute top-0 bottom-0 min-w-full min-h-screen flex flex-col transition-all ease-linear bg-primaryColor"}>
                    <div id="mobile-nav-link-container" className="flex flex-col mt-11">
                        <Link href={"/"} className={inactiveLink}>About Me</Link>
                        <Link href={"/"} className={inactiveLink}>Blogs</Link>
                    </div>
                    <div id="mobile-contact-container">
                        <a href="tel:7165660673" className={(inactiveLink + " flex items-end gap-1 border-b-0")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            716-566-0673
                        </a>
                    </div>
                </div>
                {/* Mobile Nav */}

            </div>
        </div>
    )

}
