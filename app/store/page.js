import React from 'react'
import CardsHolder from './components/CardsHolder'

export const metadata = {
    title: "AdiVerse | UI/UX Store",
    description: "This page showcases some of my UI/UX components.",
};

export default function page() {
    return (
        <div className='w-full p-4'>
            <CardsHolder />
        </div>
    )
}
