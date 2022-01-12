
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  // creates a component for each mapped object
  const projectItems = projects.map((project) => {
    return (
    
      <ProjectItem
        key={project.id} //project.id is not shown but is needed for the .map
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
     
    )
  });
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;