"use client"
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {

    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const navLinks = [
        { name: "Home", url: "/", clickable: true },
        { name: "Resume", url: "/resume", clickable: true },
        { name: "Projects", url: "/projects", clickable: true },
        { name: "Blog", url: "/", clickable: false },
        { name: "Contact", url: "/contact", clickable: true },
    ];

    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (

        <div className="nav-contents relative my-header rounded-lg px-4">
            <div className="hidden md:flex nav-contents-lg justify-center items-center relative">
                <ul className="flex flex-wrap items-center justify-center m-5">
                    {navLinks.map((link, index) => (
                        <li key={index} className="me-4 md:me-6">
                            <Link href={link.clickable ? link.url : ""} className={`hover:underline primary-text font-bold ${link.clickable ? '' : 'cursor-not-allowed sub-text opacity-50 font-normal'}`}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    {theme === 'dark' ? (
                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
            <div className="block md:hidden relative flex justify-between items-center p-4">
                <button onClick={toggleMenu} className="block primary-text hover:text-black focus:text-black focus:outline-none">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                    {theme === 'dark' ? (
                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
                {showMenu && (
                    <div className="absolute top-0 left-0 right-0 mt-12 z-50 my-header border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                        <ul className="flex flex-col items-center py-4 primary-text">
                            {navLinks.map((link, index) => (
                                <li key={index} className="my-2">
                                    <Link onClick={toggleMenu} href={link.clickable ? link.url : ""} className={`${link.clickable ? 'font-bold' : 'sub-text opacity-50'} hover:underline`}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}