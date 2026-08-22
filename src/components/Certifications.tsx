
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

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
        <section id="certifications" className="py-24 px-6 border-t border-white/5 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-neutral-400 max-w-2xl">Continuous learning and professional verification of my engineering capabilities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:bg-white/[0.05] transition-colors"
                        >
                            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                                <FileText className="w-8 h-8" />
                            </div>

                            <div className="flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-1 text-white">{cert.title}</h3>
                                <p className="text-sm font-medium text-purple-400 mb-3">{cert.issuer}</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {cert.description}
                                </p>

                                <a
                                    href={cert.pdfLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    View Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
