"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

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

        if (!formData.from_name || !formData.from_email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields.'
            });
            setIsLoading(false);
            return;
        }

        try {
            const templateParams = {
                from_name: formData.from_name,
                from_email: formData.from_email,
                subject: formData.subject || 'Contact Form Submission',
                message: formData.message,
            };

            // const emailjs = require('@emailjs/browser');
            // await emailjs.send(
            //     "service_uhy7xw3",
            //     "template_b0gsigo",
            //     templateParams,
            //     "e4urQMx9Nd0cX_lRD"
            // );

            await new Promise(resolve => setTimeout(resolve, 2000));

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });

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
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex justify-center p-6">
            <div className="hidden lg:block">
                <Image
                    src="/loginSideImage.jpg"
                    alt="login Picture"
                    width={400}
                    height={350}
                    className="shadow-lg rounded-tl-2xl rounded-bl-2xl"
                />
            </div>
            <div className="w-full h-[100vh] max-w-4xl bg-gray-950 p-10 rounded-tr-2xl rounded-br-2xl overflow-y-scroll shadow-2xl backdrop-blur-sm border border-gray-800">
                <div className="flex items-center gap-x-5">
                    <Link href="/">
                        <div className="flex items-center text-white hover:text-yellow-500 transition duration-200 cursor-pointer w-fit mb-7">
                            <FaArrowLeft className="text-2xl" />
                        </div>
                    </Link>
                    <h2 className="text-2xl lg:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Get In Touch</h2>
                </div>

                {status.message && (
                    <div className={`mb-6 p-4 rounded-lg transition-all duration-300 text-sm ${status.type === 'success'
                        ? 'bg-green-800/30 border border-green-500 text-green-300'
                        : 'bg-red-800/30 border border-red-500 text-red-300'
                        }`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={sendEmail} className="space-y-6">
                    {[
                        { name: 'from_name', label: 'Name *', placeholder: 'John Doe', type: 'text' },
                        { name: 'from_email', label: 'Email *', placeholder: 'john@example.com', type: 'email' },
                        { name: 'subject', label: 'Subject', placeholder: 'Regarding collaboration', type: 'text' }
                    ].map(({ name, label, placeholder, type }) => (
                        <div key={name}>
                            <label className="block mb-1 text-gray-400">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required={label.includes('*')}
                                disabled={isLoading}
                                className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 disabled:opacity-50"
                                placeholder={placeholder}
                            />
                        </div>
                    ))}

                    <div>
                        <label className="block mb-1 text-gray-400">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            disabled={isLoading}
                            className="w-full px-4 py-3 rounded-xl bg-black/50 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-vertical transition-all duration-200 disabled:opacity-50"
                            placeholder="Let me know how I can help..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full md:w-fit bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl hover:bg-yellow-500 transition duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
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
                </form>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    {[
                        {
                            icon: <FaEnvelope className="text-yellow-400 text-lg" />,
                            text: "adipatildev04@gmail.com"
                        },
                        {
                            icon: <FaPhone className="text-yellow-400 text-lg" />,
                            text: "+91-9987361083"
                        },
                        {
                            icon: <FaMapMarkerAlt className="text-yellow-400 text-lg" />,
                            text: "Mumbai, India"
                        }
                    ].map((info, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-black/40 border border-gray-700 rounded-xl px-4 py-3">
                            {info.icon}
                            <span className="text-gray-300">{info.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
