import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google';
import TitleText from './UI/TitleText';
import SubText from './UI/SubText';
import MidText from './UI/MidText';
import Link from 'next/link';
import {
    MapPin,
    Phone,
    Mail,
} from 'lucide-react';
import SocialMedia from './UI/SocialMedia';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
});

export default function SideProfile({ className = "" }) {
    const profession = [
        { id: 1, label: "Full Stack Developer" },
        { id: 2, label: "Data Scientist Enthusiast" },
    ]

    const contactInfo = [
        {
            id: 1,
            label: "Location:",
            value: "India, Mumbai",
            icon: <MapPin size={16} className="text-blue-400" />
        },
        {
            id: 2,
            label: "Phone Number:",
            value: "+919987361083",
            icon: <Phone size={16} className="text-green-400" />
        },
        {
            id: 3,
            label: "Email:",
            value: "adipatildev04@gmail.com",
            link: "mailto:adipatildev04@gmail.com",
            icon: <Mail size={16} className="text-red-400" />
        },
    ];

    return (
        <div className={`${poppins.className} ${className} hidden lg:block w-[28%] h-screen bg-gradient-to-b from-[#1f1f2e] to-[#1a1a26] shadow-2xl border-r border-gray-700/30`}>            {/* Profile Header */}
            <div className="h-[60vh] bg-gradient-to-br from-[#2a2a3e] to-[#1f1f2e] px-6 py-8 flex items-center flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 opacity-35 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 opacity-35 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <Image
                        src="/profilePic2.jpg"
                        alt="My Photo"
                        width={130}
                        height={130}
                        className="rounded-full relative z-10 border-4 border-white/10 shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="text-center mt-2 space-y-2">
                    <TitleText title="Aditya Patil" />
                    <div className="space-y-1">
                        {profession.map((item) =>
                            <div key={item.id}>
                                <SubText className="opacity-70 text-blue-200" title={item.label} />
                            </div>
                        )}
                    </div>
                </div>
                <SocialMedia />
            </div>

            {/* Contact Information */}
            <div className="py-2 px-2 space-y-2">
                <TitleText title="Contact Me" className="px-3 py-2 mt-0" />
                {contactInfo.map(({ id, label, value, link, icon }) => (
                    <div key={id} className="group hover:bg-white/5 p-2 rounded-lg transition-all duration-200">
                        <div className="flex items-center gap-2">
                            <div>{icon}</div>
                            <div className="flex items-center space-x-2 min-w-0">
                                <MidText title={label} />
                                {link ? (
                                    <Link
                                        href={link}
                                        target="_blank"
                                        className="text-blue-400 ml-auto hover:text-blue-300 underline decoration-dotted underline-offset-2 hover:underline-offset-4 transition-all duration-200"
                                    >
                                        <SubText className="break-all" title={value} />
                                    </Link>
                                ) : (
                                    <SubText className="text-gray-300 ml-auto" title={value} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}