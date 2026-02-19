import './ServicesBanner.css';

const ServicesBanner = () => {
    return (
        <>
            <section className="services-banner">
                <img src="/images/banners/home-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Our Services</h1>
                </div>
            </section>
        </>
    )
}

export default ServicesBanner;
