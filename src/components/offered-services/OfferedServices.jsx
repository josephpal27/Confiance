import './OfferedServices.css';

let servicesData = [
    {
        id: 1,
        title: "Long-Term Retainer Partnerships",
    },
    {
        id: 2,
        title: "Strategic Reputation Advisory",
    },
    {
        id: 3,
        title: "Founder Thought Leadership",
    },
    {
        id: 4,
        title: "Corporate Brand-Building",
    },
    {
        id: 5,
        title: "Media Strategy & High-Trust Relations",
    },
    {
        id: 6,
        title: "Growth, Funding & Transition Communications",
    },
    {
        id: 7,
        title: "Investor Communications",
    },
    {
        id: 8,
        title: "Crisis Management",
    },
    {
        id: 9,
        title: "Influencer Engagement",
    },
    {
        id: 10,
        title: "Brand Events PR",
    },
    {
        id: 11,
        title: "Tourism Representation (for International Tourism Boards)",
    },
]

const OfferedServices = () => {
    return (
        <>
            <section className="offered-services">
                <h2>Services We Offer</h2>

                <div className="services-row">
                    {
                        servicesData.map((item, index) => {
                            return (
                                <div className="service-box" key={index}>
                                    <p>
                                        <div>{item.id}.</div> 
                                        <div>{item.title}</div>
                                    </p>
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
