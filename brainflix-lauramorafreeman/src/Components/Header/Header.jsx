import './Header.scss';
import logo from '../../logo/BrainFlix-logo.svg'
import image from '../../image/Mohan-muruge.jpg'


function Header () {
    return (<div className="header"> 
    <header className="header__main">
        <img className="header__image" src={logo} alt="brainflix-logo" />
        <form className="header__form" action="search">
            <input className="header__form__search" type="text" placeholder = "      Search" />
            <img className="header__form__avatar" src={image} alt="brainflix-avatar"/>
        </form>
        <button className="header__form__btn" type="file" accept="image/png, image/jpeg">UPLOAD</button>
    </header>
    </div>);
}
    export default Header