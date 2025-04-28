import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced styling with more professional gradient and shadow effects
const navbarStyles = {
    gradientText: {
        background: 'linear-gradient(to right, #FFFF00, #FFD700, #FFC107)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 800,
        letterSpacing: '1px'
    },
    neonText: {
        textShadow: '0 0 10px rgba(255, 255, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.3)',
        fontWeight: 800,
        letterSpacing: '0.5px'
    }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleSectionChange = () => {
            const sections = ['home', 'about', 'portfolio', 'process', 'team', 'contact'];
            const currentPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= currentPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleSectionChange);
        
        // Initial check
        handleSectionChange();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleSectionChange);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled 
                ? 'bg-black/85 backdrop-blur-xl border-b border-yellow-500/30 shadow-lg shadow-yellow-500/10' 
                : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="flex-shrink-0">
                            <span 
                                style={{...navbarStyles.gradientText, ...navbarStyles.neonText}} 
                                className="text-3xl font-bold animate-pulse-slow"
                            >
                                NEXUS ANGELS
                            </span>
                        </div>
                    </motion.div>
                    
                    <div className="hidden md:block">
                        <motion.div 
                            className="ml-10 flex items-baseline space-x-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5, staggerChildren: 0.1 }}
                        >
                            <NavLink to="home" active={activeSection === 'home'}>Home</NavLink>
                            <NavLink to="about" active={activeSection === 'about'}>About</NavLink>
                            <NavLink to="portfolio" active={activeSection === 'portfolio'}>Portfolio</NavLink>
                            <NavLink to="process" active={activeSection === 'process'}>Process</NavLink>
                            <NavLink to="team" active={activeSection === 'team'}>Team</NavLink>
                            <NavLink to="contact" active={activeSection === 'contact'}>Contact</NavLink>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        className="md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <button 
                            onClick={toggleMenu}
                            className="text-yellow-300 hover:text-yellow-200 focus:outline-none transition-all duration-300 p-2 rounded-full bg-black/50 backdrop-blur-md border border-yellow-500/20 hover:border-yellow-500/50 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? 
                                <FaTimes className="h-6 w-6 neon-text" /> :
                                <FaBars className="h-6 w-6" />
                            }
                        </button>
                    </motion.div>
                </div>
            </div>
            
            {/* Enhanced mobile menu with smoother animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/30 shadow-xl shadow-yellow-500/10"
                    >
                        <motion.div 
                            className="px-4 py-6 space-y-5"
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            initial="hidden"
                            animate="show"
                        >
                            <MobileNavLink to="home" active={activeSection === 'home'} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                            <MobileNavLink to="about" active={activeSection === 'about'} onClick={() => setIsOpen(false)}>About</MobileNavLink>
                            <MobileNavLink to="portfolio" active={activeSection === 'portfolio'} onClick={() => setIsOpen(false)}>Portfolio</MobileNavLink>
                            <MobileNavLink to="process" active={activeSection === 'process'} onClick={() => setIsOpen(false)}>Process</MobileNavLink>
                            <MobileNavLink to="team" active={activeSection === 'team'} onClick={() => setIsOpen(false)}>Team</MobileNavLink>
                            <MobileNavLink to="contact" active={activeSection === 'contact'} onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

// Enhanced Navlink component for desktop with improved animations
const NavLink = ({ to, active, children }) => (
    <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={700}
        className={`cursor-pointer px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 relative ${
            active 
            ? 'text-yellow-300' 
            : 'text-white/90 hover:text-yellow-300 hover:scale-105'
        }`}
    >
        {children}
        {active && (
            <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        )}
    </Link>
);

// Enhanced Navlink component for mobile with improved animations and styling
const MobileNavLink = ({ to, active, onClick, children }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 }
        }}
    >
        <Link
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            onClick={onClick}
            className={`cursor-pointer block px-5 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                active 
                ? 'bg-yellow-500/15 border-l-2 border-yellow-400 text-yellow-300 pl-6' 
                : 'text-white/90 hover:bg-yellow-500/10 hover:pl-6 hover:text-yellow-200'
            }`}
        >
            {children}
            {active && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 mt-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"
                />
            )}
        </Link>
    </motion.div>
);

export default Navbar;