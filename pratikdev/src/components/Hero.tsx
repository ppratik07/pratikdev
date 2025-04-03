import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <div className="md:w-3/5 text-center md:text-left">
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
                            Full Stack Web Developer
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                            Hello, I'm <span className="text-blue-500">Pratik Prajapati</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
                            I build exceptional and accessible digital experiences for the web,
                            transforming ideas into elegant, functional web applications.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition"
                            >
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-6 rounded-lg font-medium transition"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex justify-center md:justify-start gap-4 mt-8">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="md:w-2/5 flex justify-center mt-12 md:mt-0">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="/profile.jpg"
                                    alt="Pratik Prajapati"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
                                <span className="font-medium">4+ Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
