import "./index.scss";
import LogoE from "../../../assets/images/logo-e.png";


const Logo = () => {

    return (
        <div className="logo-container">
            <img className="solid-logo" src={LogoE} alt="E"/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 687.91 923.38" className="svg-container"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-2" points="645.45 42.46 385.19 42.46 261.26 42.46 1 42.46 1 160.2 261.26 160.2 261.26 922.38 385.19 922.38 385.19 160.2 645.45 160.2 645.45 42.46"/><polygon  class="cls-1" points="686.91 1 426.65 1 302.72 1 42.46 1 42.46 118.73 302.72 118.73 302.72 880.92 426.65 880.92 426.65 118.73 686.91 118.73 686.91 1"/></g></g></svg>
        </div>
    );
    }

export default Logo;