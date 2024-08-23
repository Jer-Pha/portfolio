import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
    const projects = [
        {
            title: 'Kinda Funny Database',
            slug: 'kfdb',
            description: 'A brief description of your project.',
            link: 'https://www.kfdb.app/'
        },
        {
            title: 'Survayy',
            slug: 'survayy',
            description: 'A brief description of your project.',
            link: 'https://www.survayy.com/'
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <h2 class="mirror-header">Projects</h2>
            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
