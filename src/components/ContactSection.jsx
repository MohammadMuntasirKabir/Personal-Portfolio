import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
    return (<section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Find <span className="text-primary">Me</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Do you need a full-stack web developer who can contribute to the project. Look no further! Reach out to me immediately. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:mohammad.muntasir.kabir@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">mohammad.muntasir.kabir@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone Number</h4>
                                <a href="tel:+8801747386370" className="text-muted-foreground hover:text-primary transition-colors">(+880) 174-738-6370</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <div className="text-muted-foreground hover:text-primary transition-colors">Tejgaon, Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <h4 className="font-medium mb-4">Connect With Me:</h4>
                            <div className="flex justify-center gap-2">
                                <a href="https://www.facebook.com/muntasir.kabir.rownak/" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="https://www.linkedin.com/in/mohammad-muntasir-kabir-642020381/" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}