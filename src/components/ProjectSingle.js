import React, { useState } from 'react';
// import projectPicture from '../images/mockup-country.jpg';
// import design1 from '../images/movie-app-desktop.png';
// import design2 from '../images/movie-app-mobile.png';
// import wireframe1 from '../images/portfolio-home-desktop.jpg';
// import codesnip from '../images/cs1.png';

const ProjectSingle = () => {
    

    return (
        <main className="single-project">
            <h1>Movie app</h1>
            <section className="side-content">
                {/* <img className="project-sct-single" src={projectPicture} alt="project1" /> */}
                <p className="tools-used"> javascript, css</p>
                <div className="btn-container">
                    <a className="btn" href="0#">Live Site</a>
                    <a className="btn" href="0#">GitHub</a>
                </div>
            </section>
            <section className="project-overview">
                <h2>Overview</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit in odio a pretium. Sed suscipit sapien quis auctor ultricies. Ut nec purus posuere, luctus est vitae, luctus urna. Quisque ut quam erat. Nulla ac posuere nunc. Donec eu aliquam erat. Nam vehicula nisi a orci imperdiet vestibulum. Nullam hendrerit porta tellus ut finibus. Praesent mattis massa rutrum, iaculis nisl non, tristique neque.  
                </p>
            </section>
            <section className="members">
                <h2>Memebers</h2>
                <ul>
                    <li>Laura</li>
                    <li>Laura 2</li>
                </ul>
            </section>
            <section className="development">
                <h2>Development</h2>
                <p>
                Pellentesque lorem odio, vulputate sit amet neque ut, porttitor varius metus. Etiam porttitor nec justo eget pellentesque. Proin eget dolor ligula. Sed et convallis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit tellus. Donec non auctor ex. Nulla rutrum quam vel erat porta, ac tempus dolor luctus. Vivamus eget purus porttitor, cursus arcu vel, pulvinar n 
                </p>
            </section>
            <section className="wireframes">
                <h2>Wireframes</h2>
                <div className="img-cont">
                    {/* <img className="project-sct-single" src={wireframe1} alt="project1" /> */}
                </div>
            </section>
            <section className="design-screenshot">
                <h2>Design</h2>
                <div className="img-cont">
                    {/* <img className="project-sct-single" src={design1} alt="project1" /> */}
                    {/* <img className="project-sct-single" src={design2} alt="project1" /> */}
                </div>
            </section>
            <section className="code-snippet">
                <h2>Code Snippet</h2>
                {/* <img className="project-sct-single" src={codesnip} alt="project1" /> */}
                <p>Nam ut sollicitudin odio, ac dapibus tellus. Cras imperdiet tellus massa, non placerat dolor faucibus consequat. Fusce non luctus nisi. Ut sed eros enim. Morbi eu viverra lacus. Etiam aliquam est non dolor vulputate, nec consequat metus facilisis. Curabitur dignissim massa vel placerat euismod.</p>
            </section>
        </main>
    );
}

export default ProjectSingle;