import React from 'react';
import SocialMedia from './SocialMedia';

export default function Footer() {

    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-bold text-yellow-400">Aditya Patil</h2>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <SocialMedia />
            </div>
        </footer>
    );
}
