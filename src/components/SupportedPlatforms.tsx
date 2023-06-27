import '../style/SupportedPlatforms.scss';
import paper from '../images/icons/paper.svg';
import waterfall from '../images/icons/waterfall.svg';
import velocity from '../images/icons/velocity.svg';

export default function SupportedPlatforms() {
    return (
        <>
        <div className="supportedplatforms">
            <div className="centerlizer">
                <div className="supportedplatforms">
                    <h1>Supported Platforms</h1>
                    <p>
                    We are proud supporters of all platforms developed by PaperMC. Our expertise lies in ensuring compatibility between plugins and servers running Java 17 and newer versions like 1.17+. With our dedication to quality, we are the go-to choice for server owners seeking to enhance their players' experience.
                    </p>            
                        
                </div>
                <div className="supportedplatformsimage">
                    <div className="">
                        <a href="https://papermc.io/software/paper">
                        <img src={paper} alt="Paper"/>
                        </a>
                        </div>
                    <div className="">
                        <a href="https://papermc.io/software/waterfall">
                        <img src={waterfall} alt="Waterfall" />
                        </a>
                        </div>

                    <div className="">
                        <a href="https://papermc.io/software/velocity">
                        <img src={velocity} alt="Velocity" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}