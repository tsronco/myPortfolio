import { ArrowLeft, ArrowLeftCircle, ArrowRightCircle, ExternalLink, Github, Gitlab } from "lucide-react";
import { cn } from "@/lib/utils";


const projects = [
    {
        id: 1, 
        title: "Load Log Lite",
        description: "a small trucking load tracker that allows you to see revenue and rate per mile at a glance",
        image: ["/projects/load-log.jpg", "https://picsum.photos/id/6/800/500.jpg"],
        tags: ["React", "TailwindCSS", "Python"],
        demoUrl: "https://loads.fattieslearnscoding.com",
        githubUrl: "#",
    },

    {
        id: 2, 
        title: "Choose Your Own Adventure Game",
        description: "a small text based branching storyline where you can choose you own path.",
        image: ["https://picsum.photos/id/0/800/500.jpg", "https://picsum.photos/id/6/800/500.jpg"],
        tags: ["React", "TailwindCSS", "Python"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3, 
        title: "Choose Your Own Adventure Game",
        description: "a small text based branching storyline where you can choose you own path.",
        image: ["https://picsum.photos/id/6/800/500.jpg", "https://picsum.photos/id/0/800/500.jpg"],
        tags: ["React", "TailwindCSS", "Python"],
        demoUrl: "#",
        githubUrl: "#",
    },
];


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some recent projects I have created. Each project was hand crafted with attention to detail, performance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => 
                        (<div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                
                                <ArrowLeftCircle className="inline-flex items-center justify-between h-4 w-4 gap-2" /> <ArrowRightCircle className="inline-flex items-center justify-between h-4 w-4 gap-2" />
                                {project.image.map((image) => (
                                <img src={image} alt={project.title}  className="w-full h-full object-cover"/>))}
                                
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap mb-4 gap-14">
                                    {project.tags.map((t) => (
                                        <span key={t} className="text-xs font-medium rounded-full bg-secondary border px-2 py-1 text-secondary-foreground">
                                        {t}
                                        </span>
                                    ))}
                                </div>
                            

                                <h3 className="font-semibold mb-1 text-xl">
                                {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm">
                                {project.description}
                                </p>
                            </div>
                            
                            <div className="mt- flex items-center justify-between border-t border-border/60 px-4 py-2 text-sm">
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cn(
                                    "inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300",
                                    (!project.demoUrl || project.demoUrl === "#") && "pointer-events-none opacity-40"
                                    )}
                                >
                                    Live Demo <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={cn(
                                    "inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300",
                                    (!project.githubUrl || project.githubUrl === "#") && "pointer-events-none opacity-40"
                                    )}
                                >
                                    GitHub <Github className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </a>
                            </div>


                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/tsronco" target="_blank">
                        View my Github <Gitlab size={20} />
                   </a>
                </div>
            </div>
        </section>
    )
}