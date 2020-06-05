import React, { useState } from 'react';
import About from '../components/About';
import ProjectsHome from '../components/ProjectsHome';
import Welcome from '../components/Welcome';
import Contact from '../components/Contact';


const Home = () => {
    

    return (
        <main>
            <Welcome />
            <About />
            <ProjectsHome />
            <Contact />
        </main>
    );

}

export default Home;