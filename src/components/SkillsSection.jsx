import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: 'HTML/CSS', category: 'Frontend'},
    {name: 'JavaScript', category: 'Frontend'},
    {name: 'React', category: 'Frontend'},
    {name: 'Typescript', category: 'Frontend'},
    {name: 'Tailwind CSS', category: 'Frontend'},
    {name: 'Bootstrap', category: 'Frontend'},
    {name: 'Alpine JS', category: 'Frontend'},
    {name: 'PHP/Laravel', category: 'Backend'},
    {name: 'SQL', category: 'Backend'},
    {name: 'Python', category: 'Backend'},
    {name: 'Livewire', category: 'Full-Stack'},
    {name: 'Git/GitHub', category: 'Tools'},
    {name: 'Vercel', category: 'Tools'},
    {name: 'Linux', category: 'OS'},
    {name: 'Windows', category: 'OS'},
];
const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'Tools', 'OS'];
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredSkills = skills.filter((skill) => activeCategory === 'All' || skill.category === activeCategory);
    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} className={
                        cn('px-5 py-2 rounded-full transition-colors duration-300',
                        activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bg-secondary'
                    )}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card:hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>);
}