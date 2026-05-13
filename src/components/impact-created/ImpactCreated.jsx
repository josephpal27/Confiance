import { useEffect, useState } from "react";
import { leftArticles, rightArticles } from "../../data/articlesData";
import newsImage from "../../assets/images/news.avif";
import "./ImpactCreated.css";
import ArticleCard from "./ArticleCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ImpactCreated = () => {

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const [leftFlip, setLeftFlip] = useState(false);
  const [rightFlip, setRightFlip] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const visibleLeft = [
    leftArticles[leftIndex % leftArticles.length],
    leftArticles[(leftIndex + 1) % leftArticles.length]
  ];

  const visibleRight = [
    rightArticles[rightIndex % rightArticles.length],
    rightArticles[(rightIndex + 1) % rightArticles.length]
  ];

  // Pause Auto (resume after 10s)
  const pauseAuto = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Next Btn
  const handleNext = () => {
    if (isAnimating) return;

    pauseAuto();
    setIsAnimating(true);

    // Left
    setLeftFlip(true);
    setTimeout(() => {
      setLeftIndex(prev => (prev + 2) % leftArticles.length);
      setLeftFlip(false);
    }, 700);

    // Right
    setTimeout(() => {
      setRightFlip(true);
      setTimeout(() => {
        setRightIndex(prev => (prev + 2) % rightArticles.length);
        setRightFlip(false);
        setIsAnimating(false);
      }, 700);
    }, 1500);
  };

  // Prev Btn
  const handlePrev = () => {
    if (isAnimating) return;

    pauseAuto();
    setIsAnimating(true);

    // Left
    setLeftFlip(true);
    setTimeout(() => {
      setLeftIndex(prev =>
        (prev - 2 + leftArticles.length) % leftArticles.length
      );
      setLeftFlip(false);
    }, 700);

    // Right
    setTimeout(() => {
      setRightFlip(true);
      setTimeout(() => {
        setRightIndex(prev =>
          (prev - 2 + rightArticles.length) % rightArticles.length
        );
        setRightFlip(false);
        setIsAnimating(false);
      }, 700);
    }, 1500);
  };

  // Auto Slide (continuous)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (isAnimating) return;

      setIsAnimating(true);

      // Left
      setLeftFlip(true);
      setTimeout(() => {
        setLeftIndex(prev => (prev + 2) % leftArticles.length);
        setLeftFlip(false);
      }, 700);

      // Right
      setTimeout(() => {
        setRightFlip(true);
        setTimeout(() => {
          setRightIndex(prev => (prev + 2) % rightArticles.length);
          setRightFlip(false);
          setIsAnimating(false);
        }, 700);
      }, 1500);

    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, isAnimating]);

  return (
    <section className="impact-created">

      <div className="impact-content">
        <h3 data-aos="fade-up">Impact Created</h3>
        <p data-aos="fade">
          Built 100+ Category Leaders <br /><br />
          Devised and Deployed Award Winning Campaigns <br /><br />
          Helped Clients Attract ~$1.3 Billion in Funding <br /><br />
          Stories Told Across Podcasts, TV Newsrooms, National Dailies, and Digital Media
        </p>
      </div>

      <div className="impact-images">
        <div className="impact-image-container">

          {/* Left */}
          <div className="impact-left">
            <ArticleCard article={visibleLeft[0]} flip={leftFlip} delay={0} />

            {/* <div className="article-card fixed-news">
              <img src={newsImage} alt="Breaking News" loading="lazy" />
            </div> */}

            <ArticleCard article={visibleLeft[1]} flip={leftFlip} delay={0.2} />
          </div>

          {/* Right */}
          <div className="impact-right">
            <ArticleCard article={visibleRight[0]} flip={rightFlip} delay={0} />
            <ArticleCard article={visibleRight[1]} flip={rightFlip} delay={0.2} />
          </div>

        </div>

        {/* Controls */}
        <div className="impact-controls">
          <button onClick={handlePrev} disabled={isAnimating}><FaArrowLeft /></button>
          <button onClick={handleNext} disabled={isAnimating}><FaArrowRight /></button>
        </div>

      </div>

    </section>
  );
};

export default ImpactCreated;