import { FaArrowRight } from 'react-icons/fa6';
import './OfferedServices.css';

let servicesData = [
    {
        id: 1,
        title: "Long-Term Retainer Partnerships",
        desc: "For brands that need sustained strategic communication beyond campaign-led visibility.",
        image: "/images/icons/services/1.png",
    },
    {
        id: 2,
        title: "Strategic Reputation Advisory",
        desc: "For founders, CXOs, and boards managing scale, scrutiny, and transition.",
        image: "/images/icons/services/2.png",
    },
    {
        id: 3,
        title: "Personal Brand-Building",
        desc: "For individuals building influence, credibility, and long-term public relevance.",
        image: "/images/icons/services/3.png",
    },
    {
        id: 4,
        title: "Corporate Brand-Building",
        desc: "For companies shaping market perception, authority, and stakeholder trust.",
        image: "/images/icons/services/4.png",
    },
    {
        id: 5,
        title: "Media Strategy & High-Trust Relations",
        desc: "For organisations that need access to top editorial authorities.",
        image: "/images/icons/services/5.png",
    },
    {
        id: 6,
        title: "Growth, Funding & Transition Communications",
        desc: "For businesses navigating expansion, capital raises, acquisitions, or transformation.",
        image: "/images/icons/services/6.png",
    },
    {
        id: 7,
        title: "Investor Communications",
        desc: "For companies/founders looking to grab investors’ eyeballs through Strategic Communications.",
        image: "/images/icons/services/7.png",
    },
    {
        id: 8,
        title: "Crisis Management",
        desc: "For organisations responding to sensitive situations where trust and perception are at stake.",
        image: "/images/icons/services/8.png",
    },
    {
        id: 9,
        title: "Influencer Engagement",
        desc: "For brands looking to drive cultural relevance through curated creator partnerships.",
        image: "/images/icons/services/9.png",
    },
    {
        id: 10,
        title: "Brand Events PR",
        desc: "For launches, experiences, and moments designed to generate visibility and conversation.",
        image: "/images/icons/services/10.png",
    },
    {
        id: 11,
        title: "Tourism Representation (for International Tourism Boards)",
        desc: "For destinations looking to expand visibility, aspiration, and traveller trust in India.",
        image: "/images/icons/services/11.png",
    },
    {
        id: 12,
        title: "Personality & Celebrity PR",
        desc: "For public figures navigating visibility, reputation, media attention, and audience perception.",
        image: "/images/icons/services/12.png",
    },
    {
        id: 13,
        title: "LinkedIn Branding",
        desc: "For founders, executives, and professionals looking to build authority, visibility, and industry influence on LinkedIn.",
        image: "/images/icons/services/13.png",
    },
]

const OfferedServices = () => {
    return (
        <>
            <section className="offered-services">
                <div className="services-head">
                    <h2 data-aos="fade-up">Services We Offer</h2>
                    <p data-aos="fade">Solutions tailored for different PR needs across stages of growth and reputation.</p>
                </div>

                <div className="services-row">
                    {
                        servicesData.map((item, index) => {
                            return (
                                <div className="service-box" key={index} data-aos="fade" data-aos-duration="400" data-aos-once="true">
                                    <span>{item.title}</span>
                                    <p>{item.desc}</p>
                                    <div className="card-foot">
                                        <a href="#">Read More <FaArrowRight className="icon" /></a>
                                        <img src={item.image} alt={item.title} loading="lazy" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default OfferedServices;
