import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-sumary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By Dejan Jovanov</p>
        <p className="grey-text">9th Oktober, 2pm</p>
      </div>
    </div>
  ) 
}

export default ProjectSummary