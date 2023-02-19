
// My contact form, linkedin, and resume
const Contact = ({pages}) => {
    const thisPage = pages.filter(page => page.name === 'contact')[0];

    return ( 
        <section className="contact" style={{
            display: thisPage.display,
            opacity: thisPage.opacity
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