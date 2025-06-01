import { SiNextdotjs, SiPython } from "react-icons/si";

const internshipList = [
    {
        role: "Full Stack Web-Developer Intern (Senior SDE)",
        company: "apibox.ai",
        location: "Noida",
        duration: "March - May, 2025",
        icon: <SiNextdotjs className="text-3xl text-blue-400" />,
        bullets: [
            "Led a 4-developer team and managed project execution and client interaction for SAS (Service Assistance System) requirements.",
            "Built a complete SAS web app using Next.js, NextAuth, GitHub, and APIs, integrated AI-powered chat assistant & WhatsApp chatbot.",
            "Delivered a robust full-stack solution enhancing client's support workflow.",
        ],
    },
    {
        role: "Python Developer Intern (Data/Web-Scraper)",
        company: "LearnTheta",
        location: "Bengaluru",
        duration: "June - July, 2024",
        icon: <SiPython className="text-3xl text-yellow-400" />,
        bullets: [
            "Developed scrapers using BeautifulSoup and Selenium to extract over 200,000 aptitude Q&As from 10+ educational sites.",
            "Created a Telegram bot for automated job scraping from Naukri, Indeed, Internshala, and Freshers World to streamline job search.",
        ],
    },
];

export default function Internships() {
    return (
        <div className="p-2 bg-gray-950 text-white rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 capitalize border-b border-gray-700 pb-1">
                Internships
            </h2>

            <div className="space-y-4">
                {internshipList.map((internship, index) => (
                    <div
                        key={index}
                        className="cursor-pointer p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-gray-700">{internship.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white">
                                    {internship.role}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {internship.company}, {internship.location} ({internship.duration})
                                </p>
                            </div>
                        </div>

                        <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                            {internship.bullets.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}