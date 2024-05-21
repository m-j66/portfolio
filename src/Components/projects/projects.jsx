import React from "react";
import "./projects.css";

const projectData = [
  {
    name: "GrishaVerse",
    description:
      "GrishaVerse is an extensive website dedicated to the world of the Grisha books, a popular fantasy series by Leigh Bardugo. This website serves as a one-stop destination for fans and newcomers alike, offering detailed information about the books.",
    images: ["/assets/Grisha.png"],
  },
  {
    name: "Tamkeen",
    description:
      "Tamkeen is more than just an e-commerce app; it's a platform dedicated to empowering women entrepreneurs and consumers alike. With a focus on women-owned businesses and products that cater to the needs and interests of women.",
    images: ["/assets/Tamkeen.png"],
  },
  {
    name: "Makaan",
    description:
      "Makaan is a cutting-edge web application that revolutionizes the way people buy, sell, and rent properties. Powered by advanced technology and user-centric design, Makaan offers a seamless and intuitive experience for both property seekers and real estate professionals.",
    images: ["/assets/Makaan.png"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-title">
        <h1>
          <span>Pro</span>jects
        </h1>
      </div>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <img
              src={project.images[0]}
              className="card-img-top"
              alt={project.name}
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Projects;
