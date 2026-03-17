import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/3" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass p-12 rounded-3xl"
                >
                    <h2 className="text-4xl font-bold mb-6">Let's build something scalable.</h2>
                    <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
                        I'm always open to discussing backend architecture, backend engineering roles, or solving complex database and API challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:naveedkhosa2006@gmail.com"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors w-full sm:w-auto"
                        >
                            <Mail className="w-5 h-5" />
                            Say Hello
                        </a>
                        <a
                            href="https://wa.me/923297729363"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 font-semibold rounded-xl hover:bg-white/5 transition-colors w-full sm:w-auto"
                        >
                            WhatsApp Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 pt-12 border-t border-white/10">
                        <a href="https://github.com/MRNaveed-stack" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/15 text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-naveed-qasim-330345323/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/15 text-neutral-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
