import React from 'react';
import { FaFigma, FaPalette } from 'react-icons/fa';

export default function StoreCard({ uiUxData }) {
    return (
        <div className="cursor-pointer bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm min-h-screen py-12 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {uiUxData.map(template => (
                    <div
                        key={template.id}
                        className="bg-slate-50 text-black rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
                    >
                        <div className="flex items-center mb-4">
                            <FaFigma className="text-2xl mr-2" />
                            <h2 className="text-xl font-bold">{template.name}</h2>
                        </div>
                        <p className="mb-3">{template.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {template.tags.map(tag => (
                                <span key={tag} className="bg-black text-yellow-400 px-3 py-1 text-sm rounded-md">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
