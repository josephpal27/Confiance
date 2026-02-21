import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <>
            <section className="about-banner">
                <img src="/images/banners/home-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Know Your PR Partner</h1>
                    <p data-aos="fade">Founded by seasoned Publicist Bushra Ismail, Confiance emerged from a clear industry gap: public relations had become overly focused on promotion and short-term optics, while critical leadership thinking, business risk, and strategic inflection points remained absent from public discourse.</p>
                    <p data-aos="fade">Confiance was shaped to reset this approach — by working closely with founders and leadership teams, extracting substance from boardroom conversations, and converting it into disciplined, credible public narratives. Today, it functions as a strategic Communications studio that operates as a long-term reputation partner, embedding into decision-making processes and shaping market perception with judgement, restraint, and institutional rigour.</p>
                </div>
            </section>
        </>
    )
}

export default AboutBanner;
