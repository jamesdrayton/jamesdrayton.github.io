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
    {name: 'contact', display: false},
    {name: 'footnotes', display: false}
  ]);

  // Display data for the list of projects
  const [projects, setProjects] = useState([
    {
      name: "Hallway Problem",
      id: 0,
      display: false,
      link: "https://github.com/jamesdrayton/Hallway-Problem",
      description: "A Python recreation of the Hallway Problem using Bayes' theorem",
      role: "full-stack",
      year: 2023
    },
    {
      name: "UBC VanLab",
      id: 1,
      display: false,
      link: "#TempoDemo",
      description: "Software for experimental use by the school of music at UBC",
      role: "full-stack",
      year: 2022
    },
    {
      name: "Web portfolio",
      id: 2,
      display: false,
      link: "https://github.com/jamesdrayton/jamesdrayton.github.io",
      description: "",
      role: "full-stack",
      year: 2023
    },
    {
      name: "UBC Game Dev 2020/2021",
      id: 3,
      display: false,
      link: "https://www.ubcgamedev.com/20202021",
      role: "VP Project Team Lead",
      year: 2021
    },
    {
      name: "AI assisted benchmarking",
      id: 4,
      display: false,
      link: "#questionnaire",
      description: "Questionnaire front-end for the JustAI CCAEC project",
      role: "full-stack and team leader",
      year: 2024
    }
  ])
  const [currDemo, setCurrDemo] = useState(null);
  const [footnotes, setFootnotes] = useState([]);
  // let footnotes = [];

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

  // TODO: Test this fn for Cross-site scripting vulnerabilities
  // Updates display data for the footnotes page to true.
  // Takes number n, text, and an optional url and pushes them to the footnotes stack.
  const updateFoot = (n, text, url) => {
    url = url || '';
    // Update display data for footnotes page to true.
    const newPages = [];
    pages.forEach(page => {
      if(page.name == 'footnotes') {
        page.display = true;
      }
      newPages.push(page);
    })
    setPages(newPages);

    // Changes footnotes var to text and url
    setFootnotes([n, text, url]);

    console.log(footnotes);
  }
  
  // Updates which demo page is currently being displayed
  // Takes a project (demo) and sets 'display' to be true for that project
  // in the projects list. Sets 'display' as false for every other project.
  // If demo is null then no project is displayed at all (all are false).
  const updateDemo = (demo) => {
    const newProjects = [];
    projects.forEach(project => {
      if (project !== demo) {
        project.display = false;
      } else {
        project.display = true;
        if (project.link.startsWith('https://')) {
          window.open(project.link, '_blank');
        }
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
          <h2 style={{marginLeft: '27px', color: '#73AD21'}}>Software Developer</h2>
          <br></br>
          <Navbar updateHome={updateHome}></Navbar>
        </div>
        <div className="content">
            <About page={pages.filter(page => page.name === 'about')[0]} updateFoot={updateFoot}></About>
            <Projects page={pages.filter(page => page.name === 'projects')[0]} projects={projects} updateDemo={updateDemo}></Projects>
            <Contact page={pages.filter(page => page.name === 'contact')[0]}></Contact>
        </div>
        <div className="footnotes" style={pages.filter(page => page.name === 'footnotes')[0].display ? {display: 'block'}: {display: 'none'}}>
          <a href={footnotes[2]} target="_blank">{footnotes[0]}: {footnotes[1]} </a>
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
