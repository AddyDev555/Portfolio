import { FaTrophy } from "react-icons/fa";

const achievementsList = [
    {
        title: "3rd Prize in Coding Competition",
        description: "CDAC Olabs Hackathon (2025) out of 50 participant teams",
        icon: <FaTrophy className="text-3xl text-yellow-400" />,
    },
];

export default function AcademicAchievements() {
    return (
        <div className="p-2 bg-gray-950 text-white rounded-xl">
            <h2 className="text-xl font-semibold mb-4 capitalize border-b border-gray-700 pb-1">
                Academic Achievements
            </h2>

            <div className="space-y-4">
                {achievementsList.map((achievement, index) => (
                    <div
                        key={index}
                        className="cursor-pointer p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gray-700">{achievement.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white">
                                    Awarded {achievement.title}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {achievement.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}