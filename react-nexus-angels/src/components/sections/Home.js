import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaArrowRight, FaPlay } from 'react-icons/fa';

const Home = () => {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        });
    }, [controls]);

    // Enhanced number counter effect with smoother animation
    const [count, setCount] = useState({ value: 0 });
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const incrementBy = Math.max(1, Math.floor(50 - count.value) / 10);
            if (count.value < 50) {
                setCount((prev) => ({ value: Math.min(50, prev.value + incrementBy) }));
            }
        }, 30);
        
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <section id="home" className="section relative min-h-screen pt-20 flex items-center overflow-hidden">
            {/* Enhanced particle background effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
                
                {/* Enhanced background with better image and overlay */}
                <div 
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"
                    style={{ filter: 'contrast(1.1) saturate(1.2)' }}
                ></div>
                
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
                
                {/* Enhanced animated particles with more dynamic movement */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-yellow-300/20"
                        style={{
                            width: Math.random() * 8 + 4,
                            height: Math.random() * 8 + 4,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() > 0.5 ? -30 : 30, 0],
                            x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
                
                {/* Animated grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            </div>
            
            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto py-16 lg:py-24">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div 
                        className="md:w-1/2 mb-16 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="mb-4 inline-block"
                        >
                            <span className="px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 text-sm font-semibold tracking-widest uppercase flex items-center">
                                <motion.span 
                                    className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.span>
                                Venture Capital Reimagined
                            </span>
                        </motion.div>
                        
                        <motion.h1 
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Fueling <motion.span 
                                className="gradient-text animate-gradient"
                                animate={{ 
                                    textShadow: [
                                        "0 0 7px rgba(255,255,0,0.3)",
                                        "0 0 10px rgba(255,255,0,0.5)",
                                        "0 0 7px rgba(255,255,0,0.3)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >Tomorrow's</motion.span> <br className="hidden md:block" />Innovations
                        </motion.h1>
                        
                        <motion.p 
                            className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            We identify and invest in visionary entrepreneurs building transformative companies that 
                            <motion.span
                                className="text-yellow-300 mx-2 inline-block"
                                animate={{
                                    opacity: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            >
                                redefine industries
                            </motion.span>
                            and shape the future.
                        </motion.p>
                        
                        <motion.div 
                            className="flex flex-wrap gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            <Link 
                                to="contact"
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                                className="btn btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center gap-2 group"
                            >
                                <span>Pitch Your Idea</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
                                >
                                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.div>
                            </Link>
                            
                            <Link 
                                to="portfolio"
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                                className="border border-yellow-500/30 bg-transparent text-yellow-300 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-yellow-500/10 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                            >
                                <span>Our Investments</span>
                                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-8 sm:mt-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10">
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        animate={{
                                            boxShadow: ['0 0 0 0 rgba(255,255,0,0.4)', '0 0 0 10px rgba(255,255,0,0)'],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    />
                                    <div 
                                        className="w-10 h-10 rounded-full bg-yellow-500/20 backdrop-blur-sm flex items-center justify-center border border-yellow-500/30 cursor-pointer hover:bg-yellow-500/30 transition-all duration-300"
                                        onClick={() => setVideoModalOpen(true)}
                                    >
                                        <FaPlay className="text-yellow-300 w-3 h-3 ml-0.5" />
                                    </div>
                                </div>
                                <span className="text-yellow-300/90 font-medium text-sm">Watch our story</span>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="hidden sm:block w-0.5 h-12 bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent mr-8 opacity-70"></div>
                                <div className="flex flex-col items-start">
                                    <div className="flex items-baseline">
                                        <motion.span 
                                            className="text-3xl font-bold text-yellow-300"
                                            animate={{
                                                textShadow: ['0 0 0px rgba(255,255,0,0)', '0 0 10px rgba(255,255,0,0.5)', '0 0 0px rgba(255,255,0,0)']
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                            }}
                                        >
                                            ${count.value}M+
                                        </motion.span>
                                    </div>
                                    <span className="text-sm text-yellow-100/70">Capital deployed</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="md:w-1/2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <div className="relative w-full max-w-md">
                            {/* Enhanced animated glowing orbs */}
                            <motion.div 
                                className="absolute -top-20 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400/10 to-transparent blur-2xl"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            
                            <motion.div 
                                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-tl from-yellow-300/15 to-transparent blur-2xl"
                                animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.15, 0.25, 0.15]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 2
                                }}
                            />
                            
                            {/* Enhanced card with glassmorphism effect */}
                            <motion.div 
                                className="relative glass-panel overflow-hidden z-10 backdrop-blur-md border border-yellow-500/15 shadow-lg shadow-yellow-500/5"
                                whileHover={{ y: -7, boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 15px rgba(255,255,0,0.2)' }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                {/* Enhanced card header with terminal look */}
                                <div className="relative flex items-center mb-6">
                                    <div className="absolute -top-7 -left-7 w-14 h-14 rounded-full bg-yellow-300/10 blur-xl"></div>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs bg-black/30 ml-auto px-2 py-0.5 rounded text-gray-400 tracking-wider">nexus_angels.sh</div>
                                </div>
                                
                                <motion.h3 
                                    className="text-lg sm:text-xl font-bold gradient-text mb-6"
                                    animate={{
                                        textShadow: ['0 0 0px rgba(255,255,0,0)', '0 0 5px rgba(255,255,0,0.3)', '0 0 0px rgba(255,255,0,0)']
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    Investment Highlights
                                </motion.h3>
                                
                                <ul className="space-y-4 sm:space-y-5">
                                    {[
                                        { text: "$50M+ deployed across 42 companies", delay: 0.8, icon: "💰" },
                                        { text: "Focus on AI, Blockchain & Biotech", delay: 1.0, icon: "🧠" },
                                        { text: "Average check size: $250K - $2M", delay: 1.2, icon: "✅" },
                                        { text: "Active hands-on support & mentorship", delay: 1.4, icon: "🚀" }
                                    ].map((item, index) => (
                                        <motion.li 
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: item.delay, duration: 0.5 }}
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center mr-4">
                                                <span className="text-yellow-300 text-xs">{item.icon}</span>
                                            </div>
                                            <span className="text-white/90">{item.text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                
                                {/* Enhanced decorative lines */}
                                <div className="absolute bottom-4 right-4 w-20 h-20">
                                    <div className="absolute bottom-0 right-0 w-12 h-1 bg-yellow-500/20"></div>
                                    <div className="absolute bottom-0 right-0 h-12 w-1 bg-yellow-500/20"></div>
                                </div>
                                
                                {/* Enhanced terminal cursor blink effect */}
                                <div className="mt-6 flex items-center">
                                    <span className="text-green-400">❯</span>
                                    <span className="text-gray-400 ml-2">ready to invest</span>
                                    <motion.div 
                                        className="w-2 h-5 bg-yellow-300/70 ml-2"
                                        animate={{
                                            opacity: [1, 0, 1]
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Enhanced scroll indicator with better animation */}
            <motion.div 
                className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    delay: 2,
                    duration: 0.5
                }}
            >
                <Link
                    to="about"
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={800}
                    className="cursor-pointer group"
                >
                    <motion.div
                        className="w-10 h-10 rounded-full border border-yellow-500/30 flex items-center justify-center text-yellow-300"
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        whileHover={{
                            scale: 1.1,
                            borderColor: "rgba(255, 255, 0, 0.5)",
                            boxShadow: "0 0 10px rgba(255, 255, 0, 0.3)"
                        }}
                    >
                        <FaChevronDown className="h-3 w-3 group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                    <div className="text-xs text-yellow-300/50 text-center mt-2 group-hover:text-yellow-300 transition-colors duration-300">Explore</div>
                </Link>
            </motion.div>
            
            {/* Enhanced video modal with better animations */}
            <AnimatePresence>
                {videoModalOpen && (
                    <motion.div 
                        className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setVideoModalOpen(false)}
                    >
                        <motion.div 
                            className="relative bg-black/90 rounded-lg overflow-hidden w-full max-w-4xl border border-yellow-500/20 shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center z-10 hover:bg-black transition-colors duration-300 border border-white/10"
                                onClick={() => setVideoModalOpen(false)}
                            >
                                <FaTimes className="text-white" />
                            </button>
                            <div className="p-1 aspect-video">
                                <iframe
                                    className="w-full h-full rounded"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                    title="Nexus Angels Story"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// This component will show a nice "X" close button in the modal
const FaTimes = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={{ width: '16px', height: '16px' }}
    >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
);

export default Home;