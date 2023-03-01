import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Demo from './Demo';

function App() {
  // Display data for the 3 home pages
  // It cannot contain the demo pages, because home pages and demo pages can be displayed at the same time
  const [pages, setPages] = useState([
    {name: 'about', display: 'block', opacity: 1},
    {name: 'projects', display: 'none', opacity: 0},
    {name: 'contact', display: 'none', opacity: 0}
  ]);

  // Display data for the list of projects
  const [projects, setProjects] = useState([
    {
      name: "Hallway Problem",
      id: 0,
      display: "none",
      opacity: 0,
      description: "A Python recreation of the Hallway Problem using Bayes' theorem",
      role: "full-stack",
      year: 2023
    },
    {
      name: "Tempo Determination",
      id: 1,
      display: "none",
      opacity: 0,
      description: "Software for experimental use by the school of music at UBC",
      role: "full-stack",
      year: 2022
    }
  ])
  const [currDemo, setDemo] = useState(0);

  // Updates which page in the homepage is being displayed
  const updateHome = (name) => {
    const newPages = [];
    pages.forEach(page => {
      if (page.name !== name) {
        page.display = 'none';
        page.opacity = 0;
      } else {
        page.display = 'block';
        page.opacity = 1;
      }
      newPages.push(page);
    });
    setPages(newPages);
  }

  // Updates which demo page is currently being displayed
  const updateDemo = (demo) => {
    const newProjects = [];
    projects.forEach(project => {
      if (project !== demo) {
        project.display = 'none';
        project.opacity = 0;
      } else {
        project.display = 'block';
        project.opacity = 1;
        setDemo(demo.id);
      }
      newProjects.push(project);
    });
    setProjects(newProjects);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="Header">
          <div className="myname">
            <h1 style={{color: '#73ad21b5', fontWeight: 'normal'}}>James&nbsp;</h1>
            <h1 style={{color: '#73AD21'}}>Drayton Beninger</h1>
          </div>
          <h2 style={{marginLeft: '27px', color: '#73AD21'}}>Software Engineer</h2>
          <br></br>
          <Navbar updateHome={updateHome}></Navbar>
        </div>
        <div className="content">
            <About page={pages.filter(page => page.name === 'about')[0]}></About>
            <Projects page={pages.filter(page => page.name === 'projects')[0]} projects={projects} updateDemo={updateDemo}></Projects>
            <Contact page={pages.filter(page => page.name === 'contact')[0]}></Contact>
        </div>
      </div>
      <div className="demos">
        <Demo project={projects[currDemo]}></Demo>
        <br></br>
      </div>
    </div>
  );
}

export default App;
