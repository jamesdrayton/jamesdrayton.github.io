
// My contact form, linkedin, and resume
const Contact = ({page}) => {

    return ( 
        <section className={page.display ? "fadeIn" : "fadeOut"} style={page.display ? {display: 'block'}: {display: 'none'}}>
            <div className="contacts">
                <p>
                    <a href="https://github.com/jamesdrayton" target="_blank"> Github </a>
                    <a href="./James Drayton Beninger_Resume.pdf"> Resume </a>
                    <a href="https://www.linkedin.com/in/jamesdraytonbeninger/"> LinkedIn</a>
                </p>
            </div>
        </section>
     );
}
 
export default Contact;