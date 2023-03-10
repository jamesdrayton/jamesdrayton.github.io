
// My about page. Includes a summary of who I am, what I'm up to, and my resume + contact info.
const About = ({page}) => {

    return ( 
        <section className={page.display ? "fadeIn" : "fadeOut"} style={page.display ? {display: 'block'}: {display: 'none'}}>
            <p className="aboutme">
                <span> Growing up in Canada,  </span>
                <span> Bangladesh, Indonesia, </span>
                <span> and Barbados, I'm </span>
                <span> determined to explore</span>
                <span> the power of ideas that </span>
                <span> draw from many places.</span>
                <span> I believe in creating </span>
                <span> scalable and efficient systems </span>
                <span> to the benefit of the users and </span>
                <span> the company.</span>
            </p>
        </section>
     );
}
 
export default About;