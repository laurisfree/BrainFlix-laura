import './Header.scss';
import logo from '../../logo/BrainFlix-logo.svg'
import image from '../../image/Mohan-muruge.jpg'


function Header () {
    return (<div className="header"> 
    <div className="header__main">
        <div className='header__main-image-wrapper'>
        <img className="header__image" src={logo} alt="brainflix-logo" />
        </div>
        <div className="header__form">
            <div className='header__form__avatar__wrapper'>
                <img className="header__form__avatar" src={image} alt="brainflix-avatar"/>
                <input className="header__form__search" type="text" placeholder = "      Search" />
            </div>
            <div className='header__form__btn-wrapper'>
                <button className="header__form__btn" type="file" accept="image/png, image/jpeg">UPLOAD</button>
            </div>
        </div>

        {/* <button className="header__form__btn" type="file" accept="image/png, image/jpeg">UPLOAD</button> */}
        </div>
    </div>);
}
    export default Header