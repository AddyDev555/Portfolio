"use client";
import React, { useState, useEffect } from 'react'
import { Menu, X, ExternalLink, Github, Calendar, Play, Pause } from 'lucide-react';
import {
    Linkedin,
} from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function ProjectsContainer() {
    const [isMenu, setIsMenu] = useState(false);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [playingVideo, setPlayingVideo] = useState(null);

    // Load projects data from backend API
    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Fetch from backend API
                const response = await fetch('https://adiverse.pythonanywhere.com/api/projects');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const projectsData = await response.json();
                setProjects(projectsData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error loading projects data:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    const socialMedia = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/aditya-patil-b5a9b425a/",
            icon: <Linkedin size={15} />,
            label: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            id: 2,
            link: "https://github.com/AddyDev555",
            icon: <Github size={15} />,
            label: "GitHub",
            color: "hover:text-purple-500"
        },
        {
            id: 3,
            link: "https://x.com/AdityaPati_04",
            icon: <FaXTwitter size={15} />,
            label: "X",
            color: "hover:text-white-500"
        },
    ];

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contacts" },
        { name: "Blogs", href: "/blogs" },
        { name: "UI/UX Store", href: "/store" }
    ];

    const handleVideoPlay = (projectId) => {
        setPlayingVideo(playingVideo === projectId ? null : projectId);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long'
        });
    };

    const ProjectCard = ({ project }) => (
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10">
            {/* Media Section */}
            <div className="relative overflow-hidden h-48 bg-gray-800">
                {project.video ? (
                    <div className="relative w-full h-full">
                        <video
                            className="w-full h-full object-cover"
                            loop
                            muted
                            autoPlay={playingVideo === project.id}
                            poster={project.image}
                        >
                            <source src={`https://adiverse.pythonanywhere.com/projects/${project.video}`} type="video/mp4" />
                        </video>
                        <button
                            onClick={() => handleVideoPlay(project.id)}
                            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors duration-200"
                        >
                            {playingVideo === project.id ? (
                                <Pause size={40} className="text-white" />
                            ) : (
                                <Play size={40} className="text-white" />
                            )}
                        </button>
                    </div>
                ) : project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-6xl">🚀</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Header */}
                <div className="items-start mb-3">
                    <h3 className="text-xl font-bold text-white truncate pr-2">
                        {project.title}
                    </h3>
                    {project.date && (
                        <div className="flex items-center text-gray-400 text-xs whitespace-nowrap">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(project.date)}
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 6).map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded-md border border-yellow-500/20"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 6 && (
                                <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-400 rounded-md">
                                    +{project.technologies.length - 6} more
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                    {project.hostedLink && (
                        <Link
                            href={project.hostedLink}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors duration-200"
                        >
                            <ExternalLink size={16} />
                            <span className="text-sm">Live Demo</span>
                        </Link>
                    )}
                    {project.githubLink && (
                        <Link
                            href={project.githubLink}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                            <Github size={16} />
                            <span className="text-sm">Code</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className='relative h-[100vh] w-full overflow-scroll bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
            <div className="w-full p-4">
                {/* Projects Header */}
                <h2 className="w-[96%] m-auto text-2xl font-semibold mb-2 capitalize border-b border-gray-700 pb-2">
                    Projects
                </h2>

                {/* Projects Display */}
                <div className="container mx-auto px-4 py-4">
                    {/* Loading State */}
                    {loading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Failed to Load Projects</h3>
                            <p className="text-gray-400 mb-4">
                                {error}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors duration-200"
                            >
                                Retry
                            </button>
                        </div>
                    )}

                    {/* Projects Grid */}
                    {!loading && !error && projects.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id || index} project={project} />
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && !error && projects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🚧</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
                            <p className="text-gray-400">
                                No projects available at the moment. Check back later!
                            </p>
                        </div>
                    )}
                </div>

                {/* Menu Container */}
                <div className="fixed top-6 right-11 flex items-center space-x-12 z-30 menu-container">
                    <button
                        onClick={() => setIsMenu(!isMenu)}
                        className="p-3 hover:bg-white/10 cursor-pointer rounded-xl transition-colors duration-200 backdrop-blur-sm bg-black/20 border border-gray-700/50"
                    >
                        {isMenu ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                    </button>

                    {/* Dropdown Menu */}
                    {isMenu && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-[#1f1f2e]/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                            <div className="py-2">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="block px-4 py-3 text-white hover:bg-yellow-500/20 hover:text-yellow-500 transition-all duration-200 text-sm font-medium border-b border-gray-700/50 last:border-b-0"
                                        onClick={() => setIsMenu(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Social Media in Menu */}
                            <div className="px-4 py-3 border-t border-gray-700/50 bg-gray-800/30">
                                <div className="flex items-center justify-center gap-3">
                                    {socialMedia.map(({ id, icon, link, label, color }) => (
                                        <Link
                                            key={id}
                                            href={link}
                                            target="_blank"
                                            className={`p-2 rounded-lg bg-white/5 ${color} hover:bg-white/10 transition-all duration-300 hover:scale-110`}
                                            title={label}
                                            onClick={() => setIsMenu(false)}
                                        >
                                            <span className="text-gray-300 hover:text-current transition-colors duration-200">
                                                {icon}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Rotated PROJECTS label
                <div className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 text-white text-sm tracking-widest z-10 origin-center">
                    PROJECTS
                </div> */}
            </div>
        </div>
    )
}