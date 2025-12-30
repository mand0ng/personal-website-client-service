"use client"
import "./_styles/home.css";
import { useState } from "react";
import Link from "next/link";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";

export default function Home() {

  const imageCount = 12;
  const imageRange = Array.from({ length: imageCount }, (_, index) => index + 1);
  const [info, setInfo] = useState("education");

  return (
    <main className="theme-container">
      <div className="">
        <div className="max-w-7xl mx-auto items-center mt-7 z-10 py-5">
          <section className="greetings-content">
            <span className="">Hi I'm</span>
            <span className="font-bold text-lg primary-text"> Emmanuel!</span>
            <span>👋</span>
          </section>
          <section className="body-content p-5 lg:p-10 text-sm md:text-base">
            <p className="secondary-text">
              A passionate <span className="font-bold">Information Communications Technology</span> graduate of the {" "}
              <span className="btn rounded bg-button align-middle p-0.5">
                <img src="/profile/usc-logo.png" alt="USC Logo" className="w-5 h-5 mr-2 inline-block" />
                <a
                  className="underline underline-offset-2 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://usc.edu.ph/catholic-educational-institution-academics/departments/department-of-computer-information-sciences-and-mathematics#:~:text=Information%20and%20Communications%20Technology">
                  University of San Carlos
                </a>
              </span> in the Philippines, and currently a student at the {" "}
              <span className="btn rounded bg-button align-middle p-0.5">
                <span className="btn rounded bg-button align-middle p-0.5">
                  <img src="/profile/sait.png" alt="SAIT Logo" className="w-5 h-5 mr-2 inline-block" />
                  <a
                    className="underline underline-offset-2 font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.sait.ca/programs-and-courses/diplomas/software-development">
                    Southern Alberta Institute of Technology
                  </a>
                </span>.
              </span> {" "}
              taking up <span className="font-bold">Software Development Diploma (2025 - 2027)</span>.
              Experienced in{" "}
              <span className="btn rounded bg-button align-middle p-0.5">
                <span className="font-bold">
                  <i className="fa-solid fa-laptop ps-1" /> Web {" "}
                </span>
                and
                <span className="font-bold">
                  <i className="fa-solid fa-mobile-screen ps-1" /> Android
                </span>
              </span>
              {" "} <span className="font-bold">application software development. </span>
              I enjoy solving problems and tackling real-world challenges using technology.
              Apart from{" "}
              <span className="font-bold btn rounded bg-button align-middle p-0.5">
                <i className="fa-solid fa-code ps-1" /> Coding
              </span>
              , I have a passion in Cycling, Photography, and Videography.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-primary text-xl"></i>
              Professional Profile
            </h2>
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm">
              <ul className="flex flex-row gap-3 p-1 bg-muted/50 rounded-xl w-fit mb-6">
                <li
                  onClick={() => { setInfo("education") }}
                  className={`cursor-pointer px-6 py-2 rounded-lg font-bold transition-all duration-300 ${info === "education"
                    ? "bg-surface primary-text shadow-sm scale-105"
                    : "hover:bg-surface/50 text-muted-foreground opacity-70"
                    }`}
                >
                  Education
                </li>
                <li
                  onClick={() => { setInfo("experience") }}
                  className={`cursor-pointer px-6 py-2 rounded-lg font-bold transition-all duration-300 ${info === "experience"
                    ? "bg-surface primary-text shadow-sm scale-105"
                    : "hover:bg-surface/50 text-muted-foreground opacity-70"
                    }`}
                >
                  Experience
                </li>
              </ul>
              <div className="min-h-[300px]">
                {info === "education" && <Education />}
                {info === "experience" && <Experience />}
              </div>
            </div>
          </section>

          <Projects />

          <section className="container mx-auto mt-20 p-4">

            <div className="flex justify-center flex-col items-center">
              <h1 className="text-2xl font-bold  text-center">Cycling Gallery</h1>
              <div className="border-b border-b-2 w-4/5 m-5"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
              {imageRange.map((index) => (
                <div key={index} className="
                rounded-lg 
                transition-transform 
                duration-300 
                ease-in-out 
                transform 
                hover:scale-[2.5] 
                hover:overflow-visible 
                hover:flex
                hover:z-10 
                ">
                  <img
                    className="h-auto max-w-full border-gray-400 border rounded-lg"
                    src={`/bike/gallery_${index}.jpg`}
                    alt={`Gallery Image ${index}`}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
              <i className="fa-solid fa-link text-primary text-xl"></i>
              Connect with Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              <a
                href="https://github.com/mand0ng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl hover:border-primary hover:bg-muted/50 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <i className="fab fa-github text-xl"></i>
                  <span className="font-bold">GitHub</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/emmanuel-pedroza-931710188"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl hover:border-primary hover:bg-muted/50 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <i className="fab fa-linkedin text-xl text-[#0077b5]"></i>
                  <span className="font-bold">LinkedIn</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>

              <a
                href="https://www.instagram.com/_man_ding_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl hover:border-primary hover:bg-muted/50 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <i className="fab fa-instagram text-xl text-[#e4405f]"></i>
                  <span className="font-bold">Instagram</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>

              <a
                href="https://www.youtube.com/@mandongpedroza7486/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-xl hover:border-primary hover:bg-muted/50 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <i className="fab fa-youtube text-xl text-[#ff0000]"></i>
                  <span className="font-bold">YouTube</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>
            </div>
          </section>

          <section className="mt-40 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 primary-text">Want to work together?</h2>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95 shadow-md ring-1 ring-white/10"
            >
              Get In Touch
            </Link>
          </section>

          <section className="mt-40">
            You can{" "}
            <span className="btn rounded bg-button align-middle p-0.5 px-2">
              <i className="fa fa-eye mr-2"></i>
              <a
                className="underline underline-offset-2 font-bold"
                target="_blank"
                rel="noopener noreferrer"
                href="/resume"
              >
                view
              </a>
            </span>{" "}
            or{" "}
            <span className="btn rounded bg-button align-middle p-0.5 px-2">
              <i className="fa fa-download mr-2"></i>
              <a
                className="underline underline-offset-2 font-bold"
                href="/api/resume"
                download="Emmanuel Pedroza - Software Developer.pdf"
              >
                download
              </a>
            </span>{" "}
            my{" "}
            <span className="font-bold"><i className="fa-regular fa-file"></i> resume</span>{" "}
            through these links.
          </section>
        </div>
      </div>
    </main>
  );
}