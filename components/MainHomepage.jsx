"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import {
    Linkedin,
    Github,
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import SkillsSection from './Skills';
import Internships from './Internships';
import AcademicAchievements from './Achivements';
import ExtraCurricularActivities from './Hobbies';

export default function MainHomepage() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    
    const textList = [
        "Building automation tools.",
        "Developing web apps.",
        "Designing intuitive UI/UX.",
        "Turning ideas to products.",
    ];

    const socialMedia = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/aditya-patil-b5a9b425a/",
            icon: <Linkedin size={15} />,
            label: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            id: 2,
            link: "https://github.com/AddyDev555",
            icon: <Github size={15} />,
            label: "GitHub",
            color: "hover:text-purple-500"
        },
        {
            id: 3,
            link: "https://x.com/AdityaPati_04",
            icon: <FaXTwitter size={15} />,
            label: "X",
            color: "hover:text-white-500"
        },
    ];

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
        {name: "Blogs", href: "/blogs"},
        {name: "UI/UX Store", href: "/store"}
    ];

    useEffect(() => {
        const currentFullText = textList[currentTextIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing forward
                if (displayText.length < currentFullText.length) {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                } else {
                    // Finished typing, start deleting after pause
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentTextIndex((prevIndex) =>
                        prevIndex === textList.length - 1 ? 0 : prevIndex + 1
                    );
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentTextIndex, textList]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenu && !event.target.closest('.menu-container')) {
                setIsMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenu]);

    return (
        <div className='relative h-[100vh] w-full overflow-scroll'>
            <div className="bg-[#20202a] h-[30vh] lg:h-[60vh] flex items-center justify-center overflow-hidden px-8">
                <div
                    className="h-[30vh] lg:h-[60vh] absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/mountain.jpg')" }}
                />

                <div className="relative z-10 flex max-w-6xl w-[93%] bg-[#1f1f2e] rounded-md shadow-lg overflow-hidden h-[50vh]">
                    <div className="w-[100%] lg:w-[65%] px-4 lg:px-6 py-2 text-white flex flex-col justify-center">
                        <h1 className="text-md md:text-3xl font-extrabold leading-tight">
                            Welcome to <span className="text-yellow-500">AdiVerse</span><br />My Art Space!
                        </h1>
                        <p className="mt-6 text-xs lg:text-[1rem] font-mono">
                            <span className="text-yellow-400">&lt;code&gt; </span>
                            <span className="inline-block min-w-[200px]">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                            <span className="text-yellow-400"> &lt;/code&gt;</span>
                        </p>
                        <button className="text-sm mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-3 cursor-pointer rounded shadow-md transition-all duration-200 hidden md:block">
                            EXPLORE NOW
                        </button>
                        {/* Social Media - Only show on mobile */}
                        <div className="pt-3 md:hidden">
                            <div className="flex items-center gap-4">
                                {socialMedia.map(({ id, icon, link, label, color }) => (
                                    <Link
                                        key={id}
                                        href={link}
                                        target="_blank"
                                        className={`group relative p-3 rounded-xl bg-white/5 ${color} hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                        title={label}
                                    >
                                        <span className="text-gray-300 group-hover:text-current transition-colors duration-200">
                                            {icon}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-[45%] relative hidden lg:block z-20" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                        <Image
                            src="/user.jpg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Menu Container */}
                <div className="absolute top-1 right-0.5 lg:top-3 lg:right-3 flex items-center space-x-12 z-30 menu-container">
                    <button
                        onClick={() => setIsMenu(!isMenu)}
                        className="p-2 hover:bg-white/10 cursor-pointer rounded-lg transition-colors duration-200"
                    >
                        {isMenu ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                    </button>

                    {/* Dropdown Menu */}
                    {isMenu && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-[#1f1f2e] rounded-lg shadow-xl border border-gray-700 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                            <div className="py-2">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="block px-4 py-3 text-white hover:bg-yellow-500/20 hover:text-yellow-500 transition-all duration-200 text-sm font-medium border-b border-gray-700/50 last:border-b-0"
                                        onClick={() => setIsMenu(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            
                            {/* Social Media in Menu */}
                            <div className="px-4 py-3 border-t border-gray-700/50 bg-gray-800/30">
                                <div className="flex items-center justify-center gap-3">
                                    {socialMedia.map(({ id, icon, link, label, color }) => (
                                        <Link
                                            key={id}
                                            href={link}
                                            target="_blank"
                                            className={`p-2 rounded-lg bg-white/5 ${color} hover:bg-white/10 transition-all duration-300 hover:scale-110`}
                                            title={label}
                                            onClick={() => setIsMenu(false)}
                                        >
                                            <span className="text-gray-300 hover:text-current transition-colors duration-200">
                                                {icon}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Rotated HOME label */}
                <div className="absolute right-0.5 lg:right-3 lg:top-1/2 rotate-90 flex text-white text-sm tracking-widest z-10">
                    HOME
                </div>
            </div>
            

            {/* Skills Container */}
            <div className='lg:pl-18 lg:pr-18 pt-4'>
                <SkillsSection />
            </div>

            {/* Internships Container */}
            <div className='lg:pl-18 lg:pr-18 pt-2 pb-4'>
                <Internships />
            </div>

            {/* Achievements Container */}
            <div className='lg:pl-18 lg:pr-18 pt-2 pb-4'>
                <AcademicAchievements />
            </div>

            {/* Hobbies Container */}
            <div className='lg:pl-18 lg:pr-18 pt-2 pb-4'>
                <ExtraCurricularActivities />
            </div>
        </div>
    );
}