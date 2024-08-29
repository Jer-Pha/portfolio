import React, { useState } from 'react';

function ProjectList({ projects, onProjectSelect }) {
    const [selectedProjectId, setSelectedProjectId] = useState(1);

    const handleProjectClick = (projectId) => {
        setSelectedProjectId(projectId);
        onProjectSelect(projectId); // Notify parent component
    };

    return (
        <div className="project-list">
            {projects.map(project => (
                <div
                    key={project.id}
                    onClick={() => handleProjectClick(project.id)}
                    className={selectedProjectId === project.id ? 'active' : ''} // Add active class
                >
                    {project.title}</div>
            ))}
        </div>
    );
}

export default ProjectList;
