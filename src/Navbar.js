
// The navigation bar. Includes links between my about page and my projects page.
const Navbar = ({updateHome}) => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/" onClick={() => updateHome('about')}>About Me</a>
                <a href="#projects" onClick={() => updateHome('projects')}>Projects</a>
                <a href="#contacts" onClick={() => updateHome('contact')}>Contacts</a>
            </div>
        </nav>
     );
}
 
export default Navbar;