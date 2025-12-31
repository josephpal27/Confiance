import './ImpactCreated.css';
import impactImage from '../../assets/images/impact-created.avif';
// import micImage from '../../assets/images/announce.avif';

const ImpactCreated = () => {
  return (
    <>
      <section className="impact-created">
        <div className="impact-content">
            <h3 data-aos="fade-up">Impact Created</h3>
            <p data-aos="fade">Founded by seasoned publicist Bushra Ismail, Confiance Communications has established a strong foothold as one of India's most trusted and outcome-driven PR agencies.</p>
        </div>
        <div className="impact-images">
            <div className="impact-image-container">
                <img src={impactImage} alt="Impact Created" loading="lazy" />
            </div>
        </div>
        {/* <img src={micImage} alt="Annouce" loading="lazy" id="announce"/> */}
      </section>
    </>
  )
}

export default ImpactCreated
