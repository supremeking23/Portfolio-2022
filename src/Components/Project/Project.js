import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Tooltip from '@mui/material/Tooltip';
import "../../scss/Projects.scss";


export default function Projects({project: {title, description, project_tags}}) {
  console.log(project_tags)
  let tags = project_tags.map((tag, index)=> <li key={index}>{tag}</li>);
  
  function hide(){
    console.log("hide");
  }

  return (
    <li onClick={hide} data-for="project_description" data-tip={description} data-iscapture="true">
        <h3 title={title}>{title}</h3>
        <Tooltip title={description} placement="top" className="tooltip_custom">
          <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/vivypilotmovie_screenshot.png" alt="ss"/>
        </Tooltip>
        {/* <p>{description}</p> */}
        <ul className="tags">
          {tags}
        </ul>
        <ul className="links">
            <li><a href="/">Source code</a></li>
            <li><a href="/">Demo</a></li>
        </ul>
    </li>
  );
}
