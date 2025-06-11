import Head from "next/head";
import Image from "next/image";
// import { useState } from "react";
// import { Document, Page } from 'react-pdf';

export default function Resume() {

    // const [numPages, setNumPages] = useState();
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // };

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

            <div>
                <div>
                    <h1>My Resume</h1>
                    <div className="flex justify-center">
                        <Image
                            src="https://josephcroft-website.s3.us-east-1.amazonaws.com/JosephCroft_Resume_2025.png"
                            alt="Joseph Croft's Resume"
                            width={600}
                            height={800}
                            style={{ objectFit: 'contain' }}
                            className="shadow-xl"
                        />
                    </div>
                    {/* <div>
                        <Document 
                            file="https://josephcroft-website.s3.us-east-1.amazonaws.com/JosephCroft_Resume_2025.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </div> */}
                </div>
            </div>
        </>
    )
}
