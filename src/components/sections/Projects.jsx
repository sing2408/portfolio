import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

// Import your images here
import hikewiseScreenshot from "../../assets/hikewisess.png";
import mendengarScreenshot from "../../assets/mendengarss.png";
import glucoseeScreenshot from "../../assets/glucoseess.png";
import honeydueScreenshot from "../../assets/honeyduess.png";
import mamapaScreenshot from "../../assets/mamapass.png";
import snoreifyScreenshot from "../../assets/snoreifyss.png";
import movieflixScreenshot from "../../assets/movieflixss.png";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCards = isMobile ? 1 : 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === 0 ? projects.length - visibleCards : prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return prevIndex >= projects.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex >= projects.length - visibleCards ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-pattern relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            <div className={`overflow-hidden w-full ${isMobile ? "max-w-[380px]" : ""}`}>
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
                }}
              >
                {projects.map((project, index) => {
                  // Dynamically map image paths to the imported image variables
                  const imageMap = {
                    "/assets/hikewisess.png": hikewiseScreenshot,
                    "/assets/mendengarss.png": mendengarScreenshot,
                    "/assets/glucoseess.png": glucoseeScreenshot,
                    "/assets/honeyduess.png": honeydueScreenshot,
                    "/assets/mamapass.png": mamapaScreenshot,
                    "/assets/snoreifyss.png": snoreifyScreenshot,
                    "/assets/movieflixss.png": movieflixScreenshot,
                  };

                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 p-4 ${isMobile ? "w-full max-w-[380px]" : ""}`}
                      style={{
                        width: isMobile ? "100%" : "380px",
                        height: "auto", 
                      }}
                    >
                      <div className="bg-transparent p-6 rounded-xl border border-white/20 shadow-lg backdrop-blur-lg h-full flex flex-col">
                        <img
                          src={imageMap[project.screenshot]} // Use the imported image
                          alt={project.name}
                          className="w-full object-cover rounded-md mb-4"  
                          style={{maxHeight: '550px'}}
                        />
                        <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                        <p className="text-gray-400 text-sm mb-4 text-center">{project.description}</p>

                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="group bg-blue-500/10 text-white py-1.5 px-4 rounded-full text-sm font-medium transition-all border border-blue-400/30 hover:border-blue-400 hover:shadow-[0_0_10px_2px] hover:shadow-blue-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto flex gap-4 justify-center"> 
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            >
                              GitHub
                            </a>
                          )}
                          {project.medium && (
                            <a
                              href={project.medium}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            >
                              Medium
                            </a>
                          )}
                          {project.appStore && (
                            <a
                              href={project.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            >
                              App Store
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="absolute right-0 z-10 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
              onClick={handleNext}
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};