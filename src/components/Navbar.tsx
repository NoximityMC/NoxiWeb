import { useEffect } from "react";
import '../style/NavBar.css';
import discord from '../images/icons/discord.svg';
import icon from '../images/icons/NoximityLogo.svg';
import error from '../images/icons/error.svg';


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
    <div className="mobile-nav">
    <li>
      <img src={error} alt="logo" className="logo" />
    </li>
    <li>
      <a href="/">Our site is currently not optimized for this resolution</a>
    </li>
    <li>
      <a href="/">Please try again later</a>
    </li>
    <li>
      <a href="/" id="gradient-text">Noximity Team </a>
    </li>
    <li>
      <a href="/">
        <img src={discord} alt="discord" className="discord" />
      </a>
    </li>
  </div>
      </nav>
    )
}
