import AboutUs from '../components/about-us/AboutUs';
import OurAwards from '../components/awards/OurAwards';
import Certificates from '../components/certificates/Certificates';
import OurClients from '../components/clients/OurClients';
import GetInTouch from '../components/get-in-touch/GetInTouch';
import ImpactCreated from '../components/impact-created/ImpactCreated';
import ClientReviews from '../components/reviews/ClientReviews';
import '../css/Home.css';
import homeBanner from '/images/banners/home-banner.avif';

const Home = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Driving Visibility. Delivering Impact.</h1>
                    <p data-aos="fade">Founded by seasoned publicist Bushra Ismail, Confiance Communications is a leading PR firm driving brand visibility for 250+ brands and 50+ VCs, shaping 15,000+ stories and reaching over 20 million stakeholders nationwide.</p>
                    <button>Talk To Our Experts</button>
                </div>
            </section>

            <AboutUs />

            {/* Impact Created & Certificates */}
            <section className="impact-created-and-certificates">
                <ImpactCreated />
                <Certificates />
            </section>

            <OurClients />
            <OurAwards />
            <ClientReviews />
            <GetInTouch />
        </>
    )
}

export default Home
