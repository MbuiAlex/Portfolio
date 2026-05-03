import React from "react";

function ProjectItem({ project }) {
  return (
    <div className="box">
      <div className="description">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;