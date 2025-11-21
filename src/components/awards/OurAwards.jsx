import './OurAwards.css';
import { Tab, Nav } from "react-bootstrap";
import award1 from '../../assets/images/awards/1.avif';

const OurAwards = () => {
    return (
        <>
            <section className="our-awards">
                <h6>Our Awards</h6>
                <div className="awards-tabbing-container">
                    <Tab.Container defaultActiveKey="tabOne">
                        {/* Tabs Content */}
                        <Tab.Content>
                            <Tab.Pane eventKey="tabOne" className="fade show">
                                <img src={award1} alt="Tab 1" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabTwo" className="fade">
                                <img src={award1} alt="Tab 2" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabThree" className="fade">
                                <img src={award1} alt="Tab 3" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabFour" className="fade">
                                <img src={award1} alt="Tab 4" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabFive" className="fade">
                                <img src={award1} alt="Tab 5" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabSix" className="fade">
                                <img src={award1} alt="Tab 6" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabSeven" className="fade">
                                <img src={award1} alt="Tab 7" loading="lazy" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="tabEight" className="fade">
                                <img src={award1} alt="Tab 8" loading="lazy" />
                            </Tab.Pane>
                        </Tab.Content>

                        {/* Tabs Navigation */}
                        <Nav variant="tabs" className="tab-head">
                            <Nav.Item>
                                <Nav.Link eventKey="tabOne">Afaqs CommuniCon</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabTwo">She By Agency Reporter</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabThree">Millennial Achievers 2025</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabFour">Agency Reporter 40Under40</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabFive">Reputation Today 40Under40</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabSix">E4M 40Under40</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabSeven">Impact Super 50</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tabEight">E4M CEO of the Year Award</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                </div>
            </section>
        </>
    )
}

export default OurAwards
