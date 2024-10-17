import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextLayout from "@/components/TextLayout";

export default function PrivacyPolicy() {

    const headTwo = 'text-lg font-bold text-left';
    const listItem = 'text-lg font-normal text-secondaryColor tracking-normal';


    return (
        <>
            <Header />
            <TextLayout>
                <div className="text-center mb-5">
                    <h1 className="mb-2">Privacy Policy</h1>
                    <p className="font-semibold text-xl">
                        Effective Date: 9/11/2024
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-lg text-center">
                        With Joseph Croft, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.
                    </p>

                    <div>
                        <h2 className={headTwo}>
                            Information We Collect
                        </h2>
                        <ul>
                            <li className={listItem}>
                                <b>Personal Information:</b> We may collect your name, email address, phone number, and other details when you fill out forms or contact us.
                            </li>
                            <li className={listItem}>
                                <b>Usage Data:</b> Information about how you use our website, such as your IP address, browser type, and pages visited.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            How We Use Your Information
                        </h2>
                        <p>
                            We use the collected information to:
                        </p>
                        <ul>
                            <li className={listItem}>
                                Provide and improve our services.
                            </li>
                            <li className={listItem}>
                                Respond to your inquiries.
                            </li>
                            <li className={listItem}>
                                Send marketing and promotional communications (with your consent).
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Cookies
                        </h2>
                        <p>
                            We use cookies to enhance your experience on our website. You can control the use of cookies through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Data Security
                        </h2>
                        <p>
                            We take reasonable measures to protect your information, but we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Third-Party Links
                        </h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Your Rights
                        </h2>
                        <p>
                            You may request access to, correction, or deletion of your personal information by contacting us.
                        </p>
                    </div>

                    <div>
                        <h2 className={headTwo}>
                            Contact Us

                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:
                            <b> jcroft@josephcroft.com</b>
                        </p>
                    </div>

                </div>
            </TextLayout>
            <Footer />
        </>

    )
}
