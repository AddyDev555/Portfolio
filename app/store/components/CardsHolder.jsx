"use client";
import React, { useState, useEffect } from 'react';
import StoreCard from './storeCard';
import StoreSidebar from './storeSidebar'

export default function CardsHolder() {
    const [components, setComponents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://adiverse.pythonanywhere.com/components')
            .then(res => res.json())
            .then(data => {
                setComponents(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setIsLoading(false);
            });
    }, []);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='w-full h-full flex'>
            <StoreSidebar selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect}/>
            <StoreCard uiUxData={components} isLoading={isLoading} selectedCategory={selectedCategory}/>
        </div>
    );
}
