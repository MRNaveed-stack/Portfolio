import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ShieldCheck, LayoutTemplate, Box, Globe } from 'lucide-react';

const skillCategories = [
    {
        title: "Backend & Architecture",
        icon: <Server className="w-6 h-6 text-purple-400" />,
        skills: ["Go (Gin)", "Node.js (Express)", "Python (Flask)", "RESTful APIs", "Concurrency"]
    },
    {
        title: "Data Engineering",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        skills: ["PostgreSQL", "MongoDB", "SQLite", "SQL Optimization", "Data Modeling"]
    },
    {
        title: "Security & Auth",
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
        skills: ["JWT Lifecycle", "Refresh Tokens", "Role-Based Access", "Rate Limiting"]
    },
    {
        title: "Infrastructure",
        icon: <Globe className="w-6 h-6 text-orange-400" />,
        skills: ["Linux Servers", "VPS Hosting", "Render", "Nginx", "Docker Basics"]
    },
    {
        title: "Frontend Integration",
        icon: <LayoutTemplate className="w-6 h-6 text-pink-400" />,
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"]
    },
    {
        title: "Tools & Ecosystems",
        icon: <Box className="w-6 h-6 text-yellow-400" />,
        skills: ["Git/GitHub", "Gemini AI API", "Postman", "WebSockets"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 border-t border-white/5 bg-black/20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">A comprehensive overview of my technical stack, categorized by domain expertise rather than just a flat list.</p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass p-6 rounded-2xl flex flex-col h-full hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="text-sm px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
