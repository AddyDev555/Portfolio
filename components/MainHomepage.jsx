"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Menu } from 'lucide-react';
import {
    Linkedin,
    Github,
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import TitleText from './UI/TitleText';
import SkillsSection from './Skills';

export default function MainHomepage() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

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
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            id: 2,
            link: "https://github.com/AddyDev555",
            icon: <Github size={20} />,
            label: "GitHub",
            color: "hover:text-purple-500"
        },
        {
            id: 3,
            link: "https://x.com/AdityaPati_04",
            icon: <FaXTwitter size={20} />,
            label: "X",
            color: "hover:text-white-500"
        },
    ]


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

    return (
        <div className='relative h-[100vh] w-full overflow-scroll'>
            <div className="bg-[#20202a] h-[60vh] flex items-center justify-center overflow-hidden px-8">
                <div
                    className="h-[60vh] absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('/mountain.jpg')" }}
                />

                <div className="relative z-10 flex max-w-6xl w-[93%] bg-[#1f1f2e] rounded-md shadow-lg overflow-hidden h-[50vh]">
                    <div className="w-[65%] p-10 text-white flex flex-col justify-center">
                        <h1 className="text-xl md:text-3xl font-extrabold leading-tight">
                            Welcome to <span className="text-yellow-500">AdiVerse</span><br />My Art Space!
                        </h1>
                        <p className="mt-6 text-md font-mono">
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
                        <div className="py-3 md:hidden">
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

                    <div className="w-[45%] relative hidden md:block z-20" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
                        <Image
                            src="/user.jpg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="absolute top-3 right-5 flex items-center space-x-12 z-30">
                    <Menu size={28} />
                </div>

                {/* Rotated HOME label */}
                <div className="absolute right-3 top-20 -translate-y-1/2 rotate-90 flex text-white text-sm tracking-widest z-30">
                    HOME
                </div>
            </div>

            <div className='lg:pl-18 lg:pr-18 py-4'>
                <SkillsSection />
            </div>

        </div>
    );
}