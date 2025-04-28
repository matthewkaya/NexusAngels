import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaUsers } from 'react-icons/fa';

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="section dark-section py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-wider text-yellow-300 uppercase">Who We Are</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl neon-text">
                        More Than Capital
                    </h2>
                    <div className="mt-6 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-300">
                            We're a collective of experienced operators, investors, and technologists passionate about supporting exceptional founders.
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-300 transition duration-300 neon-glow"
                        variants={itemVariants}
                    >
                        <div className="w-12 h-12 rounded-full bg-yellow-300/10 flex items-center justify-center mb-6">
                            <FaBolt className="h-6 w-6 text-yellow-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                        <p className="text-gray-400">
                            To accelerate human progress by funding and supporting breakthrough technologies that solve meaningful problems.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-300 transition duration-300 neon-glow"
                        variants={itemVariants}
                    >
                        <div className="w-12 h-12 rounded-full bg-yellow-300/10 flex items-center justify-center mb-6">
                            <FaShieldAlt className="h-6 w-6 text-yellow-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Our Focus</h3>
                        <p className="text-gray-400">
                            We specialize in early-stage investments in frontier technologies with potential for exponential growth and societal impact.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-yellow-300 transition duration-300 neon-glow"
                        variants={itemVariants}
                    >
                        <div className="w-12 h-12 rounded-full bg-yellow-300/10 flex items-center justify-center mb-6">
                            <FaUsers className="h-6 w-6 text-yellow-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Our Approach</h3>
                        <p className="text-gray-400">
                            We take a hands-on approach, leveraging our network and expertise to help portfolio companies navigate critical growth phases.
                        </p>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="mt-16 grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Why Angel Investing?</h3>
                        <p className="text-gray-300 mb-6">
                            Angel investing represents the earliest stage of venture capital, where individual investors provide funding to startups in exchange for equity. It's high-risk but offers the potential for outsized returns and the opportunity to shape the future.
                        </p>
                        <p className="text-gray-300 mb-6">
                            At Nexus Angels, we've developed a disciplined approach to identifying and supporting exceptional founders at this critical stage.
                        </p>
                        <motion.div 
                            className="flex space-x-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.div 
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="text-3xl font-bold text-yellow-300">8.7x</div>
                                <div className="text-sm text-gray-400">Avg. MOIC</div>
                            </motion.div>
                            <motion.div 
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="text-3xl font-bold text-yellow-300">42%</div>
                                <div className="text-sm text-gray-400">Follow-on Rate</div>
                            </motion.div>
                            <motion.div 
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <div className="text-3xl font-bold text-yellow-300">18</div>
                                <div className="text-sm text-gray-400">Exits</div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="relative">
                        <motion.div 
                            className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-yellow-300/10 blur-3xl"
                            animate={{ 
                                opacity: [0.1, 0.3, 0.1],
                                scale: [0.9, 1.1, 0.9]
                            }}
                            transition={{ 
                                duration: 8, 
                                repeat: Infinity
                            }}
                        />
                        <motion.div 
                            className="relative bg-black/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm"
                            whileHover={{ boxShadow: "0 0 25px rgba(255, 255, 0, 0.3)" }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Ideal Investment Profile</h4>
                            <div className="space-y-4">
                                <ProfileBar title="Technical Founders" percentage={90} />
                                <ProfileBar title="Pre-Revenue" percentage={75} />
                                <ProfileBar title="Deep Tech" percentage={85} />
                                <ProfileBar title="First-Time Founders" percentage={60} />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Custom component for the animated profile bars
const ProfileBar = ({ title, percentage }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">{title}</span>
                <span className="text-sm font-medium text-yellow-300">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div 
                    className="bg-yellow-300 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </div>
        </div>
    );
};

export default About;