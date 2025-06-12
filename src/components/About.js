import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import profilePicture from "../img/png/jeremy.png";
import {
  PythonIcon,
  DjangoIcon,
  MySqlIcon,
  CssIcon,
  HtmlIcon,
  JavaScriptIcon,
  ReactIcon,
} from "./Icons";

function About() {
  const [isFixed, setIsFixed] = useState(false);
  const sectionRef = useRef(null);
  const originalSectionTop = useRef(0); // Store original top position
  const aboutContentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (section) {
      originalSectionTop.current = section.offsetTop;
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

    // Handle clicks on the "About" link
    const handleAboutLinkClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: originalSectionTop.current,
        behavior: "smooth",
      });
    };

    const observedElement = aboutContentRef.current;
    if (observedElement) {
      observer.observe(observedElement);
    }

    const aboutLink = document.getElementById("about-link");
    if (aboutLink) {
      aboutLink.addEventListener("click", handleAboutLinkClick);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
      if (aboutLink) {
        aboutLink.removeEventListener("click", handleAboutLinkClick);
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
            currentScrollY < viewportHeight)
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
        id="about"
        className={`about-me section-body ${isFixed ? "fixed" : ""}`}
        ref={sectionRef}
      >
        <h2>About</h2>
        <div className="about-container" ref={aboutContentRef}>
          <div className="about-content">
            <p className="blurb">
              Driven by a passion for crafting elegant and efficient software
              solutions, I'm a Software Developer with a focus on backend
              optimization and frontend experience. What sets me apart is the
              decade of professional experience in project management and data
              analysis that I bring to every line of code. This background
              allows me to build robust features while understanding business
              objectives, delivering software that provides real, tangible
              value. I have built production-level applications with Python and
              Django, optimized complex systems for improved performance and
              scalability, and always enjoy creating user-friendly, innovative,
              and performant applications. Continuously exploring new
              technologies and best practices, I'm always eager to contribute to
              innovative projects and make a meaningful impact.
            </p>
            <div className="icons">
              <PythonIcon />
              <DjangoIcon />
              <MySqlIcon />
              <HtmlIcon />
              <CssIcon />
              <JavaScriptIcon />
              <ReactIcon />
            </div>
          </div>
          <div className="profile-picture-container">
            <img
              src={profilePicture}
              alt="Jeremy Phares"
              className="profile-picture"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
