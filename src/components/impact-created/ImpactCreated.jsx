import { useEffect, useState } from "react";
import { leftArticles, rightArticles } from "./articlesData";
import newsImage from "../../assets/images/news.avif";
import "./ImpactCreated.css";
import ArticleCard from "./ArticleCard";

const ImpactCreated = () => {

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const [leftFlip, setLeftFlip] = useState(false);
  const [rightFlip, setRightFlip] = useState(false);

  const visibleLeft = [
    leftArticles[leftIndex % leftArticles.length],
    leftArticles[(leftIndex + 1) % leftArticles.length]
  ];

  const visibleRight = [
    rightArticles[rightIndex % rightArticles.length],
    rightArticles[(rightIndex + 1) % rightArticles.length]
  ];

  useEffect(() => {

    const interval = setInterval(() => {

      // Left Animation
      setLeftFlip(true);
      setTimeout(() => {
        setLeftIndex(prev => (prev + 2) % leftArticles.length);
        setLeftFlip(false);
      }, 700);

      // Right Animation
      setTimeout(() => {
        setRightFlip(true);
        setTimeout(() => {
          setRightIndex(prev => (prev + 2) % rightArticles.length);
          setRightFlip(false);
        }, 700);
      }, 1500);
    }, 7000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="impact-created">

      <div className="impact-content">
        <h3>Impact Created</h3>
        <p>
          Built 100+ Category Leaders <br /><br />
          Devised and Deployed Award Winning Campaigns <br /><br />
          Helped Clients Attract ~$1.3 Billion in Funding <br /><br />
          Stories Told Across Podcasts, TV Newsrooms, National Dailies, and Digital Media
        </p>
      </div>

      <div className="impact-images">
        <div className="impact-image-container">
          {/* Left*/}
          <div className="impact-left">
            <ArticleCard article={visibleLeft[0]} flip={leftFlip} delay={0} />

            <div className="article-card fixed-news">
              <img src={newsImage} alt="Breaking News" loading="lazy" />
            </div>

            <ArticleCard article={visibleLeft[1]} flip={leftFlip} delay={0.2} />
          </div>

          {/* Right */}
          <div className="impact-right">
            <ArticleCard article={visibleRight[0]} flip={rightFlip} delay={0} />
            <ArticleCard article={visibleRight[1]} flip={rightFlip} delay={0.2} />
          </div>
        </div>
      </div>

    </section>
  );
};

export default ImpactCreated;