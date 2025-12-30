import React from "react";
import "./_style/resume.css";

export default function Resume() {
    return (
        <main className="relative max-w-5xl mx-auto px-6 py-12 md:py-20 font-sans text-foreground overflow-hidden min-h-screen">
            {/* Background Profile Image with Fade Effect */}
            <div className="absolute top-[10px] right-0 w-full h-full pointer-events-none z-0 opacity-50 md:opacity-70">
                <div
                    className="w-full h-full bg-[linear-gradient(to_top,var(--background)_0%,transparent_50%),url('/profile/me_2.png')] bg-no-repeat bg-right-top bg-resize"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 50%)',
                        maskImage: 'linear-gradient(to top, transparent 0%, black 50%)'
                    }}
                ></div>
            </div>

            <div className="relative z-10">
                {/* Header Section */}
                <header className="mb-12 border-b border-border pb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 primary-text tracking-tight text-outline">Emmanuel Pedroza</h1>
                    <p className="text-xl md:text-2xl font-semibold mb-6 sub-text italic text-outline">
                        Software Developer Student at SAIT | Aspiring Full-Stack Developer | Web & Android Developer
                    </p>
                    <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm md:text-base opacity-90">
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-location-dot text-primary"></i>
                            <span>Calgary, Alberta, Canada</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-phone text-primary"></i>
                            <a href="tel:+14319904804" className="hover:underline">+1 (431) 990-4804</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-envelope text-primary"></i>
                            <a href="mailto:pedrozaemmanuel16@gmail.com" className="hover:underline">pedrozaemmanuel16@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-globe text-primary"></i>
                            <a href="https://emmanuelpedroza.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-primary">emmanuelpedroza.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-brands fa-linkedin text-primary"></i>
                            <a href="https://www.linkedin.com/in/emmanuel-pedroza-931710188" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-primary">LinkedIn</a>
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <i className="fa-solid fa-user text-primary text-xl"></i>
                        Summary
                    </h2>
                    <p className="leading-relaxed secondary-text text-lg">
                        Aspiring Full-Stack Developer with 3+ years of experience in Android and Web Development. Holds a <span className="font-bold">Bachelor of Science in Information and Communications Technology</span> from the University of San Carlos and is currently pursuing a <span className="font-bold">Software Development Diploma at SAIT</span>. Passionate about solving real-world problems through technology and continuously expanding technical expertise.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <i className="fa-solid fa-gears text-primary text-xl"></i>
                        Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface/30 backdrop-blur-sm border border-border p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-4 sub-text uppercase tracking-wider border-b border-border/50 pb-2">Technical Skills</h3>
                            <ul className="space-y-3">
                                <li><span className="font-bold">Languages:</span> Java, Kotlin, Python, PHP, JavaScript, C#</li>
                                <li><span className="font-bold">Frameworks:</span> React, React Native, Expo, Next.js, Flask, Laravel</li>
                                <li><span className="font-bold">Databases:</span> MySQL, PostgreSQL, PL/SQL</li>
                                <li><span className="font-bold">Tools:</span> Docker, GitHub, Jira, Figma</li>
                                <li><span className="font-bold">Other:</span> REST APIs, Agile Development, Virtual Machines (VMs)</li>
                            </ul>
                        </div>
                        <div className="bg-surface/30 backdrop-blur-sm border border-border p-6 rounded-2xl">
                            <h3 className="text-lg font-bold mb-4 sub-text uppercase tracking-wider border-b border-border/50 pb-2">Professional Skills</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    "Effective Communication", "Problem Solving", "Time Management",
                                    "Adaptability", "Team Collaboration", "Attention to Detail",
                                    "Critical Thinking", "Project Organization"
                                ].map(skill => (
                                    <div key={skill} className="flex items-center gap-2 text-sm">
                                        <i className="fa-solid fa-check text-green-500 text-[10px]"></i>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Projects */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <i className="fa-solid fa-code text-primary text-xl"></i>
                                Projects
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Personal Website</h3>
                                    <a href="https://github.com/mand0ng/personal-website" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline mb-2 block">
                                        github.com/mand0ng/personal-website
                                    </a>
                                    <p className="text-sm secondary-text mb-2">Responsive web application designed to showcase personality, knowledge, and experiences. Built using <span className="font-bold">Next.js, Flask, PostgreSQL, Socket.IO, and Express.js</span></p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Fitness Web App</h3>
                                    <a href="https://fitness-app.emmanuelpedroza.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline mb-2 block">
                                        fitness-app.emmanuelpedroza.com
                                    </a>
                                    <ul className="list-disc pl-5 text-sm secondary-text space-y-1">
                                        <li>AI-powered fitness application that generates personalized <span className="font-bold">30-day workout plans</span></li>
                                        <li>Analyzes user metrics such as weight, height, age, and fitness level</li>
                                        <li>Produces progressive training regimens with proper load management for optimal results</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Liquor Sign Maker</h3>
                                    <a href="https://liqour-sign-maker.emmanuelpedroza.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline mb-2 block">
                                        liqour-sign-maker.emmanuelpedroza.com
                                    </a>
                                    <ul className="list-disc pl-5 text-sm secondary-text space-y-1">
                                        <li>AI-powered tool that automates the creation of professional liquor signage</li>
                                        <li>Users upload an image; the system generates dynamic designs by outputting <span className="font-bold">live React code</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Work Experience */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <i className="fa-solid fa-briefcase text-primary text-xl"></i>
                                Professional Experience
                            </h2>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
                                <div className="ml-8 mb-8 relative">
                                    <div className="absolute left-[-36px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-sm" />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold">Android Developer / Forty Degrees Celsius Inc.</h3>
                                        <span className="text-sm font-semibold opacity-70 italic">Jun 2020 – Nov 2023</span>
                                    </div>
                                    <ul className="list-disc pl-5 text-sm secondary-text space-y-1">
                                        <li>Maintained a streaming app for the Japanese market</li>
                                        <li>Reduced app crashes by <span className="font-bold">30%</span> using Firebase Crashlytics</li>
                                        <li>Implemented new UI and Bluetooth features for Android 12 compatibility</li>
                                    </ul>
                                </div>
                                <div className="ml-8 mb-8 relative">
                                    <div className="absolute left-[-36px] top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-sm" />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold">Web Developer / Time River Design Inc.</h3>
                                        <span className="text-sm font-semibold opacity-70 italic">Jul 2019 – Mar 2020</span>
                                    </div>
                                    <ul className="list-disc pl-5 text-sm secondary-text space-y-1">
                                        <li>Developed custom front-end components using HTML, CSS, and JavaScript</li>
                                        <li>Optimized WordPress site performance, reducing load time by <span className="font-bold">25%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-12">
                        {/* Education */}
                        <section>
                            <h2 className="text-xl font-bold mb-6 border-b border-border pb-2 uppercase tracking-wide">Education</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-base">Diploma in Software Development</h3>
                                    <p className="text-sm sub-text italic">SAIT, Calgary, AB</p>
                                    <p className="text-xs font-bold opacity-60">2025 – 2027 (Ongoing)</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-base">BS in ICT</h3>
                                    <p className="text-sm sub-text italic">University of San Carlos</p>
                                    <p className="text-xs font-bold opacity-60">2013 – 2019</p>
                                </div>
                            </div>
                        </section>

                        {/* Additional Experience */}
                        <section>
                            <h2 className="text-xl font-bold mb-6 border-b border-border pb-2 uppercase tracking-wide">Additional Experience</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-sm">Deerpoint Liquor Store</h3>
                                    <p className="text-xs opacity-70 italic">Cashier / Stock Associate (Current)</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">London Drugs</h3>
                                    <p className="text-xs opacity-70 italic">Customer Service Staff (2024)</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Seafood City</h3>
                                    <p className="text-xs opacity-70 italic">Grill City Staff (2023 – 2024)</p>
                                </div>
                            </div>
                        </section>

                        {/* Volunteer */}
                        <section>
                            <h2 className="text-xl font-bold mb-6 border-b border-border pb-2 uppercase tracking-wide">Volunteer</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-sm">SAIT – CTF Cybersecurity</h4>
                                    <p className="text-xs opacity-70 italic">Assistant Organizer (2025)</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">USC – Technical Support</h4>
                                    <p className="text-xs opacity-70 italic">Library Assistant (2017 – 2019)</p>
                                </div>
                            </div>
                        </section>

                        {/* References */}
                        <section className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                            <h2 className="text-xl font-bold mb-6 border-b border-border pb-2 uppercase tracking-wide">References</h2>
                            <div className="space-y-4 text-xs">
                                <div>
                                    <p className="font-bold">Therese Pabroa</p>
                                    <p className="opacity-70">QA, Grifols Plasma Center</p>
                                    <p>204-894-1734 | theresezia16@gmail.com</p>
                                </div>
                                <div>
                                    <p className="font-bold">Lovely Goosen</p>
                                    <p className="opacity-70">Junior Accountant, Dark Bryant LLP</p>
                                    <p>403-618-6918 | lovelygoosen@gmail.com</p>
                                </div>
                                <div>
                                    <p className="font-bold">Susan Garvez</p>
                                    <p className="opacity-70">Associate Financial Adviser, CIBC</p>
                                    <p>403-974-6352 | Susan.Garvez@cibc.com</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
