import React, { useState } from 'react'

export default function PortfolioHero() {

    const [support, setSupport] = useState(false);
    const [software, setSoftware] = useState(false);
    const [web, setWeb] = useState(false);

    return (
        <section
            className='w-full bg-secondaryColor py-5 px-5'
        >
            <div
                className='max-w-[60rem] mx-auto border-2 border-accentColor shadow-lg shadow-black bg-secondaryColor rounded-lg p-5'
            >
                <div className='flex gap-5 items-center mb-5 md:flex-col md:mb-10'>

                    {/* Image */}
                    <div className='w-44 h-44 border-4 rounded-full overflow-hidden transition-all hover:border-accentColor'>
                        <img
                            src="https://josephcroft-website.s3.us-east-1.amazonaws.com/JosephCroft_Vector_2.png"
                            alt='Image of Joseph Croft'
                            className='rounded-full w-full h-full pt-3 object-cover transition-all hover:scale-110'
                        />
                    </div>

                    {/* Information */}
                    <div className='flex flex-col gap-2 text-lg text-accentColor md:flex-row md:gap-5 md:text-xl'>
                        <a href='tel:7165660673' target="_blank" className='flex gap-2 items-center hover:text-primaryColor'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>

                            <span>
                                716-566-0673
                            </span>
                        </a>

                        <a href='mailto:jcroft0827@gmail.com' target="_blank" className='flex gap-2 items-center hover:text-primaryColor'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <span>
                                jcroft0827@gmail.com
                            </span>
                        </a>

                        <a href='https://josephcroft-website.s3.us-east-1.amazonaws.com/JosephCroft_Resume_2025.pdf' target="_blank" className='flex gap-2 items-center hover:text-primaryColor'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            <span>
                                Resume
                            </span>
                        </a>

                        <a href='https://github.com/jcroft0827' target="_blank" className='flex gap-2 items-center hover:text-primaryColor'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" stroke='currentColor'>
                                <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                            </svg>

                            <span>
                                Github
                            </span>
                        </a>
                    </div>
                
                </div>

                {/* About Me Blurb */}
                <div className='max-w-[40rem] mx-auto mb-10 text-accentColor'>
                    <p className='text-center'>
                        Hi, I'm Joseph Croft, an experienced IT Support Specialist with 8 years in the field, a junior software developer with a passion for coding, and a junior web developer with 4 years of personal experience creating responsive, user-friendly websites. I'm actively seeking an advanced IT Support role or an entry-level position in software or web development.
                    </p>
                </div>

                {/* Specialties */}
                <div>
                    {/* IT Support Specialist */}
                    <div className='mb-2'>
                        <button
                            onClick={() => {
                                if (support) {
                                    setSupport(false);
                                } else {
                                    setSupport(true);
                                    setSoftware(false);
                                    setWeb(false);
                                }
                            }}
                            className={(support ? 'text-primaryColor' : 'text-black') + ' flex justify-between items-center w-full mb-5'}
                        >
                            <h2>IT Support Specialist & Sales Representative</h2>
                            <span>
                                {support ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                }
                            </span>
                        </button>

                        <div
                            className={(support ? "flex" : "hidden") + ' flex-col gap-2 text-accentColor text-center max-w-[50rem] md:text-start'}
                        >
                            <p className='italic text-lg mb-2'>
                                The Floral POS | Remote | 8 Years
                            </p>
                            <p>
                                As a dedicated IT Support Specialist and Sales Representative for The Floral POS, I provide exceptional support and service to florists across the country, ensuring seamless operations of their businesses. My role involves troubleshooting and resolving issues related to printers, credit card processors, networks, and Windows computers, often acting as the go-to resource for technical guidance.
                            </p>
                            <p>
                                I’m often required to run scripts and dig through the MySQL database The Floral POS is built on top of to find and fix data for the florists. In addition, I collaborated with customers via phone and email to support and sell The Floral POS software, combining technical knowledge with strong communication skills to build lasting client relationships.
                            </p>
                            <p>
                                Beyond IT support, I played a key role in collections and account management, balancing technical problem-solving with a customer-first approach to ensure satisfaction and retention. My experience reflects a commitment to providing top-tier service, solving complex technical challenges, and driving success for both clients and the company.
                            </p>
                        </div>
                    </div>

                    {/* Software Developer */}
                    <div className='mb-2'>
                        <button
                            onClick={() => {
                                if (software) {
                                    setSoftware(false);
                                } else {
                                    setSoftware(true);
                                    setSupport(false);
                                    setWeb(false);
                                }
                            }}
                            className={(software ? 'text-primaryColor' : 'text-black') + ' flex justify-between mb-5 w-full items-center'}
                        >
                            <h2>Software Development Enthusiast</h2>
                            <span>
                                {software ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                }
                            </span>
                        </button>

                        <div
                            className={(software ? "flex" : "hidden") + ' flex-col gap-2 text-accentColor text-center max-w-[50rem] md:text-start'}
                        >
                            <p className='italic text-lg mb-2'>
                                School | Personal Projects | 8 Years
                            </p>
                            <p>
                                With a strong foundation in software development gained through academic studies and personal projects, I’ve been exploring and refining my skills in programming and application development for over eight years. During my pursuit of an Associate’s and Bachelor’s degree, I worked extensively with VB.NET, C#, Python, and Java, completing projects that honed both my technical abilities and problem-solving skills.
                            </p>
                            <p>
                                Beyond academics, I’ve taken my passion for software development into the real world by working on side projects like The Tattoo POS, a nearly complete point-of-sale software tailored for tattoo studios. This project allowed me to apply my knowledge of VB.NET and MySQL to create functional, user-focused solutions.
                            </p>
                            <p>
                                Though I haven’t worked professionally in software development, my dedication to learning and practical application reflects a genuine passion for creating software that solves real-world problems. I’m continually advancing my skills to bring innovative and effective solutions to the table.
                            </p>
                        </div>
                    </div>

                    {/* Web Developer */}
                    <div className='mb-2'>
                        <button
                            onClick={() => {
                                if (web) {
                                    setWeb(false);
                                } else {
                                    setWeb(true);
                                    setSupport(false);
                                    setSoftware(false);
                                }
                            }}
                            className={(web ? 'text-primaryColor' : 'text-black') + ' flex justify-between mb-5 w-full items-center'}
                        >
                            <h2>Web Development Experience</h2>
                            <span>
                                {web ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                }
                            </span>
                        </button>

                        <div
                            className={(web ? "flex" : "hidden") + ' flex-col gap-2 text-accentColor text-center max-w-[50rem] md:text-start'}
                        >
                            <p className='italic text-lg mb-2'>
                                School | Personal Projects | 4 Years
                            </p>
                            <p>
                                Over the past four years, I have been honing my skills in web development by working on various small projects and learning modern web technologies such as Next.js, JavaScript, HTML, CSS, TailwindCSS, and the DOM. Additionally, I have gained foundational knowledge in SEO principles to enhance website visibility and performance.
                            </p>
                            <p>
                                Currently, I am developing an Admin Panel tailored for florist websites. This innovative solution is designed to serve as a standardized backend for multiple clients, with customizable front-end stores to meet each florist's unique needs. My work on this project demonstrates my ability to create scalable and efficient systems, aligning with my long-term goal of becoming a professional web developer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
