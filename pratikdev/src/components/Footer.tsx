import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    {/* Logo & Tagline */}
                    <div className="mb-6 md:mb-0">
                        <a href="#home" className="text-2xl font-bold tracking-wide">
                            Pratik<span className="text-blue-500">.</span>dev
                        </a>
                        <p className="text-slate-400 mt-2 text-sm">
                            Full-stack web developer crafting exceptional digital experiences.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#home" className="text-slate-300 hover:text-white transition">Home</a>
                        <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
                        <a href="#skills" className="text-slate-300 hover:text-white transition">Skills</a>
                        <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
                        <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
                    </nav>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-center">
                    {/* Copyright */}
                    <p className="text-slate-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Pratik Prajapati. All rights reserved.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition flex items-center gap-1"
                        >
                            <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition flex items-center gap-1"
                        >
                            <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition flex items-center gap-1"
                        >
                            <Twitter size={18} /> <span className="hidden sm:inline">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
