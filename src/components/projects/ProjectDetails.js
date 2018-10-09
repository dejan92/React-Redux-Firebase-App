import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptas sequi, voluptatum ratione deleniti cum magni ducimus sunt eligendi neque alias quam quos reprehenderit, consectetur consequuntur dolores! Ducimus, accusantium nobis!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Dejan Jovanov</div>
          <div>9th October, 3pm</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
