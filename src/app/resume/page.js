import React from "react";
import "./_style/resume.css";

export default function Resume() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8 bg-[url('/profile/me_2.png')] bg-no-repeat bg-right-top bg-resize">

            <section className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Emmanuel Pedroza</h1>
                <p>Calgary, AB</p>
                <p>+1 (431) 990-4804</p>
                <p>pedrozaemmanuel16@gmail.com</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Summary</h2>
                <p>
                    Proficient in Web and Android Application development, equipped with a Bachelors of Science in Information and Communications Technology from the University of San Carlos in the Philippines.
                    Recently relocated as a Permanent Resident to Canada, I am committed to exploring various technologies and am driven by the satisfaction of tackling practical problems through technical expertise.
                    Eager to leverage my skills and embrace new challenges within the Canadian landscape.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Education</h2>
                <div className="mb-4">
                    <h3 className="font-bold">University of San Carlos / Bachelor of Science in Information and Communications Technology </h3>
                    <p className="text-sm">2013 - 2017, Cebu, Philippines</p>
                    <p>Studied various aspects of Information Technology, gaining skills in web development, programming, and problem-solving. Involved in projects focusing on application development and system analysis.</p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-3">Experience</h2>
                <h2 className="text-xl font-bold mb-3">Professional & Software Development Experience</h2>
                <div className="ml-2 mb-4">
                    <h3 className="font-bold">Forty Degrees Celsius Inc. / Android Application Developer</h3>
                    <p className="text-sm">JUNE 2020 - NOVEMBER 2023, Cebu, Philippines</p>
                    <ul className="list-disc pl-6">
                        <li>Maintained and Updated a streaming application aimed for the Japanese market, ensuring smooth performance and user satisfaction.</li>
                        <li>Diagnosed and fixed issues reported through Firebase Crashlytics, significantly reducing app crashes and improving user experience.</li>
                        <li>Implemented innovative features, such as revamped UI designs, streamer missions, and customized in-stream gifts and stickers.</li>
                        <li>Upgraded Bluetooth functionalities to support Android 12, improving compatibility and user experience. </li>
                    </ul>
                </div>
                <div className="ml-2 mb-4">
                    <h3 className="font-bold">Time River Design Inc. / Website Developer</h3>
                    <p className="text-sm">JULY 2019 - MARCH 2020, Cebu, Philippines</p>
                    <ul className="list-disc pl-6">
                        <li>Managed and updated a WordPress website for Japanese models, ensuring up-to-date content and functionality.</li>
                        <li>Added functionalities such as search filters and optimized pagination of data, reducing loading times and improving user experience.loading times.</li>
                        <li>Designed and developed custom front-end components using HTML, CSS, and JavaScript, ensuring an intuitive user interface and enhanced usability.</li>
                    </ul>
                </div>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">Technology Stack</h2>
                <ul className="list-disc pl-6">
                    <li>Web Development:</li>
                    <ul className="list-disc pl-6">
                        <li>Front-end: HTML, CSS, WordPress, JavaScript, jQuery, Angular.js, Vue.js, React, Next.js</li>
                        <li>Back-End: PHP, CodeIgniter, Laravel, CakePHP, Python, Flask, MySQL, SQLite, PostgreSQL</li>
                    </ul>
                    <li>Android Development:</li>
                    <ul className="list-disc pl-6">
                        <li>Java, Kotlin, Android Studio, XML, Lottie Files</li>
                    </ul>
                    <li>DevOps & Tools:</li>
                    <ul className="list-disc pl-6">
                        <li>Platforms: Docker, VirtualBox, GitHub, Jira, Adobe XD, Figma, Digital Ocean, Google Console</li>
                    </ul>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-3">Work & Volunteer Experience</h2>
                <div className="ml-1 mb-4">
                    <h3 className="font-bold">Seafood City Winnipeg / Grill City Staff</h3>
                    <p className="text-sm">November 2023 - March 2024, Winnipeg, Canada</p>
                    <ul className="list-disc pl-6">
                        <li>Skillfully cooking a variety of grilled items, meticulously prepared and packed customer orders while maintaining cleanliness and sanitation of workspace and equipment.</li>
                        <li>Assisted in produce packing to ensure freshness and quality, while also restocking supplies and managing inventory levels to maintain optimal stock levels for smooth operation.</li>
                        <li>Provided accurate and efficient cashier services and served customers in a friendly manner, ensuring a positive dining experience.</li>
                    </ul>
                </div>
                <div className="ml-1 mb-4">
                    <h3 className="font-bold">Library Staff / Technical Support Staff</h3>
                    <p className="text-sm">2017-2019, University of San Carlos (Part-time/Student)</p>
                    <ul className="list-disc pl-6">
                        <li>Assisted students in checking out & book returns.</li>
                        <li>Assisted students/teachers in any technical questions or any troubleshooting required in library’s computer system.</li>
                        <li>Assisted students in document editing, printing, and photocopying.</li>
                        <li>Maintained clean area in computer and other library areas.</li>
                    </ul>
                </div>
            </section>

            



        </main>
    );
}
