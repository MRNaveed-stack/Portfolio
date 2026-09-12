import { motion } from 'framer-motion';

const About = () => {
return ( <section id="about" className="py-24 px-6"> <div className="max-w-4xl mx-auto">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
  
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
> <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                <div className="grid md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-1 rounded-2xl overflow-hidden aspect-square border border-white/10 bg-white/5 flex items-center justify-center">
                        {/* Profile Image - Fallback using div for aesthetic until image is placed */}
                        <img
                            src="me.jfif"
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
                                Muhammad Naveed Qasim — Full-Stack Engineer with a backend-first approach, focused on scalable systems, clean architecture, performance, and secure application development.
                            </p>
                            <p>
                                I build end-to-end applications where modern frontends, high-performance APIs, databases, and cloud infrastructure work together as one reliable system.
                            </p>

                            <ul className="space-y-2 font-medium">
                                <li className="flex gap-3"><span className="text-purple-400">→</span> Build full-stack applications with Go, Node.js, React & TypeScript</li>
                                <li className="flex gap-3"><span className="text-purple-400">→</span> Design scalable APIs, authentication systems & backend architectures</li>
                                <li className="flex gap-3"><span className="text-purple-400">→</span> Optimize databases, SQL queries & backend performance</li>
                            </ul>

                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 my-6">
                                <p className="font-semibold text-white mb-3">Currently building & learning:</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> Full-Stack AI applications and AI-powered product development</li>
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> Containerized applications with Docker</li>
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> AWS deployments with ECS Fargate, RDS, ECR & Application Load Balancers</li>
                                    <li className="flex gap-3"><span className="text-purple-400">→</span> Infrastructure as Code with Terraform & CI/CD with GitHub Actions</li>
                                </ul>
                            </div>
<p> Building toward Full-Stack AI Engineering by combining strong software engineering fundamentals with AI technologies, cloud infrastructure, and production-ready systems. </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

};

export default About;
