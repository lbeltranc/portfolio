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
                        <li><i className="fab fa-html5"></i> HTML5|CSS</li>
                        <li><i className="fab fa-sass"></i> SASS</li>
                        <li><i className="fab fa-php"></i> PHP</li>
                        <li><i className="fab fa-wordpress-simple"></i> WordPress</li>
                        <li><i className="fab fa-adobe"></i> Photoshop|Adobe XD</li>

                    
                    </ul>
                </div>
            </div>
            <div className="about-me">
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque purus sed mi interdum, eu cursus dui molestie. Mauris placerat, enim sit amet fermentum commodo, magna elit lacinia odio, eu bibendum metus nisi sit amet leo. Vestibulum et condimentum tellus, finibus lobortis nisl. Duis eleifend blandit diam eu aliquam. In faucibus quis tortor vitae vulputate. Etiam convallis turpis a sollicitudin euismod. Donec mollis dolor massa, id accumsan enim finibus feugiat. Nullam non feugiat nunc. Etiam lorem ligula, tincidunt vel laoreet id, facilisis eu ligula. Etiam mollis turpis neque, et auctor ligula sollicitudin quis. Suspendisse eu ipsum eget neque sollicitudin aliquam fringilla at justo.  
                </p>
            </div>
        </section>
    );
}

export default About;