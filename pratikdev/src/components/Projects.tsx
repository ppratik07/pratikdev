import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "Color Validator",
            description: "Verify packaging colors against brand standards with precision, generate comprehensive reports, and track color variations across print batches.",
            image: "https://pub-1344e2d6b42247e4872b738f42a238d4.r2.dev/Screenshot%202025-04-04%20at%2011.46.45%E2%80%AFAM.png",
            tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
            demoLink: "https://color-validator.vercel.app/",
        },
        {
            title: "Spacebooks",
            description: "Smart way to manage spaces. Better experience of workplace scheduling",
            image: "https://pub-1344e2d6b42247e4872b738f42a238d4.r2.dev/Screenshot%202025-04-04%20at%2011.45.56%E2%80%AFAM.png",
            tech: ["React", "Node.js", "Tailwind CSS", "TypeScript"],
            demoLink: "https://spacebooks.vercel.app",
        },
        {
            title: "Crypblock",
            description: "Your favourite wallet to store crypto and blockchains.",
            image: "https://pub-1344e2d6b42247e4872b738f42a238d4.r2.dev/Screenshot%202025-04-04%20at%2011.45.11%E2%80%AFAM.png",
            tech: ["React", "Tailwind CSS", "Blockchain"],
            demoLink: "https://crypblock.vercel.app",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    Here are some of my recent projects showcasing my skills and experience. Each project reflects my ability to solve complex problems and deliver quality results.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow p-6">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-700 flex justify-between">
                            <a href={project.demoLink} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                Live Demo <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
                    <Github size={18} /> More on GitHub
                </a>
            </div>
        </div>
    </section>
    );
};
