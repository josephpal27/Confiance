import AboutUs from '../components/about-us/AboutUs';
import OurAwards from '../components/awards/OurAwards';
import Certificates from '../components/certificates/Certificates';
import OurClients from '../components/clients/OurClients';
import GetInTouch from '../components/get-in-touch/GetInTouch';
import HomeBanner from '../components/home-banner/HomeBanner';
import ImpactCreated from '../components/impact-created/ImpactCreated';
import ClientReviews from '../components/reviews/ClientReviews';
import '../css/Home.css';

const Home = () => {
    return (
        <>
            <HomeBanner />
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
