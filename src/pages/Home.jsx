import '../css/Home.css';
import homeBanner from '/images/banners/home-banner.png';

const Home = () => {
  return (
    <>
      <section className="banner">
        <img src={homeBanner} alt="Banner" loading="eager" />
        <div className="banner-content">
            
        </div>
      </section>
    </>
  )
}

export default Home
