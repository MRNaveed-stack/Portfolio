import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,transparent_50%)] z-[-1]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-3xl"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    Backend Engineer. <br className="hidden md:block" />
                    <span className="text-gradient">Scalable APIs.</span>
                </h1>

                <p className="text-xl md:text-2xl font-medium text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    I build high-performance systems, rock-solid auth, and optimized databases.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                        <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
