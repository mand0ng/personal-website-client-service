import React from "react";

export default function Contact() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[70vh] animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 primary-text text-center tracking-tight">
                Let's Get In Touch
            </h1>
            <p className="text-lg secondary-text text-center mb-12 max-w-2xl">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
                Feel free to reach out through any of these channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <a
                    href="mailto:pedrozaemmanuel16@gmail.com"
                    className="flex items-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i className="fa-solid fa-envelope text-xl"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold sub-text uppercase tracking-widest mb-1">Email Me</p>
                        <p className="font-semibold primary-text">pedrozaemmanuel16@gmail.com</p>
                    </div>
                </a>

                <a
                    href="tel:+14319904804"
                    className="flex items-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i className="fa-solid fa-phone text-xl"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold sub-text uppercase tracking-widest mb-1">Call Me</p>
                        <p className="font-semibold primary-text">+1 (431) 990-4804</p>
                    </div>
                </a>

                <div className="flex items-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <i className="fa-solid fa-location-dot text-xl text-primary"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold sub-text uppercase tracking-widest mb-1">Location</p>
                        <p className="font-semibold primary-text">Calgary, Alberta, Canada</p>
                    </div>
                </div>

                <a
                    href="https://emmanuelpedroza.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i className="fa-solid fa-globe text-xl"></i>
                    </div>
                    <div>
                        <p className="text-xs font-bold sub-text uppercase tracking-widest mb-1">Portfolio</p>
                        <p className="font-semibold primary-text">emmanuelpedroza.com</p>
                    </div>
                </a>
            </div>

            <div className="mt-16 flex gap-6">
                <a href="https://github.com/mand0ng" target="_blank" rel="noopener noreferrer" className="text-3xl secondary-text hover:text-primary transition-colors">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-pedroza-931710188" target="_blank" rel="noopener noreferrer" className="text-3xl secondary-text hover:text-primary transition-colors">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/_man_ding_/" target="_blank" rel="noopener noreferrer" className="text-3xl secondary-text hover:text-primary transition-colors">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </main>
    );
}
