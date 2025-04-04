export const Skills = () => {
    const frontendSkills = [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3/SCSS', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'Next.js', level: 50 },
    ];

    const backendSkills = [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'SQL Server', level: 75 },
        { name: 'Sitecore', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'C #', level: 70 },
    ];

    const tools = [
        { name: 'Git' },
        { name: 'Vercel' },
        { name: 'Jest' },
        { name: 'Figma' },
        { name: 'VS Code' },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My Skills</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        I specialize in full-stack development with expertise in modern frontend and backend technologies.
                    </p>
                </div>

                {/* Frontend & Backend Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Frontend Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Frontend Development</h3>
                        <div className="space-y-5">
                            {frontendSkills.map((skill) => (
                                <div key={skill.name} className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-medium text-slate-800 dark:text-white">{skill.name}</h4>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-500"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Backend Development</h3>
                        <div className="space-y-5">
                            {backendSkills.map((skill) => (
                                <div key={skill.name} className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-medium text-slate-800 dark:text-white">{skill.name}</h4>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-500"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">Tools & Technologies</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300"
                            >
                                <span className="text-blue-500 justify-center dark:text-blue-400 font-bold text-sm">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
