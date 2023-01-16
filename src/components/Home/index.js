import './index.scss'
import logoE from '../../assets/images/logo-e.png'
import {Link} from 'react-router-dom'
import Hover from '../Hover'

const Home = () => {
    return (
        <div className="container home-page"> 
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={logoE} alt="developer" />
                rik Chan
                <br/>
                web developer
                </h1>

                <h2>Fullstack Developer</h2>

                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                <br/>
            </div>

            <div className="hover-zone">
                <Hover/>
            </div>
            
        </div>
    )
}

export default Home