import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/Starbackground";
import { Navbar } from "../components/Navbar";
import { ChangeLog } from "../components/ChangeLog_temp";

export const Changelog = () => {
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
                   <ChangeLog />
                </main>

            {/* Footer */}

        </div>
    );
}