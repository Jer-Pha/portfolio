import React, { useEffect } from 'react';
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

    useEffect(() => {
        return () => window.addEventListener('scroll', () => {
            const nav = document.getElementById('navHeader');
            const projectsSection = document.getElementById('projects');

            if (nav && projectsSection) {
                const navBottom = nav.getBoundingClientRect().bottom;
                const projectsTop = projectsSection.getBoundingClientRect().top;

                if (projectsTop >= navBottom) {
                    nav.style.backgroundColor = 'var(--surface)';
                } else {
                    nav.style.backgroundColor = 'var(--background)';
                }
            }
        });
    }, []);

    return (
        <section id="projects" className="projects section-body">
            <h2 data-header="Projects">Projects</h2>
            <div className="project-cards">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
