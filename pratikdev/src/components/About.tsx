import { Briefcase, Code, FileText, User } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto text-justify">
                    I'm a passionate full-stack developer with a strong background in building modern web applications.
                    Here's a bit more about my journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Crafting Digital Experiences</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-2 text-justify">
                            I'm Pratik Prajapati, a full-stack web developer with a passion for creating efficient,
                            scalable applications that solve real-world problems. I specialize in both frontend and backend
                            technologies, ensuring smooth digital experiences.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 text-justify">
                            I've worked on a diverse range of projects, from e-commerce platforms to 
                            enterprise-level applications, always staying ahead with the latest technology.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-justify">
                            Beyond coding, I love exploring new tech trends, contributing to open-source projects, 
                            and sharing knowledge with the developer community.
                        </p>
                    </div>


                    {/* Right Section - Info Cards */}
                    <div className="grid grid-cols-2 ml-10 sm:grid-cols-2 gap-6">
                        {/* Personal Info */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg shadow-md">
                            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                                <User size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Personal Info</h4>
                            <ul className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                                <li><span className="font-medium">Name:</span> Pratik Prajapati</li>
                                <li><span className="font-medium">Location:</span> India</li>
                                <li><span className="font-medium">Email:</span> contact@example.com</li>
                                <li><span className="font-medium">Availability:</span> Full-time</li>
                            </ul>
                        </div>

                        {/* Experience */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg shadow-md">
                            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                                <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Experience</h4>
                            <ul className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                                <li><span className="font-medium">Years:</span> 5+</li>
                                <li><span className="font-medium">Clients:</span> 20+</li>
                                <li><span className="font-medium">Projects:</span> 30+</li>
                                <li><span className="font-medium">Position:</span> Senior Developer</li>
                            </ul>
                        </div>

                        {/* Coding Skills */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg shadow-md">
                            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                                <Code size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Tech Stack</h4>
                            <ul className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                                <li><span className="font-medium">Frontend:</span> React, Vue</li>
                                <li><span className="font-medium">Backend:</span> Node.js, Python</li>
                                <li><span className="font-medium">Database:</span> MongoDB, PostgreSQL</li>
                                <li><span className="font-medium">Tools:</span> Git, Docker, Prisma</li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg shadow-md">
                            <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                                <FileText size={20} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Education</h4>
                            <ul className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                                <li><span className="font-medium">Degree:</span> B.Tech in CS</li>
                                <li><span className="font-medium">University:</span> Example University</li>
                                <li><span className="font-medium">Graduation:</span> 2018</li>
                                <li><span className="font-medium">Certifications:</span> 5+</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Resume Download */}
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200"
                    >
                        <FileText size={18} /> Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};
