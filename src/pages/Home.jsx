import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/Starbackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    const location = useLocation();

    useEffect(() => {
      if (!location.hash) return;
  
      // remove the # from the hash
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
  
      if (el) {
        // small delay ensures layout + background effects are mounted
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }, [location]);
    
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
                <ThemeToggle />
            {/* Background Effects */}
                <StarBackground />
            {/* NavBar */}
                <Navbar />
            {/* Main Content */}
                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                </main>

            {/* Footer */}

        </div>
    );
}