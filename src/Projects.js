
// A list of my projects containing a description of their purpose and the tools they use, as well as a demo when applicable.
const Projects = ({page, projects, updateDemo}) => {

    return ( 
        <section className={page.display ? "fadeIn" : "fadeOut"} style={page.display ? {display: 'block'}: {display: 'none'}}>
            <div className="project-list">
                {projects.map((project) => (
                    <div className="preview">
                        <div className="title">
                            <h2 onClick={() => updateDemo(project)}>{project.name}</h2>
                        </div>
                        <div className="description">
                            <a>{project.year} {project.role}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default Projects;