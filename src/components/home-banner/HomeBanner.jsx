import { HashLink } from "react-router-hash-link";
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <section className="home-banner">
                <img src="/images/banners/home-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Strategic Communications Partner for <br /> Leaders Who Think Long-Term</h1>
                    <p data-aos="fade">We help founders and brands turn vision into influence. Through disciplined, needle-moving storytelling, and a counsel-led approach to PR, we build reputations that open doors to opportunity and create lasting business advantage.</p>
                    <HashLink smooth to="/#get-in-touch">
                        <button>Talk To Our Experts</button>
                    </HashLink>
                </div>
            </section>
        </>
    )
}

export default HomeBanner;
