import React from 'react';
import Projects from '../Project/Project';

import data from "../../data/data";
export default function Projects_MainView(props) {

    let project = data.map(project => <Projects key={project.id} project = {project}/>);
  return (
    <>
        <h1>My Projects</h1>
        <ul id="project_list">
            {project}
        </ul>
    </>
  )
}
