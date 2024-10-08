import React from 'react';
import ImageCarousel from './ImageCarousel';
import { NewWindowIcon, ViewOnGitHubIcon } from './Icons';

function ProjectDetails({ projects, selectedProjectId }) {
    const selectedId = selectedProjectId || 1;
    const selectedProject = projects.find(project => project.id === selectedId);

    return (
        <div className="project-details">
            <h3>
                {selectedProject.link ? (
                    <a href={selectedProject.link} target="_blank" rel="noreferrer nofollow noopener">
                        {selectedProject.title}
                        <NewWindowIcon alt="View Project" />
                    </a>
                ) : (
                    <span>{selectedProject.title}</span>
                )}
                {selectedProject.source && (
                    <a href={selectedProject.source} target="_blank" rel="noreferrer nofollow noopener" className="view-github">
                        <ViewOnGitHubIcon alt="View on GitHub" />
                    </a>
                )}
            </h3>
            <p>{selectedProject.blurb}</p>
            <ImageCarousel string={selectedProject.slug} imageCount={selectedProject.imageCount} />
        </div>
    );
}

export default ProjectDetails;
