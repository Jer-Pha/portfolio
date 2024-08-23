import React from 'react';
import ImageCarousel from './ImageCarousel';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <ImageCarousel string={project.slug} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;
