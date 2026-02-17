import { HashLink } from "react-router-hash-link";
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <section className="home-banner">
                <img src="/images/banners/home-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Driving Visibility. Delivering Impact.</h1>
                    <p data-aos="fade">Founded by seasoned publicist Bushra Ismail, Confiance Communications is a leading PR firm driving brand visibility for 250+ brands and 50+ VCs, shaping 15,000+ stories and reaching over 20 million stakeholders nationwide.</p>
                    <HashLink smooth to="/#get-in-touch">
                        <button>Talk To Our Experts</button>
                    </HashLink>
                </div>
            </section>
        </>
    )
}

export default HomeBanner;
