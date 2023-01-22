import "./index.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faAngular, faFigma, faReact, faHtml5 } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const idx = useRef(0);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass="text-animate" strArray={["About me"]} id={idx} startColor="white" endColor="#ffd700"/>
                </h1>
                <p>
                    Filler
                </p>
                <p>
                    Filler
                </p>
                <p>
                    Filler
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon className="adjust" icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon className="adjust" icon={faFigma} color="#F06529"/>
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
    );
    
}

export default About;