import React from 'react'
import StoreCard from './storeCard';

export default function CardsHolder() {
    const uiUxTemplates = [
        {
            id: 1,
            name: "Modern Dashboard",
            description: "A sleek, responsive dashboard UI kit built for analytics apps.",
            tags: ["Dashboard", "Responsive", "Modern"]
        },
        {
            id: 2,
            name: "Startup Landing Page",
            description: "A clean landing page template ideal for SaaS and startup websites.",
            tags: ["Landing Page", "SaaS", "Minimal"]
        },
        {
            id: 3,
            name: "E-commerce UI Kit",
            description: "Essential components for a shopping experience—product cards, checkout, filters.",
            tags: ["E-commerce", "Mobile", "UI Kit"]
        },
    ];
    return (
        <div className='w-[90%] h-full p-4'>
            <StoreCard uiUxData={uiUxTemplates}/>
        </div>
    )
}
