import { useEffect,useState } from "react";
import '../style/NavBar.css';
import discord from '../images/icons/discord.svg';
import dropdown from '../images/icons/dropdown.svg';
import icon from '../images/icons/NoximityLogo.svg';


export default function NavBar() {
  
    useEffect(() => {
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll('.navbar-component a');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('focused');
        } else {
          link.classList.remove('focused');
        }
      });
    }, []);

    const [showMobileNav, setShowMobileNav] = useState(false);

    function toggleMobileNav() {
      setShowMobileNav(!showMobileNav);
    }



    return (
        <nav className="navbar">
        <ul className="main-nav">
            <li>
                <img src={icon} alt="logo" className="logo" />
            </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Showcase</a>
          </li>
          <li>
            <a href="/">Documentation</a>
          </li>
          
        </ul>
        <ul className="sub-nav">
          <li>
            <a href="/"><img src={discord} alt="discord" className="discord" /></a>
          </li>
        </ul>

        <button className="dropdownbtn" onClick={toggleMobileNav}>
        <div className="hamburger">
          <img src={dropdown} alt="logo" className="logo" />
        </div>
        </button>
        <div className="mobile-nav">
        {showMobileNav && (
          <ul className="mobile-nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Showcase</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
            <a href="/"><img src={discord} alt="discord" className="discord" /></a>
          </li>
          </ul>
        )}
        </div>
      </nav>
    )
}
