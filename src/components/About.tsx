
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                    <div className="grid md:grid-cols-3 gap-10 items-center">
                        <div className="md:col-span-1 rounded-2xl overflow-hidden aspect-square border border-white/10 bg-white/5 flex items-center justify-center">
                            {/* Profile Image - Fallback using div for aesthetic until image is placed */}
                            <img
                                src="6.jpg"
                                alt="Muhammad Naveed Qasim"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                                <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                            </div>

                            <div className="space-y-4 text-neutral-300 leading-relaxed text-lg">
                                <p>
                                    Muhammad Naveed Qasim-Backend Engineer focused on performance, clean architecture, and data security.
                                </p>
                                <p>
                                    I design backend systems where APIs, databases, and servers act as the core of the product — not just storage.
                                </p>

                                <ul className="space-y-2 font-medium">
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> Build APIs with Go & Node.js</li>
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> Design JWT authentication systems</li>
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> Optimize SQL for high-throughput performance</li>
                                </ul>

                                <div className="bg-white/5 rounded-xl p-6 border border-white/10 my-6">
                                    <p className="font-semibold text-white mb-3">Currently working on:</p>
                                    <ul className="space-y-2">
                                        <li className="flex gap-3"><span className="text-purple-400">→</span> Redis-based rate limiting</li>
                                        <li className="flex gap-3"><span className="text-purple-400">→</span> Dockerized services</li>
                                        <li className="flex gap-3"><span className="text-purple-400">→</span> CI/CD pipelines & VPS deployments</li>
                                        <li className="flex gap-3"><span className="text-purple-400">→</span> Exploring AWS for scalable infrastructure</li>
                                    </ul>
                                </div>

                                <p>
                                    Also experienced with React & Next.js for seamless backend–frontend integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
