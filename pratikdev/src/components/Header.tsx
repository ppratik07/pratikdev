import { useEffect, useState } from "react";
import { ThemeToggle } from "../darkmode/ThemeToggle";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]
    
    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white dark:bg-slate-900 shadow-md py-3' 
                : 'bg-transparent py-5'
        }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#home" className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    Pratik<span className="text-blue-500">.</span>dev
                </a>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};