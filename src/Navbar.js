<<<<<<< HEAD

// The navigation bar. Includes links between my about page and my projects page.
const Navbar = ({updateHome}) => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/" onClick={() => updateHome('about')}>About Me</a>
                <a href="#projects" onClick={() => updateHome('projects')}>Projects</a>
                <a href="#contact" onClick={() => updateHome('contact')}>Contact</a>
            </div>
        </nav>
     );
}
 
=======

// The navigation bar. Includes links between my about page and my projects page.
const Navbar = ({updateHome}) => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/" onClick={() => updateHome('about')}>About Me</a>
                <a href="#projects" onClick={() => updateHome('projects')}>Projects</a>
                <a href="#contact" onClick={() => updateHome('contact')}>Contact</a>
            </div>
        </nav>
     );
}
 
>>>>>>> 4d34a253da978d675c2561e379bb7ce2b6670fe2
export default Navbar;