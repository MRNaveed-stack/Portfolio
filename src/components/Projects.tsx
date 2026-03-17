import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: "Performance Management System",
        description: "Enterprise-level backend with optimized SQL procedures running 15% faster under high load.",
        stack: ["Go", "PostgreSQL", "JWT Auth", "Docker"],
        links: { github: "https://github.com/MRNaveed-stack/Performance-Management-System" }
    },
    {
        title: "Node Secure Backend APIs",
        description: "Robust authentication system featuring refresh tokens, password resets, and protected CRUD infrastructure.",
        stack: ["Node.js", "Express", "MongoDB", "Auth Lifecycle"],
        links: { github: "https://github.com/MRNaveed-stack/node-secure-backend-api" }
    },
    {
        title: "PyMeet",
        description: "Real-time communication platform bridging Jitsi and custom Firebase signaling for virtual meetings.",
        stack: ["Python", "PyQt", "Firebase", "WebRTC"],
        links: { github: "https://github.com/MRNaveed-stack/PyMeet-" }
    },
    {
        title: "Smart Agriculture System",
        description: "AI-powered farming framework relying on a highly concurrent Go backend for rapid market data integration.",
        stack: ["Go", "PostgreSQL", "Gemini AI"],
        links: { github: "https://github.com/MRNaveed-stack/Smart-Agriculture-System" }
    },
    {
        title: "InfluenceIQ",
        description: "Complex influencer matching engine utilizing Gemini AI and robust relational data modeling.",
        stack: ["Go", "PostgreSQL", "Gemini AI", "Data Architecture"],
        links: { github: "https://github.com/MRNaveed-stack/InfluenceIQ" }
    },
    {
        title: "E-Commerce Architecture",
        description: "Full-stack application demonstrating seamless integration between a Node.js backend and React TS client.",
        stack: ["TypeScript", "Node.js", "PostgreSQL", "React"],
        links: { demo: "https://my-e-commerce-z5c4.onrender.com/" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -ml-64" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-neutral-400 max-w-2xl">A selection of my backend and system engineering work, focusing on performance, security, and scalable architecture.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group glass-card rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] hover:border-purple-500/30"
                        >
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                            <p className="text-neutral-400 mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map((tech, sIdx) => (
                                    <span key={sIdx} className="text-xs px-2 py-1 bg-white/5 text-neutral-300 rounded border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-4 border-t border-white/10 pt-4">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-white text-neutral-400 transition-colors">
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-white text-neutral-400 transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
