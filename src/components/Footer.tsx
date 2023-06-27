import '../style/Footer.scss';
import fullLogo from '../images/icons/logofull.svg';

export default function Homeheader() {
    return (
    <div className="footer">
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={fullLogo} alt="logo" className="footer-logo" />
            </div>
            <div className='footer-content-center'>
                <p className="footer-text">© 2023, The Noximity Team</p>
            </div>
            <div className='footer-content-right'>
                <p className="footer-text">Made with ❤️ by <a href="">@Noximity</a></p>
            </div>
        </div>
    </div>
    )
}