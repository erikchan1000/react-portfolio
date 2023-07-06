import "./index.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faAngular, faFigma, faReact, faHtml5, faPython } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders'
import UCSBLogo from "../../assets/images/UCSBLogo.png"

const About = () => {
    const idx = useRef(0);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass="text-animate" strArray={["About me"]} id={idx} startColor="white" endColor="#ffd700"/>
                    </h1>
                    <p>
                        I am your friendly neighborhood Tony, a passionate statistics and data science major. I am currently a senior at the University of California, Santa Barbara. I am a full-stack developer with a focus on front-end development. I am proficient in React, Angular, and Python. I am also familiar with HTML, CSS, JavaScript, and SQL. I am currently looking for a full-time position as a software engineer. I am also open to internships and part-time positions. Feel free to contact me if you have any questions.
                    </p>
                    <p>
                        Filler
                    </p>
                    <p>
                        Filler
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>

                    <div className='cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon className="adjust" icon={faPython} color="#fce303"/>
                        </div>
                        <div className="face2">
                            <img src={UCSBLogo} alt="UCSB Logo" style={{width: "20rem"}}/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon className="adjust" icon={faReact} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon className="adjust" icon={faDatabase} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon className="adjust" icon={faTerminal} color="#EFD81D"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon className="adjust" icon={faHtml5} color="#EC4"/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
    
}

export default About;