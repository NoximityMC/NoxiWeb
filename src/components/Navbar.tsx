import { useEffect } from "react";
import '../style/Navbar.scss';
import logo from '../images/logo/noximity-full.png';

export default function NavBar() {

    useEffect(() => {
        // Get the current URL path
        const currentPath = window.location.pathname;

        // Get all links in the navbar
        const links = document.querySelectorAll('.navbar-component a');

        // Loop through the links and compare their href to the current URL path
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                // If the link href matches the current URL path, add the "focused" class
                link.classList.add('focused');
            } else {
                // Otherwise, remove the "focused" class
                link.classList.remove('focused');
            }
        });
    }, []); // run only once on component mount


    return (
        <div className="navbar-component">
            <ul className="main-nav">
            <ul className="main-nav"> {/* Added className */}
                <li><img src={logo} alt="logo id" className="desktop-logo"/></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/forums">FORUMS</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/store">STORE</a></li>
            </ul>
            </ul>
        <div className="navbar-subcomponent-right">
            <ul>
                <li>
                <a href="/login" target="_blank" rel="noreferrer" id="ip">DISCORD</a>
                </li>

                <li>
                <a href="/login" target="_blank" rel="noreferrer" id="ip">SIGN UP</a>
                </li>
            </ul>
            </div>
        </div>
    )
}