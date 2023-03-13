import {useState, useEffect, useRef} from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Demo from './Demo';

function App() {
  // Display data for the 3 home pages
  // It cannot contain the demo pages, because home pages and demo pages can be displayed at the same time
  const [pages, setPages] = useState([
    {name: 'about', display: true},
    {name: 'projects', display: false},
    {name: 'contact', display: false}
  ]);

  // Display data for the list of projects
  const [projects, setProjects] = useState([
    {
      name: "Hallway Problem",
      id: 0,
      display: false,
      link: "HallwayDemo",
      description: "A Python recreation of the Hallway Problem using Bayes' theorem",
      role: "full-stack",
      year: 2023
    },
    {
      name: "Tempo Determination",
      id: 1,
      display: false,
      link: "TempoDemo",
      description: "Software for experimental use by the school of music at UBC",
      role: "full-stack",
      year: 2022
    }
  ])
  const [currDemo, setCurrDemo] = useState(null);

  // Updates which page in the homepage is being displayed
  const updateHome = (name) => {
    const newPages = [];
    pages.forEach(page => {
      if (page.name !== name) {
        page.display = false;
      } else {
        page.display = true;
      }
      newPages.push(page);
    });
    setCurrDemo(null);
    setPages(newPages);
  }

  // Updates which demo page is currently being displayed
  // Takes a project (demo) and sets display to be true for that project
  // in the projects list. Sets display as false for every other project.
  // If demo is null then no project is displayed at all (all are false).
  const updateDemo = (demo) => {
    const newProjects = [];
    projects.forEach(project => {
      if (project !== demo) {
        project.display = false;
      } else {
        project.display = true;
        setCurrDemo(demo.id);
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
        <Demo projects={projects} currDemo={currDemo}></Demo>
        <br></br>
      </div>
    </div>
  );
}

export default App;
