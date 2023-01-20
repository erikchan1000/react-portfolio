import "./index.scss";
import LogoE from "../../../assets/images/logo-e.png";
import {useRef, useEffect} from "react";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial"

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    const outlineLogoRef2 = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {duration: 1, opacity: 1})
        .from(outlineLogoRef.current, {duration: 2.5, drawSVG: 0})

        gsap.timeline().to(bgRef.current, {duration: 1, opacity: 1})
        .from((outlineLogoRef2.current), {duration: 2.5, drawSVG: 1, delay: 1})

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4.5,
                duration: 1,
            }
        )
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img className="solid-logo" src={LogoE} alt="E" ref={solidLogoRef}/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687.91 923.38" className="svg-container"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon ref={outlineLogoRef} class="cls-2" points="645.45 42.46 385.19 42.46 261.26 42.46 1 42.46 1 160.2 261.26 160.2 261.26 922.38 385.19 922.38 385.19 160.2 645.45 160.2 645.45 42.46"/><polygon  class="cls-1" ref={outlineLogoRef2} points="686.91 1 426.65 1 302.72 1 42.46 1 42.46 118.73 302.72 118.73 302.72 880.92 426.65 880.92 426.65 118.73 686.91 118.73 686.91 1"/></g></g></svg>
        </div>
    );
    }

export default Logo;