import { useEffect,useState  } from "react";
import '../style/NavBar.css';
import discord from '../images/icons/discord.svg';
import icon from '../images/icons/NoximityLogo.svg';
import dropdown from '../images/icons/dropdown.svg';



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
            <div className="desktop-nav">

                <div className="navbar-component-left">
                    <ul>
                        <li>
                          <a href="/">
                            <img src={icon} alt="Noximity Logo" id="logo" />
                          </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-component-center">
                    <ul>
                        <li><a href="/about">Home</a></li>
                        <li><a href="/projects">Showcase</a></li>
                        <li><a href="/contact">Documentation</a></li>
                    </ul>
                </div>
                <div className="navbar-component-right">
                    <li><a href="/discord"><img src={discord} alt="Discord Logo" id="discord"/></a></li>
                </div>
            </div>
            <div className="mobile-nav">

                <div className="navbar-component-left-mobile">
                  <ul>
                      <li>
                        <a href="/">
                          <img src={icon} alt="Noximity Logo" id="logo" />
                        </a>
                      </li>
                  </ul>
                </div>
                <div className="navbar-component-center-mobile">
                {showMobileNav && (
                  <ul className="mobile-nav-list">
                    <li>
                      <a href="#">Showcase</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                  </ul>
                )}
                </div>
                <div className="navbar-component-right-mobile">
                  <button className="dropdownbtn" onClick={toggleMobileNav}>
                    <div className="hamburger">
                      <img src={dropdown} alt="dropdown" className="dropdown" />
                    </div>
                  </button>
                </div>
            </div>
      </nav>
    )
}
