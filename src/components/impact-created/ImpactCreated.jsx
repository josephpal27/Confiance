import './ImpactCreated.css';
import impactImage from '../../assets/images/impact-created.avif';

const ImpactCreated = () => {
  return (
    <>
      <section className="impact-created">
        <div className="impact-content">
            <h3>Impact Created</h3>
            <p>Founded by seasoned publicist Bushra Ismail, Confiance Communications has established a strong foothold as one of India's most trusted and outcome-driven PR agencies.</p>
        </div>
        <div className="impact-images">
            <div className="impact-image-container">
                <img src={impactImage} alt="Impact Created" loading="lazy" />
            </div>
        </div>
      </section>
    </>
  )
}

export default ImpactCreated
