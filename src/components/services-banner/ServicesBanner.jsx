import './ServicesBanner.css';

const ServicesBanner = () => {
    return (
        <>
            <section className="services-banner">
                <img src="/images/banners/services-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">What We Do</h1>
                    <p data-aos="fade">We deliver strategic PR & reputation advisory and execution support for founders, brands, institutions, and high-growth businesses. We combine media intelligence, narrative strategy, and targeted stakeholder Communications to build visibility that strengthens credibility, trust, and long-term market relevance.</p>
                </div>
            </section>
        </>
    )
}

export default ServicesBanner;
