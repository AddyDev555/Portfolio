import React from 'react'
import StoreSidebar from './components/storeSidebar'

export const metadata = {
    title: "AdiVerse | UI/UX Store",
    description: "This page showcases some of my UI/UX components.",
};

export default function page() {
    return (
        <div>
            <StoreSidebar />
        </div>
    )
}
