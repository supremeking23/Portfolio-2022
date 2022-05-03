import React from 'react';
import Aside from '../Aside/Aside';
import Projects_MainView from './../Projects_MainView/Projects_MainView';

export default function Home() {
  return (
    <div id="wrapper">
        <header>
            <a href="/">Ivan Christian Jay Funcion</a>
        </header>
        <Aside />
        <main>
            <Projects_MainView />
        </main>
    {/* <ReactTooltip place="top" type="dark" effect="solid" id="project_description"  multiline={true}/> */}
    </div>
  )
}
