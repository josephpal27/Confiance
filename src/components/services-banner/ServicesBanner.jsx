import './ServicesBanner.css';

const ServicesBanner = () => {
    return (
        <>
            <section className="services-banner">
                <img src="/images/banners/services-banner.png" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Our Services</h1>
                    <p data-aos="fade">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
            </section>
        </>
    )
}

export default ServicesBanner;
