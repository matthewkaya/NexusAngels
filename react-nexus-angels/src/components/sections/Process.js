import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FaSearch, FaFilter, FaMicroscope, 
    FaUsers, FaHandsHelping
} from 'react-icons/fa';

const Process = () => {
    // State for selected step (for more detail)
    const [selectedStep, setSelectedStep] = useState(null);
    
    // Process steps data
    const steps = [
        {
            id: 1,
            icon: <FaSearch />,
            title: 'Deal Sourcing',
            description: 'We source deals through our extensive network of founders, universities, research labs, and incubators. All inbound submissions are reviewed by our team.',
            details: [
                'Direct founder introductions',
                'University research partnerships',
                'Incubator & accelerator relationships',
                'Open application process',
                'Industry conferences & events'
            ]
        },
        {
            id: 2,
            icon: <FaFilter />,
            title: 'Initial Screening',
            description: 'Our team conducts an initial review assessing market potential, technology differentiation, team strength, and fit with our investment thesis.',
            details: [
                'Team background verification',
                'Technology assessment',
                'Market sizing analysis',
                'Competitive landscape mapping',
                'Investment thesis alignment check'
            ]
        },
        {
            id: 3,
            icon: <FaMicroscope />,
            title: 'Deep Dive',
            description: 'Promising opportunities undergo technical due diligence, customer/reference calls, competitive analysis, and financial modeling.',
            details: [
                'Technical expert consultation',
                'Customer & reference interviews',
                'IP evaluation',
                'Financial model review',
                'Detailed competitive analysis'
            ]
        },
        {
            id: 4,
            icon: <FaUsers />,
            title: 'Investment Committee',
            description: 'Final decisions are made by our investment committee, composed of partners with deep sector expertise and successful track records.',
            details: [
                'Partner voting process',
                'Valuation & deal terms assessment',
                'Risk/reward analysis',
                'Portfolio fit consideration',
                'Terms sheet preparation'
            ]
        },
        {
            id: 5,
            icon: <FaHandsHelping />,
            title: 'Post-Investment Support',
            description: 'We actively support our portfolio companies with recruiting, business development, follow-on financing, and strategic guidance.',
            details: [
                'Board representation',
                'Key hire recruitment',
                'Business development introductions',
                'Follow-on fundraising strategy',
                'Founder coaching & mentoring'
            ]
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="process" className="section dark-section py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-wider text-yellow-300 uppercase">Our Methodology</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl neon-text">
                        Investment Process
                    </h2>
                    <div className="mt-6 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-300">
                            A transparent, rigorous approach to identifying and supporting exceptional founders.
                        </p>
                    </div>
                </motion.div>
                
                <div className="relative">
                    {/* Timeline line - desktop */}
                    <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
                    
                    {/* Timeline steps */}
                    <motion.div 
                        className="space-y-8 md:space-y-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {steps.map((step, index) => (
                            <TimelineStep 
                                key={step.id}
                                step={step}
                                isEven={index % 2 === 0}
                                isSelected={selectedStep === step.id}
                                onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                                variants={itemVariants}
                            />
                        ))}
                    </motion.div>
                </div>
                
                <motion.div 
                    className="mt-16 grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">What We Look For</h3>
                        <ul className="space-y-4">
                            <LookForItem>
                                <span className="font-medium text-white">Exceptional founders</span> with deep domain expertise and relentless execution capability
                            </LookForItem>
                            <LookForItem>
                                <span className="font-medium text-white">Breakthrough technologies</span> that can create or redefine large markets
                            </LookForItem>
                            <LookForItem>
                                <span className="font-medium text-white">Clear path to defensibility</span> through technology, network effects, or other moats
                            </LookForItem>
                            <LookForItem>
                                <span className="font-medium text-white">Capital efficiency</span> with potential for rapid scaling
                            </LookForItem>
                        </ul>
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
                        >
                            <h4 className="text-lg font-semibold text-yellow-300 mb-4">Typical Timeline</h4>
                            <div className="space-y-6">
                                <TimelineBar title="Initial Contact → First Meeting" duration="1-2 weeks" percentage={20} />
                                <TimelineBar title="Due Diligence Process" duration="2-4 weeks" percentage={40} />
                                <TimelineBar title="Term Sheet → Close" duration="1-2 weeks" percentage={20} />
                                
                                <div className="pt-4 border-t border-gray-800">
                                    <div className="text-sm text-gray-400">Total time from first contact to funding:</div>
                                    <div className="text-xl font-bold text-yellow-300">4-8 weeks</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Timeline step component
const TimelineStep = ({ step, isEven, isSelected, onClick, variants }) => {
    return (
        <motion.div 
            className="relative flex flex-col md:flex-row items-center cursor-pointer"
            variants={variants}
            onClick={onClick}
        >
            <motion.div 
                className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-300/10 flex items-center justify-center text-yellow-300 border border-yellow-300/50 absolute left-1/2 transform -translate-x-1/2 md:left-0 md:-translate-x-0 z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <span className="text-xl font-bold">{step.id}</span>
            </motion.div>
            <div className={`flex-grow md:ml-16 md:pl-8 md:pr-16 py-4 ${isEven ? '' : 'md:ml-auto md:mr-16 md:pl-16 md:pr-8'}`}>
                <motion.div 
                    className="bg-black/50 border border-gray-800 rounded-xl p-8 neon-glow"
                    whileHover={{ y: -5, boxShadow: "0 0 15px rgba(255, 255, 0, 0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-300/10 flex items-center justify-center text-yellow-300 mr-4">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-400">{step.description}</p>
                    
                    {isSelected && (
                        <motion.div 
                            className="mt-4 pt-4 border-t border-gray-800"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-sm font-medium text-yellow-300 mb-2">Key Components:</h4>
                            <ul className="space-y-1">
                                {step.details.map((detail, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        className="text-sm text-gray-300 flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <span className="text-yellow-300 text-xs mr-2 mt-1">▶</span> {detail}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                    
                    <div className="mt-3 text-sm text-center text-yellow-300">
                        {isSelected ? 'Click to collapse' : 'Click to expand'}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

// "What we look for" list item
const LookForItem = ({ children }) => {
    return (
        <motion.li 
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-yellow-300/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                </div>
            </div>
            <p className="ml-3 text-gray-300">{children}</p>
        </motion.li>
    );
};

// Timeline bar for the timeline visualization
const TimelineBar = ({ title, duration, percentage }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">{title}</span>
                <span className="text-sm font-medium text-yellow-300">{duration}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5">
                <motion.div 
                    className="bg-yellow-300 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </div>
        </div>
    );
};

export default Process;