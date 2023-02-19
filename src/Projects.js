
// A list of my projects containing a description of their purpose and the tools they use, as well as a demo when applicable.
const Projects = ({pages}) => {
    const thisPage = pages.filter(page => page.name === 'projects')[0];
    
    return ( 
        <section className="projects" style={{
            display: thisPage.display,
            opacity: thisPage.opacity
        }}>
            <p>Projects page</p>
        </section>
     );
}
 
export default Projects;