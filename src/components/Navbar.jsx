import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { key: "hero", name: "Home", to: "/", hash: "hero" },
  { key: "about", name: "About", to: "/", hash: "about" },
  { key: "skills", name: "Skills", to: "/", hash: "skills" },
  { key: "projects", name: "Projects", to: "/", hash: "projects" },
  { key: "contact", name: "Contact", to: "/", hash: "contact" },
  { key: "changelog", name: "Changelog", to: "/changelog" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  const handleNavClick = (item) => {
    setIsMenuOpen(false);

    // If we're going to a section on home, scroll after route change
    if (item.hash) {
      setTimeout(() => {
        const el = document.getElementById(item.hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  // When not on home, highlight by route (ex: /changelog)
  useEffect(() => {
    if (!isHomeRoute) {
      setActiveSection(location.pathname === "/changelog" ? "changelog" : "");
    } else {
      // Optional: when returning home, default back to hero until observer updates
      setActiveSection("hero");
    }
  }, [isHomeRoute, location.pathname]);

  // Scroll-spy ONLY on home route
  useEffect(() => {
    if (!isHomeRoute) return;

    const sectionIds = navItems.map((i) => i.hash).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomeRoute]);

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-primary flex items-center"
          onClick={() => handleNavClick({ hash: "hero" })}
        >
          <span className="relative z-10">
            <span className="text-glow">Fatty's</span> Portfolio
          </span>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const to = item.hash ? `/#${item.hash}` : item.to;

            return (
              <Link
                key={item.key}
                to={to}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "transition-colors duration-300",
                  activeSection === item.key
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navbar */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => {
              const to = item.hash ? `/#${item.hash}` : item.to;

              return (
                <Link
                  key={item.key}
                  to={to}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "transition-colors duration-300",
                    activeSection === item.key
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
