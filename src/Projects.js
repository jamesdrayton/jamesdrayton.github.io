
// A list of my projects containing a description of their purpose and the tools they use, as well as a demo when applicable.
const Projects = ({page, projects, updateDemo}) => {

    return ( 
        <section className="projects" style={{
            display: page.display,
            opacity: page.opacity
        }}>
            <div className="project-list">
                {projects.map((project) => (
                    <div className="preview">
                        <h2 onClick={() => updateDemo(project)}>{project.name}</h2>
                        <a>{project.description}</a>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Projects;