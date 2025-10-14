import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Human Resource Management System', 
        description: "A comprehensive HRMS platform designed for large companies with multiple sub companies to make it easier for them to manage not only their own, but also their sub companies' departments, designations, employees, payrolls and more.", 
        image: '/images/image1.png',
        technologies: ['Tailwind', 'Alpine', 'Laravel', 'Livewire', 'PHP', 'SQL'],
        github: 'https://github.com/MohammadMuntasirKabir/Human-Resource-Management-System',
    },
    {
        id: 2,
        title: 'Inventory Management System', 
        description: "A secure system for adding and viewing categories, products and suppliers", 
        image: '/images/image2.png',
        technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
        github: 'https://github.com/MohammadMuntasirKabir/Inventory-Management-System',
    },
    {
        id: 3,
        title: 'Point of Sale System', 
        description: "A production ready Point-of-Sale system for small retailers to manage items and inventory, streamline sales and manage customers.", 
        image: '/images/image3.png',
        technologies: ['Tailwind', 'Alpine', 'Laravel', 'Livewire', 'FilamentPHP', 'PHP', 'MySQL'],
        github: 'https://github.com/MohammadMuntasirKabir/point-of-sale-system-laravel-12',
    },
    {
        id: 4,
        title: 'MovieHub', 
        description: "A dynamic, responsive and user-friendly website which fetches real-time data about movies from the TMDB API and allows us to work with it.", 
        image: '/images/image4.png',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TMDB API'],
        github: 'https://github.com/MohammadMuntasirKabir/MovieHub',
    },
];
export const ProjectsSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Below contains the images, title and github repository links of all of my projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-8 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((technology) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.github} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/MohammadMuntasirKabir?tab=repositories" target="_blank">
                    Check My GitHub Repositories <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>);
}