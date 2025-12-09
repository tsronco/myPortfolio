import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import {cn} from '@/lib/utils'

export const ThemeToggle = () => {
    /* set light mode as default */
    const [isDarkMode, setIsDarkmode] = useState(false);

    /* retrieve users preferred styling and apply it */
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkmode(true);
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [])

    /* toggle between light and dark styles */
    const toggleTheme = () => {
        /* if dark mode is already active change to light mode styling */
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");

            /* store users preferred light mode in local storage */
            localStorage.setItem("theme", "light");

            setIsDarkmode(false);
        }
        /* if dark mode was not active ADD dark mode styles */
        else {
            document.documentElement.classList.add("dark");

            /* store users preferred dark mode in local storage */
            localStorage.setItem("theme", "dark");

            setIsDarkmode(true);
        }
    };

    return <button onClick={toggleTheme} className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}>
        {" "}
        {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}
    </button>;
};