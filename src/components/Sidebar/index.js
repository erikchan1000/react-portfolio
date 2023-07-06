import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoE from '../../assets/images/logo-e.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSheetPlastic} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoE} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="erik" />
        </Link>

        <nav>
            <NavLink exact="true" activeClassName="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" className="contact-link" to='/portfolio'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="work-link" to='/work'>
                <FontAwesomeIcon icon={faSheetPlastic} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/tony-chan-209540229/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="blank" rel='noreferrer' href='https://github.com/TonyYep'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar

