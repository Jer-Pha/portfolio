import React from 'react';
import * as Icons from './Icons';

function ProjectIcons({ projects, selectedProjectId }) {
    const selectedId = selectedProjectId || 1;
    const selectedProject = projects.find(project => project.id === selectedId);

    return (
        <div className="project-icons">
            {selectedProject.icons.map(iconName => {
                const IconComponent = Icons[iconName];
                return <IconComponent key={iconName} />;
            })}
        </div>
    );
}

export default ProjectIcons;
