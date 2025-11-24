import './AboutUs.css';
import aboutImage from '../../assets/images/about-us.avif';
import { FaStar } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="about-us-line-container">
            <div className="about-line">
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
            </div>
            <div className="about-line">
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
            </div>
            <div className="about-line">
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
                <p>Lorem ipsum <FaStar className="star-icon" /></p>
            </div>
            <div className="about-rounded-image">
                <img src={aboutImage} alt="About Us" loading="lazy" data-aos="fade" data-aos-once="true" />
            </div>
        </div>
        <div className="about-us-content">
            <h2 data-aos="fade-up">About Us</h2>
            <p data-aos="fade">Founded by seasoned publicist Bushra Ismail, Confiance Communications has established a strong foothold as one of India's most trusted and outcome-driven PR agencies, particularly within the startup and venture capital ecosystems.With its excellent track record of working with over 30 VCs and 90 businesses across stages of growth, Confiance has till date fostered 10,000+ unique brand stories, and amped up visibility for its clients among 15 million+ stakeholders. The agency has become the go-to partner for brands seeking cutting-edge PR strategies, impactful public image transformations, and uncontested thought leadership positioning.</p>
            <RiArrowDownWideFill className="down-icon" data-aos="fade"/>
        </div>
      </section>
    </>
  )
}

export default AboutUs
