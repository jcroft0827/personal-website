import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextLayout from "@/components/TextLayout";

export default function TermsOfService() {

    const headTwo = 'text-lg font-bold text-left';
    const listItem = 'text-lg font-normal text-secondaryColor tracking-normal';

    return (
        <>
            <Header />
            <TextLayout>
                <div className="text-center mb-5">
                    <h1 className="mb-2">Terms Of Use</h1>
                    <p className="font-semibold text-xl">
                        Effective Date: 9/11/2024
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <p className="text-lg text-center">
                        Welcome, My name is <b>Joseph Croft</b>! By accessing our website, you agree to comply with the following Terms of Use.
                    </p>

                    <div>
                        <h2 className={headTwo}>
                            Use of Our Website
                        </h2>
                        <ul>
                            <li className={listItem}>
                                You must be at least 18 years old or have permission from a parent/guardian to use our website.
                            </li>
                            <li className={listItem}>
                                You agree to use the website in a lawful manner and refrain from any unauthorized use or hacking attempts.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Intellectual Property
                        </h2>
                        <p>
                            All content, including text, images, logos, and code, is owned by Joseph Croft and may not be copied, distributed, or used without our permission.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            User-Generated Content
                        </h2>
                        <p>
                            If you submit any content (e.g., comments, feedback), you grant us a non-exclusive license to use, display, and modify that content.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Disclaimers
                        </h2>
                        <p>
                            We make no guarantees regarding the accuracy or availability of the website. The website is provided "as is," without any warranties.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Limitation of Liability
                        </h2>
                        <p>
                            Joseph Croft will not be held liable for any damages arising from your use of the website, including but not limited to data loss or service interruptions.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Changes to These Terms
                        </h2>
                        <p>
                            We reserve the right to modify these Terms of Use at any time. It is your responsibility to review the terms regularly.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions about these Terms, please contact us at:
                            <b> jcroft@josephcroft.com</b>
                        </p>
                    </div>

                </div>
            </TextLayout>
            <Footer />
        </>
    )
}
