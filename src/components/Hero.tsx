import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

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
