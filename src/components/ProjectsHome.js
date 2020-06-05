import React from 'react';
import projectPicture from '../images/movie-app.jpg';
import { NavLink } from 'react-router-dom';

const ProjectsHome = () => {

    return (
        <section className="projects" id="projects">
             <div className="project-item">
                <div className="title-cont">
                    <img className="project-sct" src={projectPicture} alt="project1" />
                    <h3>React</h3>
                </div>
                <div className="project-overview">
                    <p>
                        Aliquam quis orci a ipsum blandit aliquet a in lorem. Etiam sem ante, pulvinar in nisl sit amet, fringilla suscipit erat. Cras pulvinar consequat nisl, vel varius ipsum faucibus non. Morbi id molestie tellus. Nullam sit amet fringilla quam, eu commodo sem. Aliquam iaculis nec ante ac gravida. Suspendisse tortor lorem, bibendum vel leo at, fermentum molestie tellus. Donec lacinia, turpis a sodales imperdiet, orci nisi aliquet nisl, at rhoncus nibh nibh vitae orci. Vivamus ligula sapien, scelerisque vitae quam nec, faucibus auctor nisl. Cras efficitur erat ut velit aliquam fermentum.
                    </p>
                    <p className="tools-used"> javascript, css</p>
                    <div className="btn-container">
                        <NavLink className="btn more-details" to='/project-single'>More Details</NavLink>
                        <a className="btn" href="#0">Live Version</a>

                    </div>
                </div>
            </div>
            <div className="project-item">
                <div className="title-cont">
                    <img className="project-sct" src={projectPicture} alt="project1" />
                    <h3>React</h3>
                </div>
                <div className="project-overview">
                    <p>
                        Aliquam quis orci a ipsum blandit aliquet a in lorem. Etiam sem ante, pulvinar in nisl sit amet, fringilla suscipit erat. Cras pulvinar consequat nisl, vel varius ipsum faucibus non. Morbi id molestie tellus. Nullam sit amet fringilla quam, eu commodo sem. Aliquam iaculis nec ante ac gravida. Suspendisse tortor lorem, bibendum vel leo at, fermentum molestie tellus. Donec lacinia, turpis a sodales imperdiet, orci nisi aliquet nisl, at rhoncus nibh nibh vitae orci. Vivamus ligula sapien, scelerisque vitae quam nec, faucibus auctor nisl. Cras efficitur erat ut velit aliquam fermentum.
                    </p>
                    <div className="btn-container">
                        <NavLink className="btn more-details" to='/project-single'>More Details</NavLink>
                        <a className="btn" href="#0">Live Version</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsHome;