
// A list of my projects containing a description of their purpose and the tools they use, as well as a demo when applicable.
const Projects = ({pages, projects, projectDemo}) => {
    const thisPage = pages.filter(page => page.name === 'projects')[0];

    return ( 
        <section className="projects" style={{
            display: thisPage.display,
            opacity: thisPage.opacity
        }}>
            <div className="project-list">
                {projects.map((project) => (
                    <div className="preview">
                        <h3 onClick={() => projectDemo(project.name)}>{project.name}</h3>
                        <a>{project.description}</a>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Projects;