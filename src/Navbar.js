
// The navigation bar. Includes links between my about page and my projects page.
const Navbar = ({updatePage}) => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/" onClick={() => updatePage('about')}>About Me</a>
                <a href="#projects" onClick={() => updatePage('projects')}>Projects</a>
                <a href="#contact" onClick={() => updatePage('contact')}>Contact</a>
            </div>
        </nav>
     );
}
 
export default Navbar;