import React from 'react';
import myPicture from '../images/me.jpg';

const About = () => {

    return (
        <section className="about" id="about">
            {/* <h2>About</h2> */}
            <div className="two-col">
                <img className="my-pciture" src={myPicture} alt="me" />
                <div className="my-skills">
                    <ul>
                        <li><i className="fab fa-js-square"></i> JavaScript</li>
                        <li><i className="fab fa-react"></i> React</li>
                        <li><i className="fab fa-html5"></i> HTML|CSS</li>
                        <li><i className="fab fa-sass"></i> SASS</li>
                        <li><i className="fab fa-php"></i> PHP</li>
                        <li><i className="fab fa-wordpress-simple"></i> WordPress</li>
                        <li><i className="fab fa-adobe"></i> Photoshop|Adobe XD</li>
                    </ul>
                </div>
            </div>
            <div className="about-me">
                <p>My name is Laura, I’m from Colombia and I have a bachelor in Electronic Engineering but I'm transitioning into Front-End Web Development. My passion is coding but I enjoy designing. I have experience with customer service and problem solving as I previously worked in Technical support.<br />
                I love traveling and meeting new places and new people. My favorite hobbies are to watch sci-fi movies and series.</p>
            </div>
        </section>
    );
}

export default About;