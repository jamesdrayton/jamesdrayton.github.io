
import {useState} from 'react'

// My about page. Includes a summary of who I am, what I'm up to, and my resume + contact info.
const About = ({page, updateFoot}) => {

    return ( 
        <section className={page.display ? "fadeIn" : "fadeOut"} style={page.display ? {display: 'block'}: {display: 'none'}}>
            <p className="aboutme">
                {/* <span> As a <a onClick={() => updateFoot(1, "Third Culture Kid", "https://en.wikipedia.org/wiki/Third_culture_kid")}> TCK <sup>1</sup></a> and a graduate in</span>
                <span> <a onClick={() => updateFoot(2, "Cognitive Systems is a multi-disciplinary program at UBC which promotes understanding of the systems which support organic and artificial forms of intelligence.", 
                                                        "https://cogsys.ubc.ca/about-cogs-2/")} target="_blank">cognitive systems <sup>2</sup></a>, I'm dedicated to </span>
                <span> developing robust systems which </span>
                <span> ??? </span>
                <span> and serve a diverse range of users. </span>
                <span> I have professional and academic experience </span>
                <span> in computer science, psychology, AI, </span>
                <span> and statistics, and have over a decade </span>
                <span> of experience learning new technologies, </span>
                <span> programming languages and tools. </span> */}
            </p>
        </section>
     );
}
 
export default About;