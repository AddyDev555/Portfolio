"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // Basic validation
        if (!formData.from_name || !formData.from_email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields.'
            });
            setIsLoading(false);
            return;
        }

        try {
            // Simulate EmailJS call (replace with actual implementation in your environment)
            const templateParams = {
                from_name: formData.from_name,
                from_email: formData.from_email,
                subject: formData.subject || 'Contact Form Submission',
                message: formData.message,
            };

            // In your actual implementation, use:
            const emailjs = require('@emailjs/browser');
            await emailjs.send(
                "service_uhy7xw3",
                "template_b0gsigo", 
                templateParams,
                "e4urQMx9Nd0cX_lRD"
            );

            // Simulating success for demo
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            
            // Reset form
            setFormData({
                from_name: '',
                from_email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            console.error('Email Error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen overflow-y-scroll bg-black text-white flex items-center justify-center p-8">
            <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Me</h2>
                
                {/* Status Messages */}
                {status.message && (
                    <div className={`mb-6 p-4 rounded-lg ${
                        status.type === 'success' 
                            ? 'bg-green-900 border border-green-400 text-green-100' 
                            : 'bg-red-900 border border-red-400 text-red-100'
                    }`}>
                        {status.message}
                    </div>
                )}

                <div className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-300">Name *</label>
                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full p-3 rounded bg-black text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-300">Email *</label>
                        <input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full p-3 rounded bg-black text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="your.email@example.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-300">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full p-3 rounded bg-black text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="What's this about?"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-300">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            disabled={isLoading}
                            className="w-full p-3 rounded bg-black text-white border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Tell me about your project or how I can help..."
                        />
                    </div>
                    <button
                        onClick={sendEmail}
                        disabled={isLoading}
                        className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </div>

                <div className="mt-10 space-y-4 text-gray-300">
                    <p className="flex items-center gap-3">
                        <FaEnvelope className="text-yellow-400" /> your@email.com
                    </p>
                    <p className="flex items-center gap-3">
                        <FaPhone className="text-yellow-400" /> +123 456 7890
                    </p>
                    <p className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-yellow-400" /> Your City, Country
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;