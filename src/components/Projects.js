import React, { useEffect, useState, useRef } from 'react';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import ProjectIcons from './ProjectIcons';


function Projects() {
    const [isFixed, setIsFixed] = useState(false);
    const sectionRef = useRef(null);
    const originalSectionTop = useRef(0); // Store original top position
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const projects = [
        {
            id: 1,
            title: 'Kinda Funny Database',
            slug: 'kfdb',
            blurb: "Dive into the ultimate Kinda Funny resource with this fan-built database, providing a comprehensive resource for Kinda Funny YouTube and Patreon content. Originally created as a PHP site in 2022, I rebuilt the site from the ground up in Python with the Django framework. Containerized with Docker and hosted on AWS, this database is optimized for performance with a focus on scalability. The frontend leverages HTMX for a seamless user experience and is styled with Tailwind CSS and DaisyUI for a modern and responsive design. Explore the database and utilize the public REST API to build your own Kinda Funny applications. View the full project on GitHub.",
            link: 'https://www.kfdb.app/',
            source: 'https://github.com/Jer-Pha/kfdb',
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
                'GimpIcon',
                'SeoIcon',
                'YouTubeIcon',
                'PatreonIcon',
            ],
        },
        {
            id: 2,
            title: 'Survayy',
            slug: 'survayy',
            blurb: 'Simplify ranked-choice decision making with Survayy, a platform for creating, sharing, and analyzing surveys. Create surveys, gather responses, and gain valuable insights with robust analytics. Powered by Django and MySQL for a robust and reliable experience, utilizing Celery for efficient background task processing, and featuring a customized Material Design interface for a familiar and intuitive user experience, Survayy is built to handle high-volume surveys, with each survey capable of receiving up to 100,000 responses.',
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
                'GimpIcon',
                'SeoIcon',
                'GoogleAdsenseIcon',
                'GoogleAnalyticsIcon',
                'PayPalIcon',
            ],
        },
        {
            id: 3,
            title: 'Portfolio Website',
            slug: 'portfolio',
            blurb: "This portfolio was developed as a hands-on learning experience with React while exploring the potential of AI tools by utilizing Google's Gemini to accelerate development. I gained proficiency in component structure and state management through successful prompt engineering. This project showcases my eagerness to embrace new technologies and continuously expand my skill set.",
            link: '#',
            imageCount: 3,
            icons: [
                'HtmlIcon',
                'CssIcon',
                'JavaScriptIcon',
                'ReactIcon',
                'GeminiIcon',
                'GitIcon',
                'GimpIcon',
            ],
        },
        {
            id: 4,
            title: 'django-qs2csv',
            slug: 'qs2csv',
            blurb: 'To streamline data export for users of my survey platform, Survayy, I developed django-qs2csv, a Python package for converting Django QuerySets to CSV files. Focused on providing a seamless developer experience, it features thorough documentation, comprehensive test coverage, and type hints. This open-source package is available on GitHub and installable via pip.',
            link: 'https://github.com/Jer-Pha/django-qs2csv',
            source: 'https://github.com/Jer-Pha/django-qs2csv',
            imageCount: 5,
            icons: [
                'PythonIcon',
                'DjangoIcon',
                'GitIcon',
                'PyPiIcon',
            ],
        },
    ];
    const handleProjectSelect = (projectId) => {
        setSelectedProjectId(projectId);
    };
    const projectsContentRef = useRef(null);

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

        if (projectsContentRef.current) {
            observer.observe(projectsContentRef.current);
        }

        return () => {
            if (projectsContentRef.current) {
                observer.unobserve(projectsContentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const currentScrollY = window.scrollY;
                const styles = window.getComputedStyle(section);
                const paddingTop = parseFloat(styles.paddingTop);
                const paddingBottom = parseFloat(styles.paddingBottom);
                const contentHeight = section.offsetHeight - paddingTop - paddingBottom;

                if (!isFixed && sectionTop <= 0 && contentHeight <= window.innerHeight) {
                    // Store original top position before fixing
                    originalSectionTop.current = section.offsetTop;
                    setIsFixed(true);
                } else if (isFixed && currentScrollY < originalSectionTop.current) {
                    // Unfix if scrolling up past original position
                    setIsFixed(false);
                }
            }
        };

        // Handle clicks on the "Projects" link
        const handleProjectsLinkClick = (event) => {
            event.preventDefault();
            window.scrollTo({
                top: originalSectionTop.current,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', handleScroll);
        document.getElementById('projects-link')?.addEventListener('click', handleProjectsLinkClick);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.getElementById('projects-link')?.removeEventListener('click', handleProjectsLinkClick);
        };
    }, [isFixed]);

    return (
        <>
            {isFixed && ( // Render placeholder only when not fixed
                <div
                    style={{
                        height: (sectionRef.current?.offsetHeight) + 'px',
                    }}
                />
            )}
            <section
                id="projects"
                className={`projects section-body ${isFixed ? 'fixed' : ''}`}
                ref={sectionRef}>
                <h2>Projects</h2>
                <div className="outer-project-container" ref={projectsContentRef}>
                    <div className="inner-project-container">
                        <ProjectList projects={projects} onProjectSelect={handleProjectSelect} />
                        <ProjectDetails projects={projects} selectedProjectId={selectedProjectId} />
                    </div>
                    <ProjectIcons projects={projects} selectedProjectId={selectedProjectId} />

                </div>
            </section>
        </>
    );
}

export default Projects;
