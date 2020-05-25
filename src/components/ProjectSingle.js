import React, { useState } from 'react';
import projectPicture from '../images/movie-app.jpg';

const ProjectSingle = () => {
    

    return (
        <main>
            <h1>Movie app</h1>
            <section className="side-content">
                <img className="project-sct-single" src={projectPicture} alt="project1" />
                <p className="tools-used"> javascript, css</p>
                <div className="btn-cont">
                <button className="details-btn">
                        Live Site
                    </button>
                    <button className="live-btn">
                        GitHub
                    </button>
                </div>
            </section>
            <section className="project-overview">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit in odio a pretium. Sed suscipit sapien quis auctor ultricies. Ut nec purus posuere, luctus est vitae, luctus urna. Quisque ut quam erat. Nulla ac posuere nunc. Donec eu aliquam erat. Nam vehicula nisi a orci imperdiet vestibulum. Nullam hendrerit porta tellus ut finibus. Praesent mattis massa rutrum, iaculis nisl non, tristique neque.  
                </p>
            </section>
            <section className="members">
                <ul>
                    <li>Laura</li>
                    <li>Laura 2</li>
                </ul>
            </section>
            <section className="development">
                <p>
                Pellentesque lorem odio, vulputate sit amet neque ut, porttitor varius metus. Etiam porttitor nec justo eget pellentesque. Proin eget dolor ligula. Sed et convallis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit tellus. Donec non auctor ex. Nulla rutrum quam vel erat porta, ac tempus dolor luctus. Vivamus eget purus porttitor, cursus arcu vel, pulvinar n 
                </p>
            </section>
            <section className="wireframes">
                <div>wireframes</div>
            </section>
            <section className="design-screenshot">
                <div>design</div>
            </section>
            <section className="code-snippet">
                <div>code snippet</div>
            </section>
        </main>
    );
}

export default ProjectSingle;