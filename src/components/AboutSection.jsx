import { Code } from "lucide-react";

export const AboutSection = () => {
    return (<section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Education and Passions</h3>
                <p className="text-muted-foreground"> I am a final semester student of BRAC University currently pursuing a Bachelor's
                    degree in Computer Science. I have completed my O Levels and A Levels from 
                    Sunnydale and Loreeto respectively. I am passionate about Web development and 
                    have built multiple academic and personal projects. I am motivated to learn 
                    from some of my industry seniors so that I can better comprehend more 
                    technologies and thus build more amazing projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">Get In Touch With Me</a>
                </div>
            </div>
        </div>
    </section>);
}