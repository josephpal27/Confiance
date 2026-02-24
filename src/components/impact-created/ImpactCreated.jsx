import './ImpactCreated.css';
import newsImage from '../../assets/images/news.avif';

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
            <div className="impact-left">
              <div className="impact-image-box">
                <img src="/images/impact-created/1.png" alt="Impact 1" loading="lazy" />
              </div>
              <div className="impact-image-box">
                <img src={newsImage} alt="News" loading="lazy" />
              </div>
              <div className="impact-image-box">
                <img src="/images/impact-created/1.png" alt="Impact 2" loading="lazy" />
              </div>
            </div>
            <div className="impact-right">
              <div className="impact-image-box">
                <img src="/images/impact-created/2.png" alt="Impact 2" loading="lazy" />
              </div>
              <div className="impact-image-box">
                <img src="/images/impact-created/2.png" alt="Impact 2" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImpactCreated
