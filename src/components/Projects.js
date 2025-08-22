import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import ProjectIcons from "./ProjectIcons";

function Projects() {
  const [isFixed, setIsFixed] = useState(false);
  const sectionRef = useRef(null);
  const originalSectionTop = useRef(0); // Store original top position
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [minHeight, setMinHeight] = useState(0);
  const projects = [
    {
      id: 0,
      title: "KF/AI",
      slug: "kfai",
      blurb:
        "Unlock the Kinda Funny archive with this production-ready AI agent, designed to perform natural language queries on over 10,000 videos. This project is a complete, end-to-end Retrieval-Augmented Generation (RAG) system, built from the ground up with a fully local, open-source stack. The system is powered by a sophisticated ETL pipeline that extracts and cleans data using a hybrid approach with yt-dlp and a local Whisper model for 100% data coverage. At its core is a custom, multi-stage query parser that transforms conversational questions into high-precision hybrid searches on a PostgreSQL database with the pgvector extension. The entire project is engineered to a professional standard, featuring a full CI/CD pipeline in GitHub Actions that enforces 100% test coverage with Pytest, strict-mode type safety with Mypy, and automated code quality with Ruff. Dependency management is handled by Poetry for deterministic, reproducible builds. Explore the complete architecture and automated quality gates on GitHub.",
      source: "https://github.com/Jer-Pha/kfai-pipeline",
      imageCount: 3,
      icons: [
        "PythonIcon",
        "OllamaIcon",
        "LangChainIcon",
        "HuggingFaceIcon",
        "PyTorchIcon",
        "PostgreSQLIcon",
        "MySqlIcon",
        "PoetryIcon",
        "RuffIcon",
        "PytestIcon",
        "GradioIcon",
        "GitIcon",
        "ApiIcon",
        "CssIcon",
        "YouTubeIcon",
      ],
    },
    {
      id: 1,
      title: "Kinda Funny Database",
      slug: "kfdb",
      blurb:
        "Dive into the ultimate Kinda Funny resource with this fan-built database, providing a comprehensive resource for Kinda Funny YouTube and Patreon content. Originally created as a PHP site in 2022, I rebuilt the site from the ground up in Python with the Django REST Framework. Containerized with Docker and hosted on AWS, this database is optimized for performance with a focus on scalability through strategic indexing and Redis caching. The frontend leverages HTMX for a seamless user experience and is styled with Tailwind CSS and DaisyUI for a modern and responsive design. Explore the database and utilize the public REST API to build your own Kinda Funny applications. View the full project on GitHub.",
      link: "https://www.kfdb.app/",
      source: "https://github.com/Jer-Pha/kfdb",
      imageCount: 5,
      icons: [
        "PythonIcon",
        "DjangoIcon",
        "ApiIcon",
        "MySqlIcon",
        "GitIcon",
        "HtmlIcon",
        "CssIcon",
        "JavaScriptIcon",
        "HtmxIcon",
        "TailwindCssIcon",
        "DaisyUiIcon",
        "ChartJsIcon",
        "RedisIcon",
        "DockerIcon",
        "AwsIcon",
        "RdsIcon",
        "ElasticBeanstalkIcon",
        "S3Icon",
        "RssIcon",
        "CloudflareIcon",
        "GimpIcon",
        "SeoIcon",
        "YouTubeIcon",
        "PatreonIcon",
      ],
    },
    {
      id: 2,
      title: "Controller Chronicle",
      slug: "cc",
      blurb:
        "Controller Chronicle is a dynamic gaming news aggregator designed to streamline your daily dose of gaming news. This React-based web application gathers articles from 29 leading gaming news outlets, providing a centralized hub for staying up-to-date with the latest trends and stories. Its key feature is the integration of the Google Gemini API to perform AI-powered text summarization and topic clustering, providing unique insights and automated organization. With a focus on user experience, Controller Chronicle offers intuitive navigation and filtering options, allowing you to easily discover news based on your preferred topics or outlets. Performance is optimized through Redis caching, ensuring near-instant data retrieval and a seamless, responsive experience across all devices. Explore Controller Chronicle to effortlessly stay informed about the gaming world.",
      link: "https://www.controllerchronicle.com/",
      source: "https://github.com/Jer-Pha/games-daily",
      imageCount: 5,
      icons: [
        "ReactIcon",
        "JavaScriptIcon",
        "GeminiIcon",
        "HtmlIcon",
        "TailwindCssIcon",
        "CssIcon",
        "PythonIcon",
        "DjangoIcon",
        "ApiIcon",
        "GitIcon",

        "RedisIcon",
        "AwsIcon",
        "CloudflareIcon",
        "GimpIcon",
        "SeoIcon",
      ],
    },
    {
      id: 3,
      title: "Survayy",
      slug: "survayy",
      blurb:
        "Simplify ranked-choice decision making with Survayy, a platform for creating, sharing, and analyzing surveys. Create surveys, gather responses, and gain valuable insights with robust analytics. Powered by Django and MySQL for a robust and reliable experience, utilizing Celery and Redis for efficient background task processing, and featuring a customized Material Design interface for a familiar and intuitive user experience, Survayy is built to handle high-volume surveys, with each survey capable of receiving up to 100,000 responses. The platform is fully integrated with the PayPal API for secure purchasing of survey extensions and Amazon SES for a robust user notification system.",
      link: "https://www.survayy.com/",
      imageCount: 5,
      icons: [
        "PythonIcon",
        "DjangoIcon",
        "ApiIcon",
        "MySqlIcon",
        "CeleryIcon",
        "GitIcon",
        "MaterialDesignIcon",
        "HtmlIcon",
        "CssIcon",
        "JavaScriptIcon",
        "RedisIcon",
        "CloudflareIcon",
        "SesIcon",
        "GimpIcon",
        "SeoIcon",
        "GoogleAdsenseIcon",
        "GoogleAnalyticsIcon",
        "PayPalIcon",
      ],
    },
    {
      id: 4,
      title: "Portfolio Website",
      slug: "portfolio",
      blurb:
        "This portfolio was developed as a hands-on learning experience with React while exploring the potential of AI tools by utilizing Google's Gemini to accelerate development. I gained proficiency in component structure and state management through successful prompt engineering. This project showcases my eagerness to embrace new technologies and continuously expand my skill set. View the full project on GitHub.",
      source: "https://github.com/Jer-Pha/portfolio",
      imageCount: 3,
      icons: [
        "HtmlIcon",
        "CssIcon",
        "JavaScriptIcon",
        "ReactIcon",
        "GeminiIcon",
        "GitIcon",
        "GimpIcon",
      ],
    },
    {
      id: 5,
      title: "django-qs2csv",
      slug: "qs2csv",
      blurb:
        "To streamline data export for users of my survey platform, Survayy, I developed django-qs2csv, a Python package for converting Django QuerySets to CSV files. Focused on providing a seamless developer experience, it features thorough documentation, comprehensive test coverage, and type hints. This open-source package is available on GitHub and installable via pip.",
      source: "https://github.com/Jer-Pha/django-qs2csv",
      imageCount: 5,
      icons: ["PythonIcon", "DjangoIcon", "GitIcon", "PyPiIcon"],
    },
  ];
  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };
  const projectsContentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (section) {
      originalSectionTop.current = section.offsetTop;
    }

    const container = projectsContentRef.current;
    if (container) {
      setMinHeight(container.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    const observedElement = projectsContentRef.current;
    if (observedElement) {
      observer.observe(observedElement);
    }

    // Handle clicks on the "Projects" link
    const handleProjectsLinkClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: originalSectionTop.current,
        behavior: "smooth",
      });
    };

    const projectsLink = document.getElementById("projects-link");
    if (projectsLink) {
      projectsLink.addEventListener("click", handleProjectsLinkClick);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
      if (projectsLink) {
        projectsLink.removeEventListener("click", handleProjectsLinkClick);
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

        const viewportHeight = Math.max(
          document.documentElement.clientHeight ?? 0,
          window.innerHeight ?? 0
        );

        if (!isFixed && sectionTop <= 0 && contentHeight <= viewportHeight) {
          // Store original top position before fixing
          originalSectionTop.current = section.offsetTop;
          setIsFixed(true);
        } else if (
          isFixed &&
          (currentScrollY < originalSectionTop.current ||
            currentScrollY < viewportHeight * 2)
        ) {
          // Unfix if scrolling up past original position
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <>
      {isFixed && ( // Render placeholder only when not fixed
        <div
          style={{
            height: sectionRef.current?.offsetHeight + "px",
          }}
        />
      )}
      <section
        id="projects"
        className={`projects section-body ${isFixed ? "fixed" : ""}`}
        ref={sectionRef}
      >
        <h2>Projects</h2>
        <div
          className="outer-project-container"
          ref={projectsContentRef}
          style={{ minHeight: minHeight + 7 + "px" }}
        >
          <div className="inner-project-container">
            <ProjectList
              projects={projects}
              onProjectSelect={handleProjectSelect}
            />
            <ProjectDetails
              projects={projects}
              selectedProjectId={selectedProjectId}
            />
          </div>
          <ProjectIcons
            projects={projects}
            selectedProjectId={selectedProjectId}
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
