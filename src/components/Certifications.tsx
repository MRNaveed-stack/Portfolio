import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, Sparkles } from 'lucide-react';

const certifications = [
    {
        title: "Backend Development Internship",
        issuer: "Smart Fusion Company",
        description: "Completed an intensive backend development internship focusing on production API design and performance profiling.",
        pdfLink: "3.pdf"
    },
    {
        title: "Erasmus+ CATCH_VR Summer School 2026",
        issuer: "GIK Institute",
        description: "Hands-on bootcamp focused on Immersive Technologies, IoT, Digital Twins, Unity 3D, sensors, Arduino, and hardware-software integration.",
        pdfLink: "catch-vr-certificate.jpeg"
    },
    {
        title: "Freelance Certified Developer",
        issuer: "micro1",
        description: "Verified as an elite freelance developer through comprehensive technical assessments.",
        pdfLink: "2.jpg"
    },
    {
        title: "Python Specialization Capstone",
        issuer: "Coursera",
        description: "Final capstone project demonstrating advanced Python development techniques, data analysis, and automation scripts.",
        pdfLink: "1.pdf"
    },
    {
        title: "AI For Everyone",
        issuer: "Coursera",
        description: "Fundamental understanding of AI systems, capabilities, and ethical implementations in modern software.",
        pdfLink: "4.pdf"
    },
    {
        title: "Visio Spark Debugging Certificate",
        issuer: "Visio Spark",
        description: "Advanced debugging, troubleshooting, and problem-solving certification.",
        pdfLink: "5.jpeg"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-1/2 top-24 w-[420px] h-[420px] -translate-x-1/2 rounded-full border border-purple-400/[0.06] animate-cert-orbit" />
                <div className="absolute left-1/2 top-24 w-[280px] h-[280px] -translate-x-1/2 rounded-full border border-blue-400/[0.06] animate-cert-orbit-reverse" />
                <div className="absolute left-1/2 top-24 w-2 h-2 -translate-x-1/2 rounded-full bg-purple-300/50 shadow-[0_0_24px_rgba(167,139,250,.5)] animate-cert-pulse" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.65 }}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-300/70 mb-4">
                        <ShieldCheck className="w-4 h-4" /> Verified learning
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-neutral-400 max-w-2xl">Continuous learning and professional verification of my engineering capabilities.</p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-purple-400/0 via-purple-400/30 to-blue-400/0 hidden md:block" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.65, delay: idx * 0.08, type: 'spring', stiffness: 80 }}
                                whileHover={{ y: -7, rotateX: 1, rotateY: idx % 2 === 0 ? 1 : -1 }}
                                className="group relative glass p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start overflow-hidden [transform-style:preserve-3d]"
                            >
                                <motion.div
                                    animate={{ y: [0, -4, 0], rotate: [0, 2, 0] }}
                                    transition={{ duration: 4 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                                    className="relative p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 group-hover:bg-purple-500/15 group-hover:border-purple-400/40 transition-colors"
                                >
                                    <FileText className="w-8 h-8" />
                                    <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-blue-300/70 animate-ping" />
                                </motion.div>

                                <div className="flex-grow flex flex-col relative z-10">
                                    <h3 className="text-xl font-bold mb-1 text-white">{cert.title}</h3>
                                    <p className="text-sm font-medium text-purple-400 mb-3">{cert.issuer}</p>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">{cert.description}</p>

                                    <a
                                        href={cert.pdfLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-lg text-sm font-medium transition-all"
                                    >
                                        <Download className="w-4 h-4" />
                                        View Certificate
                                    </a>
                                </div>

                                <Sparkles className="absolute -right-8 -top-8 w-24 h-24 text-purple-300/[0.04] group-hover:text-purple-300/10 group-hover:rotate-12 transition-all duration-700" />
                                <div className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-purple-400/0 via-purple-400/70 to-blue-400/0 group-hover:w-full transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
