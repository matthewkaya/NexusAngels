import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
    FaTwitter, FaLinkedin, FaGithub, 
    FaInstagram, FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Footer Top */}
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <span className="text-2xl font-bold gradient-text">NEXUS ANGELS</span>
                        <p className="mt-4 text-gray-400">
                            Identifying and investing in visionary entrepreneurs building the next generation of transformative companies.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <SocialIcon icon={<FaTwitter />} href="https://twitter.com" />
                            <SocialIcon icon={<FaLinkedin />} href="https://linkedin.com" />
                            <SocialIcon icon={<FaGithub />} href="https://github.com" />
                            <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors">About</Link>
                            </li>
                            <li>
                                <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="process" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors">Process</Link>
                            </li>
                            <li>
                                <Link to="team" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors">Team</Link>
                            </li>
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-yellow-300 cursor-pointer transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Resources */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => {}} className="text-gray-400 hover:text-yellow-300 transition-colors text-left">Blog</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="text-gray-400 hover:text-yellow-300 transition-colors text-left">Pitch Guidelines</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="text-gray-400 hover:text-yellow-300 transition-colors text-left">Investment FAQ</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="text-gray-400 hover:text-yellow-300 transition-colors text-left">Industry Reports</button>
                            </li>
                            <li>
                                <button onClick={() => {}} className="text-gray-400 hover:text-yellow-300 transition-colors text-left">Founder Resources</button>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest investment insights and portfolio updates.</p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="bg-black border border-gray-700 rounded-l-md w-full py-2 px-3 text-white focus:outline-none focus:border-yellow-300"
                            />
                            <motion.button 
                                type="submit" 
                                className="bg-yellow-300 text-black px-4 rounded-r-md hover:bg-yellow-400 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaArrowUp className="rotate-90" />
                            </motion.button>
                        </form>
                    </div>
                </div>
                
                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 mb-4 md:mb-0">
                        &copy; {currentYear} Nexus Angels. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <button onClick={() => {}} className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</button>
                        <button onClick={() => {}} className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</button>
                        <button onClick={() => {}} className="text-gray-500 hover:text-gray-300 transition-colors">Cookies</button>
                    </div>
                </div>
            </div>
            
            {/* Scroll to top button */}
            <motion.button 
                onClick={scrollToTop}
                className="scroll-top-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                initial={{ opacity: 0 }}
            >
                <FaArrowUp />
            </motion.button>
        </footer>
    );
};

// Social icon component
const SocialIcon = ({ icon, href }) => {
    return (
        <motion.a 
            href={href}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-300/20 hover:text-yellow-300 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
        >
            {icon}
        </motion.a>
    );
};

export default Footer;