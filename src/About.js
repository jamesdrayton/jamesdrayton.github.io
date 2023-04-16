
// My about page. Includes a summary of who I am, what I'm up to, and my resume + contact info.
const About = ({page}) => {

    return ( 
        <section className={page.display ? "fadeIn" : "fadeOut"} style={page.display ? {display: 'block'}: {display: 'none'}}>
            <p className="aboutme">
                <span> As a <a target="_blank"> third culture kid </a> and a graduate in</span>
                <span> cognitive systems, I'm dedicated to </span>
                <span> developing reliable software that considers </span>
                <span> the perspectives and needs of all cultures, </span>
                <span> backgrounds, and fields. I'm experienced in the</span>
                <span> fundamentals of computer science, AI, </span>
                <span> and philosophy, and have over a decade </span>
                <span> of experience learning new technologies </span>
                <span> and programming languages. </span>
            </p>
        </section>
     );
}
 
export default About;