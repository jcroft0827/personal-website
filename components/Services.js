export default function Services() {
    return (
        <div id="servicesSection"
            className="bg-secondaryColor text-accentColor"
        >
            <div id="servicesContainer" className="py-10 px-10 flex flex-col items-center justify-center">
                <div>
                    <h3>Services</h3>
                </div>
                {/* Services Header */}

                <div className="max-w-[800px]">
                    
                    <div id="serviceContainer" className="service-container">
                        <h4 className="text-primaryColor">Web Development</h4>
                        <p className="text-xl">
                            I bring designs to life using cutting-edge coding languages and frameworks. Your website will be fast, secure, and fully functional across all devices.
                        </p>
                    </div>

                    <div id="serviceContainer" className="service-container">
                        <h4 className="text-primaryColor">Web Design</h4>
                        <p className="text-xl">
                            I specialize in creating visually appealing, responsive, and user-friendly designs. Whether you're starting from scratch or looking to refresh your current site, I'll craft a design that sets you apart.
                        </p>
                    </div>

                    <div id="serviceContainer" className="service-container">
                        <h4 className="text-primaryColor">Search Engine Optimization (SEO)</h4>
                        <p className="text-xl">
                            I implement SEO best practices to boost your website's visibility on search engines and drive organic traffic to your site.
                        </p>
                    </div>

                    <div id="serviceContainer" className="service-container">
                        <h4 className="text-primaryColor">Content Management</h4>
                        <p className="text-xl">
                            I integrate easy-to-use content management systems, so you can update and manage your website without hassle.
                        </p>
                    </div>

                </div>
                {/* Services Body */}

            </div>
            {/* Services Container */}
        </div>
        // Services Section
    )
}
