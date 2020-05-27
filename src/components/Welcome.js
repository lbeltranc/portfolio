import React from 'react';
import Typewriter from 'typewriter-effect';

const Welcome = () => (

    <div className="welcome-message">
        <Typewriter
            options={{
                strings: ['Hello, my name is Laura', 'Front-End Web Developer'],
                autoStart: true,
                loop: true,
            }}
        />
    </div>
);


export default Welcome;