import '../style/HomeHeader.css';
import banner from '../images/images/zombisquare.svg';

export default function Homeheader() {
    return (
    <div className="homebanner">
        <div className="bannerright">
            <img src={banner} alt="banner" />
        </div>
        <div className="bannerleft">
            <h1>Noximity</h1>
            <p>
            Open-source Minecraft plugin development team creating innovative plugins for enhanced gameplay and community engagement.
            </p>
            <button>Explore</button>
        </div>
    </div>
    )
}