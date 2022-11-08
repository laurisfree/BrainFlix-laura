import './Header.scss';
import logo from '../../logo/BrainFlix-logo.svg'
import image from '../../image/Mohan-muruge.jpg'


function Header () {
    return (
    <div className="header"> 
        <div className="header__main">
            <div className='header__main-image-wrapper flex-item'>
                <img className="header__image" src={logo} alt="brainflix-logo" />
            </div>
            <div className='header__avatar-wrapper flex-item'>
                <img className="header__avatar-1" src={image} alt="brainflix-avatar"/>
            </div>
            <div className="header__search-wrapper" class="flex-item flex-item">
                <input className="header__search" type="text" placeholder = "      Search" />
            </div>
            <div className='header__btn-wrapper' class="flex-item flex-item">
                <button className="header__btn-up" type="file" accept="image/png, image/jpeg">UPLOAD</button>
            </div>
        </div>
    </div>);
}
    export default Header