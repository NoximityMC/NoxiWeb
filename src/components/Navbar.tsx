import { useEffect } from "react";
import '../style/NavBar.css';


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
                <img src="https://i.imgur.com/ivU5qj6.png" alt="logo" className="logo" />
            </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Showcase</a>
          </li>
          <li>
            <a href="/">Documentantion</a>
          </li>
          <li>
            <a href="/">Discord</a>
          </li>
        </ul>
      </nav>
    )
}
