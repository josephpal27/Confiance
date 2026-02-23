import './ImpactCreated.css';
import impactImage from '../../assets/images/impact-created.avif';

const ImpactCreated = () => {
  return (
    <>
      <section className="impact-created">
        <div className="impact-content">
          <h3 data-aos="fade-up">Impact Created</h3>
          <p data-aos="fade">
            Built 100+ Category Leaders <br /> <br />
            Devised and Deployed Award Winning Campaigns <br /> <br />
            Helped Clients Attract ~$1.3 Billion in Funding <br /> <br />
            Stories Told Across Podcasts, TV Newsrooms, National Dailies, and Digital Media
          </p>
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
