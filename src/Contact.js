<<<<<<< HEAD

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
 
=======

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
 
>>>>>>> 4d34a253da978d675c2561e379bb7ce2b6670fe2
export default Contact;