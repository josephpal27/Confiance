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
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
            </div>
            <div className="about-line">
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
            </div>
            <div className="about-line">
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
                <p>Confiance <FaStar className="star-icon" /></p>
            </div>
            <div className="about-rounded-image">
                <img src={aboutImage} alt="About Us" loading="lazy" data-aos="fade" data-aos-once="true" />
            </div>
        </div>
        <div className="about-us-content">
            <h2 data-aos="fade-up">About Us</h2>
            <p data-aos="fade">Confiance is a strategic communications partner to founders and institutions navigating growth and complexity.</p>
            <p data-aos="fade">We operate as an extension of leadership teams, bringing business context, disciplined storytelling, and seasoned judgement to every engagement. Our work sits at the intersection of strategy and communication — translating complex boardroom thinking into credible public narratives.</p>
            <p data-aos="fade">Over the years, we’ve partnered with 300+ brands across stages and sectors, supporting product launches, market entries, fundraising journeys, and reputation-building at critical inflection points.</p>
            <RiArrowDownWideFill className="down-icon" data-aos="fade"/>
        </div>
      </section>
    </>
  )
}

export default AboutUs
