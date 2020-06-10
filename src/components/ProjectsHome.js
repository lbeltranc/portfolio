import React from 'react';
import { NavLink } from 'react-router-dom';
import projectsData from '../content/projects.json';

const ProjectsHome = () => {
    
    return projectsData.map((item) => {
        console.log(item.members)
        return (
            <section key={item.id} className="projects" id="projects">
                 <div className="project-item">
                    <div className="title-cont">
                        <img className="project-sct" src={`assets/images/mockups/${item.mockup}`} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                    <div className="project-overview">
                        <p>{item.overview}</p>
                        <div className="tools-used-cont">
                            {item.tools.map((tool) => {
                                return(
                                <span className="tools-used" key={tool.name}><i className={`fab fa-${tool.icon}`} key={tool.icon}></i> {tool.name}</span>
                                )
                            }) }
                        </div>
                        <div className="btn-container">
                            <NavLink className="btn more-details" to={`/project-single/${item.id}`}>More Details</NavLink>
                            <a className="btn" href={item.live_site} target="_blank" rel="noopener noreferrer">Live Version</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    })


}

export default ProjectsHome;