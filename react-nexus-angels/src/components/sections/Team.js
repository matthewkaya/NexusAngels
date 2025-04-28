import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    FaGithub, FaTwitter, FaLinkedin, FaPlus
} from 'react-icons/fa';

const Team = () => {
    const [hoveredMember, setHoveredMember] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    
    // Team members data
    const teamMembers = [
        {
            id: 1,
            name: 'Dr. Elena Voss',
            role: 'Founding Partner',
            bio: 'Former AI researcher at DeepMind, founded two successful AI startups (acquired by Google and Salesforce). PhD in Machine Learning from Stanford.',
            detailedBio: 'Dr. Voss spent 5 years leading AI research at DeepMind before founding her first AI startup, NeuralSense, which was acquired by Google in 2017. Her second venture, PredictiveAI, developed enterprise forecasting models and was acquired by Salesforce in 2020. She holds a PhD in Machine Learning from Stanford and has published over 30 papers in top-tier AI conferences. At Nexus Angels, she leads investments in artificial intelligence, machine learning, and data infrastructure startups.',
            achievements: ['Forbes 30 Under 30 in Technology', 'MIT Technology Review Innovator of the Year', '15 Patents in AI and Machine Learning'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            socials: {
                github: 'https://github.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://linkedin.com'
            }
        },
        {
            id: 2,
            name: 'Mark Chen',
            role: 'General Partner',
            bio: 'Former VP of Engineering at Stripe, led engineering teams at Twitter and Facebook. Built three infrastructure startups with two successful exits.',
            detailedBio: 'Mark served as VP of Engineering at Stripe where he scaled the team from 20 to 200+ engineers. Prior to that, he held senior engineering leadership positions at Twitter and Facebook. He founded three infrastructure startups, with successful exits to Oracle and Microsoft. Mark specializes in identifying and supporting founders building complex technical products with an emphasis on developer tools, infrastructure software, and fintech applications.',
            achievements: ['Led Stripe\'s payments infrastructure team', 'Scaled Twitter\'s real-time processing system', 'Creator of open source project CloudScale (25k+ GitHub stars)'],
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            socials: {
                github: 'https://github.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://linkedin.com'
            }
        },
        {
            id: 3,
            name: 'Sarah Johnson',
            role: 'Venture Partner',
            bio: 'Former biotech executive with 15 years in drug development. Led teams at Genentech and Moderna. Holds MD/PhD from Harvard Medical School.',
            detailedBio: 'Dr. Johnson brings 15 years of biotech industry experience to Nexus Angels. She served as Head of Early Development at Moderna and previously led research teams at Genentech. Her expertise in clinical development has helped bring 5 drugs to market that collectively generate over $3B in annual revenue. Sarah holds an MD/PhD from Harvard Medical School and completed her residency at Massachusetts General Hospital. She focuses on biotech, healthcare, and life sciences investments.',
            achievements: ['Led development of 2 FDA-approved drugs', 'Published in Nature, Science, and NEJM', '30+ patents in drug delivery systems'],
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            socials: {
                github: 'https://github.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://linkedin.com'
            }
        },
        {
            id: 4,
            name: 'James Rodriguez',
            role: 'Operating Partner',
            bio: 'Serial entrepreneur with 4 exits in fintech and blockchain. Former CTO at Coinbase. Built infrastructure used by 80% of crypto exchanges.',
            detailedBio: 'James is a serial entrepreneur with 4 successful exits in fintech and blockchain technology. As an early CTO at Coinbase, he architected key security and trading systems. His open-source blockchain infrastructure software is now used by over 80% of crypto exchanges worldwide. James advises portfolio companies on technical architecture, crypto economics, and scaling challenges. He specializes in blockchain, distributed systems, and financial infrastructure investments.',
            achievements: ['Built and sold 4 fintech startups', 'Scaled Coinbase during 100x growth period', 'Author of "Blockchain at Scale" (O\'Reilly Media)'],
            image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            socials: {
                github: 'https://github.com',
                twitter: 'https://twitter.com',
                linkedin: 'https://linkedin.com'
            }
        }
    ];

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

    // Open member detail modal
    const openMemberDetail = (member) => {
        setSelectedMember(member);
        setShowModal(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    // Close member detail modal
    const closeMemberDetail = () => {
        setShowModal(false);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    return (
        <section id="team" className="section py-20 bg-black">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sm font-semibold tracking-wider text-yellow-300 uppercase">Our People</span>
                    <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl neon-text">
                        Meet The Team
                    </h2>
                    <div className="mt-6 max-w-2xl mx-auto">
                        <p className="text-lg text-gray-300">
                            Seasoned operators turned investors with decades of combined experience.
                        </p>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member) => (
                        <TeamMemberCard 
                            key={member.id} 
                            member={member} 
                            variants={itemVariants}
                            isHovered={hoveredMember === member.id}
                            onHover={() => setHoveredMember(member.id)}
                            onLeave={() => setHoveredMember(null)}
                            onClick={() => openMemberDetail(member)}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Team Member Detail Modal */}
            {showModal && selectedMember && (
                <TeamMemberModal 
                    member={selectedMember}
                    onClose={closeMemberDetail}
                />
            )}
        </section>
    );
};

// Team member card component
const TeamMemberCard = ({ member, variants, isHovered, onHover, onLeave, onClick }) => {
    return (
        <motion.div 
            className="group relative bg-black/50 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-300 transition duration-300 neon-glow"
            variants={variants}
            whileHover={{ y: -5 }}
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            onClick={onClick}
        >
            <div className="h-64 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
                <motion.img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-yellow-300 text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">
                    {member.bio}
                </p>
                <motion.div 
                    className="mt-4 flex space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <SocialIcon href={member.socials.github} icon={<FaGithub />} />
                    <SocialIcon href={member.socials.twitter} icon={<FaTwitter />} />
                    <SocialIcon href={member.socials.linkedin} icon={<FaLinkedin />} />
                </motion.div>

                <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <button className="flex items-center space-x-2 px-4 py-2 border border-yellow-300 text-yellow-300 rounded-md hover:bg-yellow-300/10 transition">
                        <FaPlus />
                        <span>View Profile</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Social icon component
const SocialIcon = ({ href, icon }) => {
    return (
        <motion.a 
            href={href} 
            className="text-gray-400 hover:text-yellow-300 transition"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "#FFFF00" }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="w-5 h-5 block">{icon}</span>
        </motion.a>
    );
};

// Team member detail modal
const TeamMemberModal = ({ member, onClose }) => {
    return (
        <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
            
            <motion.div 
                className="relative bg-black w-full max-w-3xl border border-gray-800 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-yellow-300 z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className="md:flex">
                    <div className="md:w-1/3">
                        <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-80 md:h-full object-cover"
                        />
                    </div>
                    
                    <div className="p-6 md:w-2/3">
                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-yellow-300 text-lg mb-4">{member.role}</p>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-2">Biography</h4>
                            <p className="text-gray-300">{member.detailedBio}</p>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-2">Key Achievements</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                {member.achievements.map((achievement, index) => (
                                    <li key={index} className="text-gray-300">{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="flex space-x-4 pt-4 border-t border-gray-800">
                            <SocialIcon href={member.socials.github} icon={<FaGithub />} />
                            <SocialIcon href={member.socials.twitter} icon={<FaTwitter />} />
                            <SocialIcon href={member.socials.linkedin} icon={<FaLinkedin />} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Team;