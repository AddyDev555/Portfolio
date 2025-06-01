import { FaPlane, FaReact } from "react-icons/fa";

const activitiesList = [
    {
        title: "FPV Drone Pilot",
        description: "Enthusiastic FPV drone pilot, enjoying the technical aspects of flight and aerial maneuvers.",
        icon: <FaPlane className="text-3xl text-blue-400" />,
    },
    {
        title: "UI/UX Design & React Development",
        description: "Enjoy designing intuitive and visually appealing user interfaces, with a particular focus on creating modular React Components and optimizing overall UI/UX.",
        icon: <FaReact className="text-3xl text-cyan-400" />,
    },
];

export default function ExtraCurricularActivities() {
    return (
        <div className="p-2 bg-gray-950 text-white rounded-xl">
            <h2 className="text-xl font-semibold mb-4 capitalize border-b border-gray-700 pb-1">
                Hobbies
            </h2>

            <div className="space-y-4">
                {activitiesList.map((activity, index) => (
                    <div
                        key={index}
                        className="cursor-pointer p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-gray-700">{activity.icon}</div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white">
                                    {activity.title}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {activity.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}