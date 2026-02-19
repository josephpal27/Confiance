import './Founder.css';
import founderImage from '../../assets/images/about-us.avif';

const Founder = () => {
    return (
        <>
            <section className="founder">
                <div className="founder-top">
                    <div className="founder-top-content" data-aos="fade">
                        <h3 data-aos="fade-up">ABOUT THE FOUNDER</h3>
                        <p>The trajectory outlined above did not begin in 2018.</p>
                        <p>It was shaped over more than a decade of immersion in newsrooms, PR ecosystems, and corporate boardrooms — long before Confiance had a name.</p>
                        <p>Bushra Ismail’s professional foundation was built at the intersection of journalism, strategic Communications, and institutional leadership. Her early newsroom experience at CNN-News18 sharpened her editorial judgement and instinct for credibility. Her agency years, working closely with industry stalwarts, trained her in narrative discipline, stakeholder management, and long-horizon reputation building. Her role at Turkish Airlines, helming Communications for its India market, groomed her in enterprise-level execution at scale, where public perception, regulatory environments, and business strategy intersect daily.</p>
                        <p>Across these environments, one conviction took shape early: that communication delivers disproportionate impact only when it is treated as a strategic system, not a last-mile function.</p>
                    </div>
                    <div className="founder-top-image">
                        <img src={founderImage} alt="Founder" loading="lazy" data-aos="fade" />
                    </div>
                </div>
                <div className="founder-bottom" data-aos="fade">
                    <p>This conviction underpins every phase of Confiance’s journey.</p>
                    <p>Her leadership extends beyond client outcomes to how the organisation is built internally. She has shaped Confiance as a quality-first workplace that encourages intrapreneurship, ownership, and long-term careers — a conscious counterpoint to the high-churn norms of the Communications industry.</p>
                    <p>Bushra is also a consistent advocate for raising professional standards within the ecosystem, particularly around fair compensation, ethical practice, and recognising strategic Communications as a serious business function.</p>
                    <p>Her work and leadership have been recognised across leading industry platforms, including E4M CEO of the Year, Agency Reporter 40 Under 40, Afaqs CommuniCon, Impact Super 50 Women in PR & Comms, Reputation Today 40 Under 40, E4M PR 40 Under 40, Agency Reporter SheAward, and Millennial Achievers Award.</p>
                </div>
            </section>
        </>
    )
}

export default Founder
