import React from 'react';
import ProjectCard from './ProjectCard';


function Projects() {
    const projects = [
        {
            title: 'Kinda Funny Database',
            slug: 'kfdb',
            description: 'A brief description of your project.',
            link: 'https://www.kfdb.app/',
            imageCount: 5,
        },
        {
            title: 'Survayy',
            slug: 'survayy',
            description: 'A brief description of your project.',
            link: 'https://www.survayy.com/',
            imageCount: 5,
        },
    ];

    return (
        <section id="projects" className="projects section-body">
            <h2 data-header="Projects">Projects</h2>
            <div id="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
