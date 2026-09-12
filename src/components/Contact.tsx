import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/3" />

            <div className="absolute left-1/2 top-20 -translate-x-1/2 pointer-events-none" aria-hidden="true">
                <div className="contact-signal contact-signal-one" />
                <div className="contact-signal contact-signal-two" />
                <div className="contact-signal contact-signal-three" />
                <div className="contact-core" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
                    className="glass p-12 rounded-3xl relative overflow-hidden"
                >
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }}
                        className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
                    />

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-400/15 bg-purple-400/5 text-xs text-purple-300/80 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
                        Connection open
                    </div>

                    <h2 className="text-4xl font-bold mb-6">Let's build something scalable.</h2>
                    <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
                        I'm always open to discussing backend architecture, backend engineering roles, or solving complex database and API challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="mailto:naveedkhosa2006@gmail.com"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors w-full sm:w-auto"
                        >
                            <Mail className="w-5 h-5" />
                            Say Hello
                            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/923297729363"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 font-semibold rounded-xl hover:bg-white/5 transition-colors w-full sm:w-auto"
                        >
                            WhatsApp Me
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 group-hover:animate-ping" />
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 pt-12 border-t border-white/10">
                        <motion.a href="https://github.com/MRNaveed-stack" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, rotate: -4 }} className="p-3 bg-white/5 rounded-full hover:bg-white/15 text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/muhammad-naveed-qasim-330345323/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, rotate: 4 }} className="p-3 bg-white/5 rounded-full hover:bg-white/15 text-neutral-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
