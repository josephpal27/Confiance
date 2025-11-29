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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis, at reiciendis labore explicabo impedit dolorum architecto modi facere dolor?</p>
                    </div>
                    <div className="foot-right">
                        <a href="#"> <FaLocationDot className="foot-icon" /> WeWork, DLF Two Horizon Centre, Golf Course Road, Sector 43, Gurugram, Haryana 122002</a>
                        <a href="#"> <FaPhone className="foot-icon" /> +91 9654408464</a>
                        <a href="#"> <IoIosMailOpen className="foot-icon" /> pr@confiancecommunications.com</a>
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
