import './OurAwards.css';
import { Tab, Nav } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const OurAwards = () => {
    return (
        <>
            <section className="our-awards">
                <h6 data-aos="fade-right">Our Awards</h6>
                <div className="awards-tabbing-container">
                    <Tab.Container defaultActiveKey="tabOne">
                        {/* Tabs Content */}
                        <Tab.Content>
                            <Tab.Pane eventKey="tabOne" className="fade show">
                                <img src="/images/awards/1.avif" alt="Tab 1" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabTwo" className="fade">
                                <img src="/images/awards/2.avif" alt="Tab 2" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabThree" className="fade">
                                <img src="/images/awards/3.avif" alt="Tab 3" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabFour" className="fade">
                                <img src="/images/awards/4.avif" alt="Tab 4" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabFive" className="fade">
                                <img src="/images/awards/5.avif" alt="Tab 5" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabSix" className="fade">
                                <img src="/images/awards/6.avif" alt="Tab 6" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabSeven" className="fade">
                                <img src="/images/awards/7.avif" alt="Tab 7" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabEight" className="fade">
                                <img src="/images/awards/8.avif" alt="Tab 8" loading="lazy" />
                            </Tab.Pane>
                        </Tab.Content>

                        {/* Tabs Navigation */}
                        <Nav variant="tabs" className="tab-head">
                            <Nav.Item>
                                <Nav.Link eventKey="tabOne">
                                    Afaqs CommuniCon 
                                    <a href="https://events.afaqs.com/communicon-2025/Awards/winners" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabTwo">
                                    She By Agency Reporter
                                    <a href="https://www.agencyreporter.com/she24/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabThree">
                                    Millennial Achievers 2025
                                    <a href="https://marketingmind.in/millennial-achievers-2025-presenting-the-winners-who-defined-excellence-this-year/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabFour">
                                    Agency Reporter 40Under40
                                    <a href="https://www.agencyreporter.com/40under40/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabFive">
                                    Reputation Today 40Under40
                                    <a href="https://reputationtoday.in/reputation-today-40-under-forty-class-of-2019/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabSix">
                                    E4M 40Under40
                                    <a href="https://www.exchange4media.com/pr-and-corporate-communication-news/exchange4media-unveils-pr-corporate-communications-40-under-40-list-101574.html%20" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabSeven">
                                    Impact Super 50
                                    <a href="https://www.impactonnet.com/spotlight/celebrating-women-leaders-in-pr-corp-comm-7105.html?fbclid=IwAR0VSkIg9p8ZTvY779NB9e69-oPlsgieoBitK8us3oIw3WxbQzONgZpKVVU" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabEight">
                                    E4M CEO of the Year Award
                                    <a href="https://www.exchange4media.com/pr-and-corporate-communication-news/47-leaders-honoured-at-first-edition-of-e4m-pr-corp-comm-women-achievers-awards-106465.html" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                        View More <FaArrowRight />
                                    </a>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default OurAwards
