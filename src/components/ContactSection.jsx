import { Facebook, Linkedin, Loader2, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I will reply soon!"
            })
            setIsSubmitting(false);
        }, 1500);

        
    };

    return (
    <section 
        id="contact" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Contact <span className="text-primary">Me</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind? Want to collaborate? Feel Free to reach out. I'm available to discuss any opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>
                    <div className="space-y-3">
                        <div className="flex text-left space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" /> 
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>

                                <a href="mailto:timothy.ronco@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    Timothy.Ronco@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex text-left space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" /> 
                            </div>
                            <div>                                
                                <h4 className="font-medium">Phone</h4>

                                <a href="tel:+15555555555" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    +1 555-555-5555
                                </a>
                            </div>
                        </div>
                        <div className="flex text-left space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" /> 
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>

                                <a href="https://maps.app.goo.gl/J7CkmvStUQwrybGp7" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    New Jersey, USA
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="front-medium mb-4">Connect with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" target="_blank">
                                <Linkedin />
                            </a>
                            <a href="#" target="_blank">
                                <Twitter />
                            </a>
                            <a href="#" target="_blank">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">
                        Send A Message
                    </h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label> 
                        <input type="text" id="name" name="name" required placeholder="e.g. John Smith" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" required placeholder="e.g. John@example.com" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea id="message" name="message" required placeholder="Start Typing..." className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {isSubmitting ? (<> <Loader2 className="h-4 w-4 animate-spin" />Sending... </>) : (<>Send Message<Send size={16} /></>)}
                            
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
            
        
    )
}