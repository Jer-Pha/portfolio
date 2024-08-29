import React from 'react';
import ImageCarousel from './ImageCarousel';

function ProjectDetails({ projects, selectedProjectId }) {
    const selectedId = selectedProjectId || 1;
    const selectedProject = projects.find(project => project.id === selectedId);

    return (
        <div className="project-details">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.blurb}</p>
            <ImageCarousel string={selectedProject.slug} imageCount={selectedProject.imageCount} />
        </div>
    );
}

export default ProjectDetails;
