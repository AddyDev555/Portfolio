import React from "react";
import {
    FaJava, FaPython, FaPhp, FaReact, FaHtml5, FaCss3Alt, FaPlane, FaVideo, FaFigma, FaPaintBrush,
} from "react-icons/fa";
import {
    SiC, SiJavascript, SiNextdotjs, SiElectron, SiFlask, SiNodedotjs,
    SiDjango, SiSelenium , SiMongodb, SiPostgresql, SiTailwindcss
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const skills = {
    programmingLanguages: [
        { id: 1, label: "C", icon: <SiC size={24} /> },
        { id: 2, label: "Java", icon: <FaJava size={24} /> },
        { id: 3, label: "Python", icon: <FaPython size={24} /> },
        { id: 4, label: "JavaScript", icon: <SiJavascript size={24} /> },
        { id: 5, label: "PHP", icon: <FaPhp size={24} /> },
        { id: 6, label: "HTML5", icon: <FaHtml5 size={24} /> },
        { id: 7, label: "CSS3", icon: <FaCss3Alt size={24} /> },
    ],
    frontendFrameworks: [
        { id: 8, label: "ReactJS", icon: <FaReact size={24} /> },
        { id: 9, label: "NextJS", icon: <SiNextdotjs size={24} /> },
        { id: 10, label: "React Native", icon: <FaReact size={24} /> },
        { id: 11, label: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
        { id: 12, label: "Tkinter", icon: <FaPython size={24} /> },
        { id: 13, label: "Electron", icon: <SiElectron size={24} /> },
    ],
    backendFrameworks: [
        { id: 15, label: "Flask", icon: <SiFlask size={24} /> },
        { id: 16, label: "Django", icon: <SiDjango size={24} /> },
        { id: 17, label: "NodeJS", icon: <SiNodedotjs size={24} /> },
        { id: 18, label: "Selenium", icon: <SiSelenium size={24} /> }
    ],
    databases: [
        { id: 19, label: "MySQL", icon: <GrMysql size={24} /> },
        { id: 20, label: "PostgreSQL", icon: <SiPostgresql size={24} /> },
        { id: 21, label: "MongoDB", icon: <SiMongodb size={24} /> }
    ],
    otherSkills: [
        { id: 22, label: "Video Editing", icon: <FaVideo size={24} /> },
        { id: 23, label: "UI/UX Development", icon: <FaFigma size={25} /> },
        { id: 25, label: "Graphics Designing", icon: <FaPaintBrush size={25} /> },
        { id: 24, label: "Drone Development", icon: <FaPlane size={25} /> }
    ]
};

const SkillsSection = () => {
    return (
        <div className="p-2 bg-gray-950 text-white rounded-xl">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-10">
                    <h2 className="text-xl font-semibold mb-4 capitalize border-b border-gray-700 pb-1">
                        {category.replace(/([A-Z])/g, " $1")}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {items.map(skill => (
                            <div
                                key={skill.id}
                                className="cursor-pointer flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                            >
                                {skill.icon}
                                <span>{skill.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsSection;
