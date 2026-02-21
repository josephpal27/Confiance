import './OurAwards.css';
import { Tab, Nav } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const awardsData = [
    {
        key: "tabOne",
        title: "Afaqs CommuniCon",
        img: "/images/awards/1.avif",
        link: "https://events.afaqs.com/communicon-2025/Awards/winners"
    },
    {
        key: "tabTwo",
        title: "She By Agency Reporter",
        img: "/images/awards/2.avif",
        link: "https://www.agencyreporter.com/she24/"
    },
    {
        key: "tabThree",
        title: "Millennial Achievers 2025",
        img: "/images/awards/3.avif",
        link: "https://marketingmind.in/millennial-achievers-2025-presenting-the-winners-who-defined-excellence-this-year/"
    },
    {
        key: "tabFour",
        title: "Agency Reporter 40Under40",
        img: "/images/awards/4.avif",
        link: "https://www.agencyreporter.com/40under40/"
    },
    {
        key: "tabFive",
        title: "Reputation Today 40Under40",
        img: "/images/awards/5.avif",
        link: "https://reputationtoday.in/reputation-today-40-under-forty-class-of-2019/"
    },
    {
        key: "tabSix",
        title: "E4M 40Under40",
        img: "/images/awards/6.avif",
        link: "https://www.exchange4media.com/pr-and-corporate-communication-news/exchange4media-unveils-pr-corporate-communications-40-under-40-list-101574.html"
    },
    {
        key: "tabSeven",
        title: "Impact Super 50",
        img: "/images/awards/7.avif",
        link: "https://www.impactonnet.com/spotlight/celebrating-women-leaders-in-pr-corp-comm-7105.html"
    },
    {
        key: "tabEight",
        title: "E4M CEO of the Year Award",
        img: "/images/awards/8.avif",
        link: "https://www.exchange4media.com/pr-and-corporate-communication-news/47-leaders-honoured-at-first-edition-of-e4m-pr-corp-comm-women-achievers-awards-106465.html"
    }
];

const OurAwards = () => {
    return (
        <section className="our-awards">
            <h6 data-aos="fade-right">Our Awards</h6>

            <div className="awards-tabbing-container">
                <Tab.Container defaultActiveKey={awardsData[0].key}>

                    {/* Tab Content */}
                    <Tab.Content>
                        {awardsData.map((award) => (
                            <Tab.Pane key={award.key} eventKey={award.key}>
                                <img
                                    src={award.img}
                                    alt={award.title}
                                    loading="lazy"
                                />
                            </Tab.Pane>
                        ))}
                    </Tab.Content>

                    {/* Tab Navigation */}
                    <Nav variant="tabs" className="tab-head">
                        {awardsData.map((award) => (
                            <Nav.Item key={award.key}>
                                <Nav.Link eventKey={award.key}>
                                    {award.title}
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span>View More</span> <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                </Tab.Container>
            </div>
        </section>
    );
};

export default OurAwards;