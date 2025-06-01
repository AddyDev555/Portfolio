import React from 'react'
import SideProfile from "@/components/SideProfile";
import ProjectsContainer from './components/ProjectsContainer';

export const metadata = {
    title: "AdiVerse | Projects",
    description: "This page showcases all of my projects.",
};

export default function page() {
    return (
        <div className="p-4 flex">
            <SideProfile className="sticky top-0" />
            <ProjectsContainer />
        </div>
    )
}
