import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference
        const isDarkMode = localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};