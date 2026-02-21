import './AboutUs.css';
import aboutImage from '../../assets/images/about-us.avif';
import { RiArrowDownWideFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <section className="about-us">
        <div className="about-us-image">
          <img src={aboutImage} alt="Founder" loading="lazy" />
        </div>
        <div className="about-us-content">
            <h2 data-aos="fade-up">About Us</h2>
            <p data-aos="fade">Founded by seasoned Publicist <span>Bushra Ismail</span>, Confiance is a strategic Communications partner to founders and institutions navigating growth and complexity.</p>
            <p data-aos="fade">We operate as an extension of leadership teams, bringing business context, disciplined storytelling, and seasoned judgement to every engagement. Our work sits at the intersection of strategy and communication — translating complex boardroom thinking into credible public narratives.</p>
            <p data-aos="fade">Over the years, we’ve partnered with 300+ brands across stages and sectors, supporting product launches, market entries, fundraising journeys, and reputation-building at critical inflection points.</p>
            <Link to="/about"><RiArrowDownWideFill className="down-icon" data-aos="fade"/></Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs
