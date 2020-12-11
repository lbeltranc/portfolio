import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import projectsData from '../content/projects.json';

const ProjectSingle = () => {

    let { id } = useParams();

    const [projectSingleData, setProjectSingleData] = useState();

    useEffect(() => {
        setProjectSingleData(projectsData.find(item => item.id === id));
    }, [id]);

    return (
        <main className="single-project">
            {projectSingleData &&
                <div className="single-page-container">
                    <h1>{projectSingleData.title}</h1>
                    <section className="side-content">
                        <img className="project-mockup-single" src={`../assets/images/mockups/${projectSingleData.mockup}`} alt={projectSingleData.title} />
                        <div className="tools-used-cont">
                            {projectSingleData.tools.map((tool) => {
                                return (
                                    <span className="tools-used" key={tool.name}><i className={`fab fa-${tool.icon}`} key={tool.icon}></i> {tool.name}</span>
                                )
                            })}
                        </div>
                        <div className="btn-container">
                            <a className="btn" href={projectSingleData.live_site} target="_blank" rel="noopener noreferrer">Live Version</a>
                            <a className="btn" href={projectSingleData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </section>
                    <section className="project-overview">
                        <h2>Overview</h2>
                        <p>{projectSingleData.overview}</p>
                    </section>
                    {projectSingleData.members.length !== 0 &&
                        <section className="members">
                            <h2>Members</h2>
                            <ul>
                                {projectSingleData.members.map((member) => {
                                    return (
                                        <li key={member}>{member}</li>
                                    )
                                })}
                            </ul>
                        </section>
                    }
                    <section className="development">
                        <h2>Development</h2>
                        <p>{projectSingleData.development}</p>
                    </section>
                    {projectSingleData.wireframes.length !== 0 &&
                        <section className="wireframes">
                            <h2>Wireframes</h2>
                            <div className="img-cont">
                                {projectSingleData.wireframes.map((wireframe) => {
                                    return (
                                        <img className="project-wireframes-single" key={wireframe} src={`../assets/images/wireframes/${wireframe}`} alt={wireframe} />
                                    )
                                })}
                            </div>
                        </section>
                    }
                    {projectSingleData.design_screenshots.length !== 0 &&
                        <section className="design-screenshot">
                            <h2>Design</h2>
                            <div className="img-cont">
                                {projectSingleData.design_screenshots.map((design_screenshots) => {
                                    return (
                                        <img className="design-screenshot-single" key={design_screenshots} src={`../assets/images/design-sc/${design_screenshots}`} alt={design_screenshots} />
                                    )
                                })}
                            </div>
                        </section>

                    }
                    {projectSingleData.code_snip.length !== 0 &&
                        <section className="code-snippet">
                            <h2>Code Snippet</h2>
                            {projectSingleData.code_snip.map((codeSnip) => {
                                return (
                                    <div className="code-snip-cont" key={codeSnip}>
                                        <p className="project-code-snippet-name" >{codeSnip.description}</p>
                                        <div className="img-cont">
                                            <img className="project-code-snippet-img" src={`../assets/images/code-snippet/${codeSnip.image}`} alt={codeSnip.image} />
                                        </div>
                                    </div>
                                )
                            })}
                        </section>}
                </div>
            }
        </main>
    );
}

export default ProjectSingle;