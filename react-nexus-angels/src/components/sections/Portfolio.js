import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
    // Category state for filtering
    const [activeCategory, setActiveCategory] = useState('all');
    
    // Portfolio items data
    const portfolioItems = [
        {
            id: 1,
            name: 'Neurosynth AI',
            logo: 'NEUROSYNTH',
            description: 'Brain-computer interfaces for cognitive enhancement',
            tags: ['AI', 'Neuroscience', 'Seed'],
            invested: '2023',
            performance: '+320%',
            category: 'ai'
        },
        {
            id: 2,
            name: 'Quantara',
            logo: 'QUANTARA',
            description: 'Post-quantum cryptography solutions',
            tags: ['Cybersecurity', 'Quantum', 'Series A'],
            invested: '2021',
            performance: 'Acquired',
            category: 'cybersecurity'
        },
        {
            id: 3,
            name: 'Nanovivo',
            logo: 'NANOVIVO',
            description: 'Targeted drug delivery using nanorobotics',
            tags: ['Biotech', 'Healthcare', 'Series B'],
            invested: '2020',
            performance: '+780%',
            category: 'biotech'
        },
        {
            id: 4,
            name: 'SolarCore',
            logo: 'SOLARCORE',
            description: 'Next-gen perovskite solar cells',
            tags: ['Clean Energy', 'Hardware', 'Seed'],
            invested: '2022',
            performance: '+150%',
            category: 'cleantech'
        },
        {
            id: 5,
            name: 'Cryptonaut',
            logo: 'CRYPTONAUT',
            description: 'Decentralized identity protocols',
            tags: ['Blockchain', 'Web3', 'Pre-Seed'],
            invested: '2023',
            performance: 'Early Stage',
            category: 'blockchain'
        },
        {
            id: 6,
            name: 'Aerolith',
            logo: 'AEROLITH',
            description: 'Carbon-negative building materials',
            tags: ['Climate Tech', 'Materials', 'Series A'],
            invested: '2021',
            performance: '+420%',
            category: 'cleantech'
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    // Filter portfolio items by category
    const filteredItems = activeCategory === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <section id="portfolio" className="section py-20 bg-black">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-wider text-yellow-300 uppercase">Our Investments</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl neon-text">
                        Portfolio Companies
                    </h2>
                    <div className="mt-6 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-300">
                            A selection of visionary companies we're proud to support.
                        </p>
                    </div>
                </motion.div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    <CategoryButton 
                        active={activeCategory === 'all'} 
                        onClick={() => setActiveCategory('all')}
                    >
                        All
                    </CategoryButton>
                    <CategoryButton 
                        active={activeCategory === 'ai'} 
                        onClick={() => setActiveCategory('ai')}
                    >
                        AI
                    </CategoryButton>
                    <CategoryButton 
                        active={activeCategory === 'blockchain'} 
                        onClick={() => setActiveCategory('blockchain')}
                    >
                        Blockchain
                    </CategoryButton>
                    <CategoryButton 
                        active={activeCategory === 'biotech'} 
                        onClick={() => setActiveCategory('biotech')}
                    >
                        Biotech
                    </CategoryButton>
                    <CategoryButton 
                        active={activeCategory === 'cleantech'} 
                        onClick={() => setActiveCategory('cleantech')}
                    >
                        Cleantech
                    </CategoryButton>
                    <CategoryButton 
                        active={activeCategory === 'cybersecurity'} 
                        onClick={() => setActiveCategory('cybersecurity')}
                    >
                        Cybersecurity
                    </CategoryButton>
                </div>
                
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filteredItems.map(item => (
                        <PortfolioCard key={item.id} item={item} variants={itemVariants} />
                    ))}
                </motion.div>
                
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.button
                        className="inline-flex items-center px-6 py-3 border border-yellow-300 text-yellow-300 font-medium rounded-md hover:bg-yellow-300/10 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Full Portfolio
                        <FaArrowRight className="ml-2" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

// Category filter button
const CategoryButton = ({ active, onClick, children }) => {
    return (
        <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active 
                    ? 'bg-yellow-300 text-black' 
                    : 'bg-black border border-gray-700 text-gray-300 hover:border-yellow-300'
            }`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

// Portfolio card component
const PortfolioCard = ({ item, variants }) => {
    return (
        <motion.div 
            className="group relative bg-black/50 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-300 transition duration-300 neon-glow"
            variants={variants}
            whileHover={{ y: -5 }}
        >
            <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
                <motion.div 
                    className="text-3xl font-bold text-yellow-300 opacity-80 group-hover:opacity-100 transition"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 0] }}
                    transition={{
                        duration: 0.5,
                        rotate: { duration: 0.5, ease: "easeInOut" }
                    }}
                >
                    {item.logo}
                </motion.div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="text-xs px-3 py-1 rounded-full bg-yellow-300/10 text-yellow-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Invested: {item.invested}</span>
                    <span className="text-sm font-medium text-yellow-300">{item.performance}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;