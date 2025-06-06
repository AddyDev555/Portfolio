"use client";
import React from 'react'
import { MdViewModule, MdDashboard, MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaRegHandPointer, FaSpinner } from "react-icons/fa";
import { RiInputMethodLine } from "react-icons/ri";
import { AiOutlineForm } from "react-icons/ai";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
});

export default function StoreSidebar({ selectedCategory, onCategorySelect }) {

    const elements = [
        { id: 1, label: "All", icon: <MdDashboard size={25} /> },
        { id: 2, label: "Cards", icon: <MdViewModule size={25}/> },
        { id: 3, label: "Buttons", icon: <FaRegHandPointer size={25}/> },
        { id: 4, label: "Inputs", icon: <RiInputMethodLine size={25}/> },
        { id: 5, label: "Forms", icon: <AiOutlineForm size={25}/> },
        { id: 6, label: "Loaders", icon: <FaSpinner size={25}/> },
        { id: 7, label: "ToolTips", icon: <MdOutlineTipsAndUpdates size={25}/> },
    ];

    return (
        <div className={`${poppins.className} p-6 w-[18.5%] hidden lg:flex h-[100vh] overflow-y-hidden bg-[#1c1c29]`}>
            <div>
                <h1 className='text-lg text-center text-white mb-5 border-b border-gray-700 pb-1'>UI/UX Components</h1>
                {elements.map((item) => (
                    <div onClick={() => onCategorySelect(item.label)} className='flex p-4 rounded cursor-pointer hover:bg-gray-800 items-center mb-4 gap-2 text-white text-sm' key={item.id}>
                        {item.icon}
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
