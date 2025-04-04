import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast.success("Message sent, Thank you for contacting me. I'll get back to you soon!");
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <Mail size={24} className="text-blue-500" />,
            title: "Email Me",
            content: "ppratikcodes@gmail.com",
            link: "mailto:ppratikcodes@gmail.com"
        },
        {
            icon: <Phone size={24} className="text-blue-500" />,
            title: "Call Me",
            content: "+91 7979096268",
            link: "tel:+91 7979096268"
        },
        {
            icon: <MapPin size={24} className="text-blue-500" />,
            title: "Location",
            content: "India",
            link: "#"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 px-6 md:px-10">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out.
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="block bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center sm:text-left"
                                >
                                    <div className="sm:flex items-center">
                                        <div className="mb-4 sm:mb-0 sm:mr-4 flex justify-center">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-800 dark:text-white mb-1">{info.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-300">{info.content}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Connect with Me</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                Follow me on social media to stay updated with my latest projects and tech insights.
                            </p>
                            <div className="flex justify-center sm:justify-start space-x-4">
                                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors">
                                    <Github size={24} className="text-blue-500" />
                                </a>
                                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors">
                                    <Linkedin size={24} className="text-blue-500" />
                                </a>
                                <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 transition-colors">
                                    <Twitter size={24} className="text-blue-500" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition-colors disabled:bg-blue-300 dark:disabled:bg-blue-400"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}