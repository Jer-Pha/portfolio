import React, { useEffect, useRef } from 'react';
import * as Icons from './Icons';

function ProjectIcons({ projects, selectedProjectId }) {
    const selectedId = selectedProjectId || 1;
    const selectedProject = projects.find(project => project.id === selectedId);
    const projectIconsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        const observedElement = projectIconsRef.current;

        if (observedElement) {
            observer.observe(observedElement);
        }

        return () => {
            if (observedElement) {
                observer.unobserve(observedElement);
            }
        };
    }, []);

    return (
        <div className="project-icons" ref={projectIconsRef}>
            {selectedProject.icons.map(iconName => {
                const IconComponent = Icons[iconName];
                return <IconComponent key={iconName} />;
            })}
        </div>
    );
}

export default ProjectIcons;
