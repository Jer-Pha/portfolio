import React from 'react';
import ImageCarousel from './ImageCarousel';
import ProjectDetails from './ProjectDetails';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <ImageCarousel string={project.slug} imageCount={project.imageCount} />
            <ProjectDetails key={project.title} project={project} />
        </div>
    );
}

export default ProjectCard;
