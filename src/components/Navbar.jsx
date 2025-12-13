import {cn} from '@/lib/utils'
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";


const navItems = [
    { name: "Home", to: "/", hash: "hero" },
    { name: "About", to: "/", hash: "about" },
    { name: "Skills", to: "/", hash: "skills" },
    { name: "Projects", to: "/", hash: "projects" },
    { name: "Contact", to: "/", hash: "contact" },
    { name: "Changelog", to: "/changelog" },
  ];
  



export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    const handleNavClick = (item) => {
    setIsMenuOpen(false);

    if (item.hash) {
        // Navigate first, then scroll
        setTimeout(() => {
        const el = document.getElementById(item.hash);
        el?.scrollIntoView({ behavior: "smooth" });
        }, 50);
    }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>


        <div className='container flex items-center justify-between'>
            <Link to="/" className='text-xl font-bold text-primary flex items-center' onClick={() => handleNavClick({ hash: "hero" })}>
                <span className='relative z-10'>
                    <span className='text-glow'>
                        Fatty's
                    </span> Portfolio
                      
                </span>
            </Link>

            {/* Desktop Navbar */}
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => {
                        const to = item.hash ? `/#${item.hash}` : item.to;

                        return (
                            <Link
                            key={key}
                            to={item.to}
                            onClick={() => handleNavClick(item)}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </Link>
                        );
                    })}
                </div>

            {/* Mobile Navbar */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} className='md:hidden p-2 text-foreground z-50' aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}>{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>

            <div className={cn('fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center', 'transition-all duration-300 md:hidden', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
                <div className='flex flex-col space-y-8 text-xl'>
                    {navItems.map((item, key) => (
                        <Link
                        key={key}
                        to={item.to}
                        onClick={() => handleNavClick(item)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                      
                    ))}
                </div>
            </div>
        </div>
    </nav>
}