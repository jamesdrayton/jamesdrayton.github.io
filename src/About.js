
// My about page. Includes a summary of who I am, what I'm up to, and my resume + contact info.
const About = ({pages}) => {
    const thisPage = pages.filter(page => page.name === 'about')[0];

    return ( 
        <section className="about" style={{
            display: thisPage.display,
            opacity: thisPage.opacity
        }}>
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