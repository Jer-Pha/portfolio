import React from 'react';

function ProjectDetails({ project }) {
    return (
        <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectDetails;
