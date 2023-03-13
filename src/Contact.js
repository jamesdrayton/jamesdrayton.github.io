
// My contact form, linkedin, and resume
const Contact = ({page}) => {

    return ( 
        <section className={page.display ? "fadeIn" : "fadeOut"} style={page.display ? {display: 'block'}: {display: 'none'}}>
            <div className="contacts">
                <p>
                    <a href="https://github.com/jamesdrayton" target="_blank"> Github </a>
                    <a>Resume</a>
                </p>
            </div>
        </section>
     );
}
 
export default Contact;