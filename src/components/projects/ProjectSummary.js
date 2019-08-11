import React from 'react';

const ProjectSummary = ({project}) => {
  const {title, content} = project;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by the Net Ninja</p>
        <p className="gre-text">{content}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
