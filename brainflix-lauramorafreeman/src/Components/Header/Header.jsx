import './Header.scss';
import logo from '../../logo/BrainFlix-logo.svg'
import image from '../../image/Mohan-muruge.jpg'
import {Link} from 'react-router-dom'


function Header () {
    return (
    <div className="header"> 
        <div className="header__main flex-container">
            <div className="header__main-image-wrapper">
                <Link to={`/`}>
                <img className="header__image flex-item" src={logo} alt="brainflix-logo" />
                </Link>
            </div>
            <div className='header__avatar-search-wrapp'>
            {/* <div className='header__avatar-wrapper flex-item'> */}
                <img className="header__avatar-1" src={image} alt="brainflix-avatar"/>
            {/* </div> */}
            {/* <div className="header__search-wrapper" class="flex-item flex-item"> */}
                <input className="header__search" type="text" placeholder = "      Search" />
            {/* </div> */}
            </div>
                <img className="header__avatar-tablet flex-item"  src={image} alt="brainflix-avatar"/>
                <input className="header__search-tablet flex-item" type="text" placeholder = "      Search" />
            <Link to="/upload" className='header__btn-wrapper'>
                <button className="header__btn-up flex-item" type="file" accept="image/png, image/jpeg">UPLOAD</button>
            </Link>
        </div>
    </div>);
}
    export default Header