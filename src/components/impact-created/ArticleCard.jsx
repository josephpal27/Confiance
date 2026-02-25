import './ArticleCard.css';

const ArticleCard = ({ article, flip, delay }) => {
    return (
        <div
            className={`article-card ${flip ? "flip" : ""}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            <img src={article.image} alt="Article Image" loading="lazy" />
            <div className="overlay">
                <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    )
}

export default ArticleCard
