import React from 'react';
import { FaFigma } from 'react-icons/fa';
import Loader from '@/components/UI/Loader';
import DemoComp from '../store_components/DemoComp.jsx';
import ALoader from '../store_components/ALoader.jsx';

// Map component names (as strings) to actual React components
const componentMap = {
    DemoComp,
    ALoader,
};

export default function StoreCard({ uiUxData, isLoading, selectedCategory }) {
    if (isLoading) {
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <div className="flex flex-col items-center space-y-4">
                <Loader />
                <p className="text-white text-lg">Loading Components...</p>
            </div>
        </div>
    }

    // Filter data based on selected category
    const filteredData = selectedCategory === 'All'
        ? uiUxData
        : uiUxData.filter(template =>
            template.type?.toLowerCase() === selectedCategory.toLowerCase()
        );


    return (
        <div className="w-full overflow-y-scroll bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm min-h-screen py-6 px-6">
            <h1 className='text-3xl font-semibold capitalize px-2 pb-4'>{selectedCategory}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map((template) => {
                    const ComponentToRender = componentMap[template.component];
                    return (
                        <div
                            key={template.id}
                            className="cursor-pointer bg-transparent border border-gray-700/50 hover:border-yellow-500/30 duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 text-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
                        >
                            <div className="w-full h-[25vh] flex items-center justify-center content-center pb-6">
                                {ComponentToRender ? <ComponentToRender /> : <div>Component not found</div>}
                            </div>
                            <div className="flex items-center mb-4">
                                <FaFigma className="text-2xl mr-2" />
                                <h2 className="text-xl font-bold">{template.name}</h2>
                            </div>
                            <p className="mb-3">{template.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {template.tags.map((tag) => (
                                    <span key={tag} className="bg-black text-yellow-400 px-3 py-1 text-sm rounded-md">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}