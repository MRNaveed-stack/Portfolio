import { motion } from 'framer-motion';
import { ArrowRight, Mail, Braces, Cloud, Database, Cpu, Container, Network } from 'lucide-react';

const orbitItems = [
    { label: 'Go', icon: Braces, className: 'top-1/2 left-1/2 text-cyan-300' },
    { label: 'AWS', icon: Cloud, className: 'top-1/2 left-1/2 text-orange-300' },
    { label: 'Postgres', icon: Database, className: 'top-1/2 left-1/2 text-blue-300' },
    { label: 'AI', icon: Cpu, className: 'top-1/2 left-1/2 text-purple-300' },
    { label: 'Docker', icon: Container, className: 'top-1/2 left-1/2 text-sky-300' },
    { label: 'gRPC', icon: Network, className: 'top-1/2 left-1/2 text-violet-300' },
];

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-[42rem] h-[42rem] rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-32 top-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
            />

            <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
                <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 animate-orbit" />
                <div className="absolute left-1/2 top-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/10 animate-orbit-reverse" />

                {orbitItems.map(({ label, icon: Icon, className }, index) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: [0.45, 0.9, 0.45], scale: [0.96, 1.04, 0.96] }}
                        transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                        className={`absolute ${className} -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-lg text-xs font-semibold`}
                        style={{ transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(${index % 2 === 0 ? 150 : 190}px) rotate(-${index * 60}deg)` }}
                    >
                        <Icon className="w-3.5 h-3.5" />
                        {label}
                    </motion.div>
                ))}

                {[...Array(12)].map((_, index) => (
                    <span
                        key={index}
                        className="absolute w-1 h-1 rounded-full bg-blue-300/60 animate-particle"
                        style={{
                            left: `${12 + ((index * 17) % 76)}%`,
                            top: `${15 + ((index * 23) % 68)}%`,
                            animationDelay: `${index * 0.35}s`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-3xl relative z-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-400/20 text-sm text-slate-200 mb-8 backdrop-blur-md shadow-lg shadow-blue-950/10"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    Backend-Focused <br className="hidden md:block" />
                    <span className="text-gradient">Full-Stack Engineer.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="text-xl md:text-2xl font-medium text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    I build end-to-end applications with scalable backends, modern frontends, and cloud infrastructure — while growing toward full-stack AI engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold shadow-lg shadow-blue-950/20 hover:bg-slate-100 transition-colors"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 border border-slate-400/20 text-slate-100 font-medium hover:bg-slate-700/60 transition-colors backdrop-blur-md"
                    >
                        <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" />
                        Contact Me
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
