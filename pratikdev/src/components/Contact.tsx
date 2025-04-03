import { Mail, MapPin, Phone } from "lucide-react";
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
            toast.success( "Message sent, Thank you for contacting me. I'll get back to you soon!");
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
            content: "contact@example.com",
            link: "mailto:contact@example.com"
        },
        {
            icon: <Phone size={24} className="text-blue-500" />,
            title: "Call Me",
            content: "+1 234 567 890",
            link: "tel:+1234567890"
        },
        {
            icon: <MapPin size={24} className="text-blue-500" />,
            title: "Location",
            content: "India",
            link: "#"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="section-container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle mx-auto">
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
                                    className="block bg-white p-6 rounded-xl shadow-sm card-hover text-center sm:text-left"
                                >
                                    <div className="sm:flex items-center">
                                        <div className="mb-4 sm:mb-0 sm:mr-4 flex justify-center">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-800 mb-1">{info.title}</h3>
                                            <p className="text-slate-600">{info.content}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                  
                        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-800 mb-4">Connect with Me</h3>
                            <p className="text-slate-600 mb-4">
                                Follow me on social media to stay updated with my latest projects and tech insights.
                            </p>
                            <div className="flex justify-center sm:justify-start space-x-4">
                                <a href="#" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors">
                                    GH
                                </a>
                                <a href="#" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors">
                                    LI
                                </a>
                                <a href="#" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors">
                                    TW
                                </a>
                            </div>
                        </div>
                    </div>

                
                    <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition-colors disabled:bg-blue-300"
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