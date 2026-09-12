import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-[#f8fafc] selection:bg-purple-500/30 font-sans">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-500/10 blur-3xl animate-float-reverse" />
        <div className="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-cyan-400/5 blur-3xl animate-glow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-400/10 bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-slate-950/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            Naveed<span className="text-purple-400">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="nav-link hover:text-white">About</a>
            <a href="#skills" className="nav-link hover:text-white">Skills</a>
            <a href="#projects" className="nav-link hover:text-white">Projects</a>
            <a href="#contact" className="nav-link hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="md:hidden px-4 py-2 text-sm font-medium border border-slate-400/20 rounded-lg hover:bg-slate-700/40 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-16 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="border-t border-slate-400/10 py-8 text-center text-slate-400 text-sm">
        <p className="max-w-6xl mx-auto px-6">
          © {new Date().getFullYear()} Muhammad Naveed Qasim. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
