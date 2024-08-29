import React, { useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import ProjectIcons from './ProjectIcons';


function Projects() {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const projects = [
        {
            id: 1,
            title: 'Kinda Funny Database',
            slug: 'kfdb',
            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            link: 'https://www.kfdb.app/',
            imageCount: 5,
            icons: [
                'PythonIcon',
                'DjangoIcon',
                'ApiIcon',
                'MySqlIcon',
                'GitIcon',
                'HtmlIcon',
                'CssIcon',
                'JavaScriptIcon',
                'HtmxIcon',
                'TailwindCssIcon',
                'DaisyUiIcon',
                'ChartJsIcon',
                'RedisIcon',
                'DockerIcon',
                'AwsIcon',
                'RdsIcon',
                'ElasticBeanstalkIcon',
                'S3Icon',
                'RssIcon',
                'CloudflareIcon',
                'SeoIcon',
                'YouTubeIcon',
                'PatreonIcon',
            ],
        },
        {
            id: 2,
            title: 'Survayy',
            slug: 'survayy',
            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            link: 'https://www.survayy.com/',
            imageCount: 5,
            icons: [
                'PythonIcon',
                'DjangoIcon',
                'ApiIcon',
                'MySqlIcon',
                'CeleryIcon',
                'GitIcon',
                'MaterialDesignIcon',
                'HtmlIcon',
                'CssIcon',
                'JavaScriptIcon',
                'RedisIcon',
                'CloudflareIcon',
                'SesIcon',
                'SeoIcon',
                'GoogleAdsenseIcon',
                'GoogleAnalyticsIcon',
                'PayPalIcon',
            ],
        },
    ];
    const handleProjectSelect = (projectId) => {
        setSelectedProjectId(projectId);
    };

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
            <div className="project-container">
                <ProjectList projects={projects} onProjectSelect={handleProjectSelect} />
                <ProjectDetails projects={projects} selectedProjectId={selectedProjectId} />
                <ProjectIcons projects={projects} selectedProjectId={selectedProjectId} />

            </div>
        </section>
    );
}

export default Projects;
