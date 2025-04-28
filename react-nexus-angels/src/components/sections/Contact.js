import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setSubmitting(true);
            
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', formData);
                setSubmitting(false);
                setFormSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    subject: '',
                    message: ''
                });
                
                // Reset form status after 5 seconds
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 5000);
            }, 1500);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section id="contact" className="section dark-section py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-wider text-yellow-300 uppercase">Get In Touch</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl neon-text">
                        Contact Us
                    </h2>
                    <div className="mt-6 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-300">
                            Have a startup looking for funding? Want to learn more about our investment approach? 
                            We'd love to hear from you.
                        </p>
                    </div>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div 
                        className="md:col-span-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
                            <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
                            
                            {formSubmitted ? (
                                <motion.div
                                    className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-800 mb-4">
                                        <FaCheck className="text-green-200" size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-green-200">
                                        Thanks for reaching out. We'll get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-md w-full py-3 px-4 text-white focus:outline-none focus:border-yellow-300`}
                                                placeholder="Your name"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-md w-full py-3 px-4 text-white focus:outline-none focus:border-yellow-300`}
                                                placeholder="Your email"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="bg-black border border-gray-700 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:border-yellow-300"
                                                placeholder="Your company"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="bg-black border border-gray-700 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:border-yellow-300"
                                                placeholder="Message subject"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className={`bg-black border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-md w-full py-3 px-4 text-white focus:outline-none focus:border-yellow-300`}
                                            placeholder="Your message..."
                                        ></textarea>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                        )}
                                    </div>
                                    <div className="mt-6">
                                        <motion.button
                                            type="submit"
                                            className="flex items-center justify-center bg-yellow-300 text-black font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition duration-300"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={submitting}
                                        >
                                            {submitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FaPaperPlane className="mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="md:col-span-1"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div 
                            className="bg-black/50 border border-gray-800 rounded-xl p-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                            
                            <motion.div variants={itemVariants} className="flex items-start mb-6">
                                <div className="w-10 h-10 rounded-full bg-yellow-300/10 flex items-center justify-center text-yellow-300 mr-4">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Our Office</h4>
                                    <p className="text-gray-400">
                                        123 Innovation Drive<br />
                                        San Francisco, CA 94107
                                    </p>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={itemVariants} className="flex items-start mb-6">
                                <div className="w-10 h-10 rounded-full bg-yellow-300/10 flex items-center justify-center text-yellow-300 mr-4">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                                    <p className="text-gray-400">
                                        info@nexusangels.com<br />
                                        pitches@nexusangels.com
                                    </p>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={itemVariants} className="flex items-start mb-6">
                                <div className="w-10 h-10 rounded-full bg-yellow-300/10 flex items-center justify-center text-yellow-300 mr-4">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                                    <p className="text-gray-400">
                                        +1 (415) 555-0123<br />
                                        Mon-Fri, 9am-5pm PT
                                    </p>
                                </div>
                            </motion.div>
                            
                            <motion.div variants={itemVariants} className="mt-8">
                                <h4 className="text-white font-medium mb-3">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <SocialButton icon="twitter" />
                                    <SocialButton icon="linkedin" />
                                    <SocialButton icon="facebook" />
                                    <SocialButton icon="instagram" />
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="mt-8 bg-black/50 border border-gray-800 rounded-xl p-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="text-white font-medium mb-3">Pitch Guidelines</h4>
                            <p className="text-gray-400 mb-4 text-sm">
                                When submitting a pitch, please include:
                            </p>
                            <ul className="text-gray-400 text-sm space-y-1">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mr-2"></div>
                                    Company overview & mission
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mr-2"></div>
                                    Founding team background
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mr-2"></div>
                                    Problem you're solving
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mr-2"></div>
                                    Current traction & metrics
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300 mr-2"></div>
                                    Funding stage & use of funds
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Social button component
const SocialButton = ({ icon }) => {
    const getIcon = () => {
        switch (icon) {
            case 'twitter':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                );
            case 'facebook':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <motion.button
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-300/20 hover:text-yellow-300 transition duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
                // İleride gerçek sosyal medya bağlantılarına yönlendirmek için
                const socialLinks = {
                    twitter: 'https://twitter.com',
                    linkedin: 'https://linkedin.com',
                    facebook: 'https://facebook.com',
                    instagram: 'https://instagram.com'
                };
                
                if (socialLinks[icon]) {
                    window.open(socialLinks[icon], '_blank');
                }
            }}
            aria-label={`Visit our ${icon} page`}
        >
            {getIcon()}
        </motion.button>
    );
};

export default Contact;