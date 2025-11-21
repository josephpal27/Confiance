import AboutUs from '../components/about-us/AboutUs';
import Certificates from '../components/certificates/Certificates';
import ImpactCreated from '../components/impact-created/ImpactCreated';
import '../css/Home.css';
import homeBanner from '/images/banners/home-banner.avif';

const Home = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src={homeBanner} alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, nesciunt excepturi. Dicta quo et provident eos laborum debitis asperiores voluptatem qui, eaque possimus iste sit? Et inventore provident facilis sit!</p>
                    <button>Talk To Our Experts</button>
                </div>
            </section>

            {/* About Us */}
            <AboutUs />

            {/* Impact Created & Certificates */}
            <section className="impact-created-and-certificates">
                <ImpactCreated />
                <Certificates />
            </section>
        </>
    )
}

export default Home
