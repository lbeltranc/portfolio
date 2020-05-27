import React, { useState } from 'react';
import myPicture from '../images/me.jpg';
import projectPicture from '../images/movie-app.jpg';
import { NavLink } from 'react-router-dom';


const Home = (props) => {
    

    return (
        <main>
            
            <section className="about" id="about">
                <h2>About</h2>
                <img className="my-pciture" src={myPicture} alt="me" />
                <div className="my-skills">
                    <ul>
                        <li><i className="fab fa-js-square"></i>JavaScript</li>
                        <li><i className="fab fa-react"></i>React</li>
                        <li><i className="fab fa-html5"></i>HTML/CSS</li>
                        <li><i className="fab fa-sass"></i>SASS</li>
                        <li><i className="fab fa-php"></i>PHP</li>
                        <li><i className="fab fa-wordpress-simple"></i>WordPress</li>
                    </ul>
                </div>
                <div className="about-me">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque purus sed mi interdum, eu cursus dui molestie. Mauris placerat, enim sit amet fermentum commodo, magna elit lacinia odio, eu bibendum metus nisi sit amet leo. Vestibulum et condimentum tellus, finibus lobortis nisl. Duis eleifend blandit diam eu aliquam. In faucibus quis tortor vitae vulputate. Etiam convallis turpis a sollicitudin euismod. Donec mollis dolor massa, id accumsan enim finibus feugiat. Nullam non feugiat nunc. Etiam lorem ligula, tincidunt vel laoreet id, facilisis eu ligula. Etiam mollis turpis neque, et auctor ligula sollicitudin quis. Suspendisse eu ipsum eget neque sollicitudin aliquam fringilla at justo.  
                    </p>
                </div>
            </section>
            <section className="projects" id="projects">
                <h2>Projects</h2>
                <img className="project-sct" src={projectPicture} alt="project1" />
                <div className="prject-overview">
                    <p>
                        Aliquam quis orci a ipsum blandit aliquet a in lorem. Etiam sem ante, pulvinar in nisl sit amet, fringilla suscipit erat. Cras pulvinar consequat nisl, vel varius ipsum faucibus non. Morbi id molestie tellus. Nullam sit amet fringilla quam, eu commodo sem. Aliquam iaculis nec ante ac gravida. Suspendisse tortor lorem, bibendum vel leo at, fermentum molestie tellus. Donec lacinia, turpis a sodales imperdiet, orci nisi aliquet nisl, at rhoncus nibh nibh vitae orci. Vivamus ligula sapien, scelerisque vitae quam nec, faucibus auctor nisl. Cras efficitur erat ut velit aliquam fermentum.
                    </p>
                    <button className="details-btn">
                        <NavLink className="more-details" to='/project-single'>More Details</NavLink>
                    </button>
                    <button className="live-btn">
                        Live Version
                    </button>
                </div>
            </section>
            <section className="contact" id="contact">
                <h2>Contact</h2>
                <p>lbeltranc0126@gmail.com</p>
                <div className="linkedin"><a href="https://www.linkedin.com/in/laura-beltran-caicedo-35ba58104/"><i className="fab fa-linkedin-in"></i></a></div>
                <div className="github-me"><a href="https://github.com/lbeltranc"><i className="fab fa-github"></i></a></div>
            </section>
        </main>
    );

}

export default Home;