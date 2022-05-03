import React from 'react';
import Aside from './../Aside/Aside';
import "../../scss/Certificates.scss";


export default function Certificate() {
  return (
    <div id="wrapper">
        <header>
            <a href="/">Ivan Christian Jay Funcion</a>
        </header>
        <Aside />
        <main>
            <h1>Certificates</h1>
            <ul id="certificate_list">
                
            <li>
                <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/vivypilotmovie_screenshot.png" alt="ss"/>   
                <h3>Village88 PHP Track Exam Certificate</h3>         
            </li>

            <li>
                <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/vivypilotmovie_screenshot.png" alt="ss"/>   
                <h3>Village88 HTML and CSS Track Exam Certificate</h3>         
            </li>

            <li>
                <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2021/08/vivypilotmovie_screenshot.png" alt="ss"/>   
                <h3>AWS Cloud Practitioner Essentials Certification </h3>         
            </li>

            </ul>
        </main>
    {/* <ReactTooltip place="top" type="dark" effect="solid" id="project_description"  multiline={true}/> */}
    </div>
  );
}
