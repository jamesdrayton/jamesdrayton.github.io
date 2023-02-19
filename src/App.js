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

  const updatePage = (name) => {
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

  return (
    <div className="App">
      <div className="Header">
        <div className="myname">
          <h1 style={{color: '#73ad21b5'}}>James&nbsp;</h1>
          <h1 style={{color: '#73AD21'}}>Drayton Beninger</h1>
        </div>
        <h2 style={{marginLeft: '27px', color: '#73AD21'}}>Software Engineer</h2>
        <br></br>
        <Navbar updatePage={updatePage}></Navbar>
      </div>
      <div className="content">
          <About pages={pages}></About>
          <Projects pages={pages}></Projects>
          <Contact pages={pages}></Contact>
      </div>
    </div>
  );
}

export default App;
