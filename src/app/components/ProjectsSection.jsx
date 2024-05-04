import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description of project 1",
    imgUrl: "/images/project/project1.jpg",
    tag: ["React", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a description of project 2",
    imgUrl: "/images/project/project2.jpg",
    tag: ["React", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a description of project 3",
    imgUrl: "/images/project/project3.jpg",
    tag: ["React", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a description of project 4",
    imgUrl: "/images/project/project4.jpg",
    tag: ["React", "TailwindCSS"],
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is a description of project 5",
    imgUrl: "/images/project/project5.jpg",
    tag: ["React", "TailwindCSS"],
  },
  {
    id: 6,
    title: "Project 6",
    description: "This is a description of project 6",
    imgUrl: "/images/project/project6.jpg",
    tag: ["React", "TailwindCSS"],
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            description={project.description}
            imgUrl={project.imgUrl}
            tags={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
