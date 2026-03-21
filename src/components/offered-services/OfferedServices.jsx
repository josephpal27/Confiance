import { FaArrowRight } from 'react-icons/fa6';
import './OfferedServices.css';

let servicesData = [
    {
        id: 1,
        title: "Long-Term Retainer Partnerships",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/1.png",
    },
    {
        id: 2,
        title: "Strategic Reputation Advisory",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/2.png",
    },
    {
        id: 3,
        title: "Founder Thought Leadership",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/3.png",
    },
    {
        id: 4,
        title: "Corporate Brand-Building",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/4.png",
    },
    {
        id: 5,
        title: "Media Strategy & High-Trust Relations",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/5.png",
    },
    {
        id: 6,
        title: "Growth, Funding & Transition Communications",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/6.png",
    },
    {
        id: 7,
        title: "Investor Communications",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/7.png",
    },
    {
        id: 8,
        title: "Crisis Management",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/8.png",
    },
    {
        id: 9,
        title: "Influencer Engagement",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/9.png",
    },
    {
        id: 10,
        title: "Brand Events PR",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/10.png",
    },
    {
        id: 11,
        title: "Tourism Representation (for International Tourism Boards)",
        desc: "Lorem ipsum dolor sit amet cons adipicing elit dolor amet. Lorem, ipsum dolor.",
        image: "/images/icons/services/11.png",
    },
]

const OfferedServices = () => {
    return (
        <>
            <section className="offered-services">
                <div className="services-head">
                    <h2 data-aos="fade-up">Services We Offer</h2>
                    <p data-aos="fade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur unde quam maxime nisi magni voluptatum deserunt perferendis amet reiciendis.</p>
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
