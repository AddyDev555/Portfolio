import React from 'react'
import { LuScrollText } from "react-icons/lu";

export default function Certification() {
    const certificates = [
        {
            title: "AWS Cloud Workshop",
            description: "Hands-on workshop focused on core AWS services including EC2, S3, IAM, and Lambda, emphasizing real-world cloud architecture and deployment practices.",
            certificateUrl: "https://certificate.givemycertificate.com/c/97eda35c-4eba-41fd-8a10-8be6441a0760",
            icon: <LuScrollText size={25} color='#f0b100'/>,
        },
        {
            title: "Python for Machine Learning & Data Science Masterclass",
            description: "Comprehensive course covering Python fundamentals, NumPy, pandas, scikit-learn, and model deployment — ideal for aspiring ML and data professionals.",
            certificateUrl: "https://www.udemy.com/certificate/UC-fb4c6667-0b40-442e-9a46-0164798c2a47/",
            icon: <LuScrollText size={25} color='#f0b100'/>,
        },
        {
            title: "Full-Stack Web Development Bootcamp 2024",
            description: "End-to-end web development program teaching HTML, CSS, JavaScript, React.js, Node.js, and GitHub, preparing students to build scalable, responsive web apps.",
            certificateUrl: "https://www.udemy.com/certificate/UC-90695adf-3d20-49a3-86e2-1f49d0ca4a14/",
            icon: <LuScrollText size={25} color='#f0b100'/>,
        },
    ];

    return (
        <div className="p-2 bg-gray-950 text-white rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 capitalize border-b border-gray-700 pb-1">
                Certifications
            </h2>

            <div className="space-y-4">
                {certificates.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-gray-700">
                                {cert.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-gray-300">{cert.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
