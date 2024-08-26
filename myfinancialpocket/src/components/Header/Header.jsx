import './Header.css';
import logo from '../../assets/logo.png';
import MainMenu from '../subcomponents/MainMenu/MainMenu';

function Header() {
    

    return (
        <header>
            <img src={logo} alt="Logo"/>
            <MainMenu/>
        </header>
    );
}

export default Header;