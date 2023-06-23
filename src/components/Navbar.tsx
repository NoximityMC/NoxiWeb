import { useEffect,useState  } from "react";
import '../style/NavBar.scss';
import discord from '../images/icons/discord.svg';
import icon from '../images/icons/NoximityLogo.svg';
import dropdown from '../images/icons/dropdown.svg';



export default function NavBar() {

  const [showMobileNav, setShowMobileNav] = useState(false);
  
    useEffect(() => {
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll('.navbar-component-center ul li a');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('focused');
        } else {
          link.classList.remove('focused');
        }
      });
    }, []);

    useEffect(() => {
      const currentPath = window.location.pathname;
      const links = document.querySelectorAll('.mobile-nav-list li a');
      links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('focused');
        } else {
          link.classList.remove('focused');
        }
      });
    }, []);


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
                        <li><a href="/">Home</a></li>
                        <li><a href="/showcase">Showcase</a></li>
                        <li><a href="/documentation">Documentation</a></li>
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
                      <a href="/showcase">Showcase</a>
                    </li>
                    <li>
                      <a href="/documentation">Documentation</a>
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
