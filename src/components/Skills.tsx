import { motion } from 'framer-motion';
import { Server, Database, ShieldCheck, LayoutTemplate, Box, Globe } from 'lucide-react';

const skillCategories = [
    { title: "Backend & Architecture", icon: <Server className="w-6 h-6 text-purple-400" />, skills: ["Go (Gin)", "Node.js (Express)", "Python", "RESTful APIs", "gRPC", "WebSockets", "Concurrency"] },
    { title: "Frontend Engineering", icon: <LayoutTemplate className="w-6 h-6 text-pink-400" />, skills: ["React", "TypeScript", "Tailwind CSS", "Zod", "Zustand", "HTML/CSS"] },
    { title: "Databases & Data", icon: <Database className="w-6 h-6 text-blue-400" />, skills: ["PostgreSQL", "MongoDB", "SQLite", "SQL Optimization", "Data Modeling"] },
    { title: "Security & Authentication", icon: <ShieldCheck className="w-6 h-6 text-green-400" />, skills: ["JWT Lifecycle", "Refresh Tokens", "Role-Based Access", "Rate Limiting"] },
    { title: "Cloud & DevOps", icon: <Globe className="w-6 h-6 text-orange-400" />, skills: ["AWS EC2", "AWS ECS Fargate", "AWS RDS", "AWS ECR", "Application Load Balancer", "AWS IAM", "AWS CloudWatch", "Docker", "Terraform", "GitHub Actions", "CI/CD"] },
    { title: "Tools & Ecosystem", icon: <Box className="w-6 h-6 text-yellow-400" />, skills: ["Git/GitHub", "Linux", "Nginx", "VPS Hosting", "Render", "Postman", "Gemini AI API"] }
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 25, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1 } };

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 border-t border-white/5 bg-black/20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-20 left-[8%] w-px h-64 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-drift" />
                <div className="absolute bottom-20 right-[12%] w-px h-72 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-drift-reverse" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.3em] text-purple-300/70"
                    >
                        Engineering Stack
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-3">Technical Arsenal</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">A comprehensive overview of my technical stack, categorized by domain expertise rather than just a flat list.</p>
                </div>

                <div className="relative mb-14 hidden md:block h-24 overflow-hidden">
                    <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent" />
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.span
                            key={i}
                            className="absolute top-1/2 w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(96,165,250,.8)]"
                            initial={{ left: '8%', opacity: 0 }}
                            animate={{ left: ['8%', '92%'], opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 4, delay: i * 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                    ))}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="px-5 py-2 rounded-full border border-purple-400/20 bg-slate-900/80 backdrop-blur-md text-xs tracking-widest text-slate-300">FRONTEND → API → DATA → CLOUD → AI</span>
                    </div>
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
                            whileHover={{ y: -7, scale: 1.015 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            className="glass p-6 rounded-2xl flex flex-col h-full relative overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-36 h-36 rounded-full bg-purple-500/10 blur-3xl animate-glow pointer-events-none" />
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <motion.div whileHover={{ rotate: 8, scale: 1.08 }} className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    {category.icon}
                                </motion.div>
                                <h3 className="font-semibold text-lg">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-pill text-sm px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300">
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
