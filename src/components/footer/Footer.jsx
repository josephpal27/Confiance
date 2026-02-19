import './Footer.css';
import logo from "../../assets/images/logo/logo-white.png";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="foot-content">
                    <div className="foot-left">
                        <img src={logo} alt="Logo" loading="lazy" />
                        <p>Founded by seasoned publicist Bushra Ismail, Confiance Communications is a leading PR firm driving brand visibility for 300+ brands and 50+ VCs, shaping 15,000+ stories and reaching over 20 million stakeholders nationwide.</p>
                    </div>
                    <div className="foot-right">
                        <a href="https://maps.app.goo.gl/5ARDwhVpU2xoS2Nj7" target="_blank"> <FaLocationDot className="foot-icon" /> WeWork, DLF Two Horizon Centre, Golf Course Road, Sector 43, Gurugram, Haryana 122002</a>
                        <a href="tel:9654408464"> <FaPhone className="foot-icon" /> +91 9654408464</a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pr@confiancecommunications.com" target="_blank"> <IoIosMailOpen className="foot-icon" /> pr@confiancecommunications.com</a>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2025 | <span>Confiance Communications |</span> All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
