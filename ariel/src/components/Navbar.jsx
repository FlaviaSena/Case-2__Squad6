import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/navbar.css';
import Logo from '../components/img/Logo.ico'


function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (  
        <header className='headNav'>
            <img href={Logo} alt="" />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Sobre</a>
                <a href="/#">Contatos</a>
                <a href="/#">Inscrição</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar;