import React from 'react'
import {
    Linkedin,
    Github,
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function SocialMedia() {
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

    return (
        <div className="px-6 py-6">
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
    )
}
