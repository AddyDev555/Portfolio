import React from 'react'
import ContactMe from './components/contactForm'

export const metadata = {
    title: "AdiVerse | Contact Me",
    description: "This page is for connecting with me.",
};

export default function page() {
    return (
        <div>
            <ContactMe />
        </div>
    )
}
