import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    { title: "Performance Management System", description: "Enterprise-level backend with optimized SQL procedures running 15% faster under high load.", stack: ["Go", "PostgreSQL", "JWT Auth", "Docker"], links: { github: "https://github.com/MRNaveed-stack/Performance-Management-System" } },
    { title: "LinkPulse", description: "Developer-first link-in-bio platform with customizable profiles, real-time click analytics, secure JWT & Google OAuth authentication, and production deployment on AWS ECS Fargate.", stack: ["Go", "Gin", "React", "TypeScript", "PostgreSQL", "Docker", "Terraform", "AWS ECS Fargate", "RDS", "ECR", "ALB", "GitHub Actions"], links: { github: "https://github.com/MRNaveed-stack/LinkPulse" } },
    { title: "Node Secure Backend APIs", description: "Robust authentication system featuring refresh tokens, password resets, and protected CRUD infrastructure.", stack: ["Node.js", "Express", "MongoDB", "Auth Lifecycle"], links: { github: "https://github.com/MRNaveed-stack/node-secure-backend-api" } },
    { title: "Go Multi Warehouse Backend", description: "Production-grade pure Go backend featuring JWT/RBAC, idempotent APIs, Redis, and multi-warehouse inventory. Includes workers and audit logs; deployed on AWS EC2 with Nginx/HTTPS.", stack: ["Go", "PostgreSQL", "Redis", "AWS-EC2"], links: { github: "https://github.com/MRNaveed-stack/go-multi-warehouse-backend" } },
    { title: "PyMeet", description: "Real-time communication platform bridging Jitsi and custom Firebase signaling for virtual meetings.", stack: ["Python", "PyQt", "Firebase", "WebRTC"], links: { github: "https://github.com/MRNaveed-stack/PyMeet-" } },
    { title: "Smart Agriculture System", description: "AI-powered farming framework relying on a highly concurrent Go backend for rapid market data integration.", stack: ["Go", "PostgreSQL", "Gemini AI"], links: { github: "https://github.com/MRNaveed-stack/Smart-Agriculture-System" } },
    { title: "InfluenceIQ", description: "Complex influencer matching engine utilizing Gemini AI and robust relational data modeling.", stack: ["Go", "PostgreSQL", "Gemini AI", "Data Architecture"], links: { github: "https://github.com/MRNaveed-stack/InfluenceIQ" } },
    { title: "E-Commerce Architecture", description: "Full-stack application demonstrating seamless integration between a Node.js backend and React TS client.", stack: ["TypeScript", "Node.js", "PostgreSQL", "React"], links: { demo: "https://my-e-commerce-z5c4.onrender.com/" } }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -ml-64 animate-drift" />
            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-purple-500/10 rounded-full blur-[110px] pointer-events-none animate-drift-reverse" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.3em] text-blue-300/70"
                    >
                        Selected Work
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-3">Featured Projects</h2>
                    <p className="text-neutral-400 max-w-2xl">A selection of my backend and system engineering work, focusing on performance, security, and scalable architecture.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40, rotateX: 5 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-70px" }}
                            transition={{ duration: 0.65, delay: idx * 0.08, ease: 'easeOut' }}
                            whileHover={{ y: -8 }}
                            className="project-card group glass-card rounded-2xl p-6 flex flex-col h-full relative overflow-hidden hover:shadow-[0_18px_55px_rgba(99,102,241,0.18)] hover:border-purple-400/30"
                        >
                            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-scan pointer-events-none" />
                            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-start justify-between gap-4 relative z-10">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                                <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                            </div>
                            <p className="text-neutral-400 mb-6 text-sm leading-relaxed flex-grow relative z-10">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                {project.stack.map((tech, sIdx) => (
                                    <motion.span
                                        key={sIdx}
                                        whileHover={{ y: -2 }}
                                        className="skill-pill text-xs px-2 py-1 bg-white/5 text-neutral-300 rounded border border-white/10"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-4 border-t border-white/10 pt-4 relative z-10">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-white text-neutral-400 transition-colors group/link">
                                        <Github className="w-4 h-4 group-hover/link:-rotate-12 transition-transform" /> Code
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-white text-neutral-400 transition-colors group/link">
                                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" /> Live Demo
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
