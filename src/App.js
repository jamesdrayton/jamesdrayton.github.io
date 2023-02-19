import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [pages, setPages] = useState([
    {name: 'about', display: 'block', opacity: 1},
    {name: 'projects', display: 'none', opacity: 0},
    {name: 'contact', display: 'none', opacity: 0}
  ]);

  const [projects, setProjects] = useState([
  {
    name: "Tempo Determination",
    description: "Software for experimental use by the school of music at UBC",
    tools: ["Node.js", "HTML", "CSS", "Javascript"],
    role: "full-stack",
    year: 2022
  },
  {
    name: "Hallway Problem",
    description: "A basic recreation of the Hallway Problem using Bayes' theorem and a belief system",
    tools: ["Python"],
    role: "full-stack",
    year: 2023
  }
  ])

  const currDemo = {name: 'none', display: 'none', opacity: 0}

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


  // Called when one of the project previews is clicked and reveals a demo beneath the "home" box
  const projectDemo = (name) => {
    projects.forEach(project => {
      if(project.name !== 'none') {
        currDemo.name = name;
        currDemo.display = 'block';
        currDemo.opacity = 1;
      } else {
        currDemo.display = 'none'
        currDemo.opacity = 0;
      }
    })
  }

  return (
    <div className="App">
      <div className="home">
        <div className="Header">
          <div className="myname">
            <h1 style={{color: '#73ad21b5', fontWeight: 'normal'}}>James&nbsp;</h1>
            <h1 style={{color: '#73AD21'}}>Drayton Beninger</h1>
          </div>
          <h2 style={{marginLeft: '27px', color: '#73AD21'}}>Software Developer</h2>
          <br></br>
          <Navbar updateHome={updateHome}></Navbar>
        </div>
        <div className="content">
            <About pages={pages}></About>
            <Projects pages={pages} projects={projects} projectDemo={projectDemo}></Projects>
            <Contact pages={pages}></Contact>
        </div>
      </div>
      <div className="demo" style={{
        display: currDemo.display,
        opacity: currDemo.opacity
      }}>
        <p>{currDemo.name}</p>
      </div>
    </div>
  );
}

export default App;
