import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/Starbackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
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
                    
                </main>

            {/* Footer */}

        </div>
    );
}