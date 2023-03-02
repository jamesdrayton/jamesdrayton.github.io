
// My contact form, linkedin, and resume
const Contact = ({page}) => {

    return ( 
        <section className="contact" style={{
            display: page.display,
            opacity: page.opacity
        }}>
            <div className="contacts">
                <p>Contacts page</p>
            </div>
            <div className="resume">
                <a>Resume</a>
            </div>
        </section>
     );
}
 
export default Contact;