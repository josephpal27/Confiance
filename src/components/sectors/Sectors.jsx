import './Sectors.css';

let sectorsData = [
    { id: 1, title: "Tourism" },
    { id: 2, title: "Hospitality" },
    { id: 3, title: "Luxury" },
    { id: 4, title: "Deep-Tech" },
    { id: 5, title: "Venture Capital" },
    { id: 6, title: "FinTech & RegTech" },
    { id: 7, title: "Heath & Wellness" },
    { id: 8, title: "Consumer Brands" },
    { id: 9, title: "ConsumerTech" },
    { id: 10, title: "EdTech" },
    { id: 11, title: "Education" },
    { id: 12, title: "Real Estate" },
    { id: 13, title: "Energy" },
    { id: 14, title: "Climate & Sustainability" },
    { id: 15, title: "EV and Battery" },
    { id: 17, title: "Logistics" },
    { id: 17, title: "Infrastructure" },
]

const Sectors = () => {
    return (
        <>
            <section className="sectors">
                <h3 data-aos="fade-up">Sectors</h3>
                <div className="sectors-row">
                    {
                        sectorsData.map((item, index) => {
                            return (
                                <div className="sector-box" key={index} data-aos="fade" data-aos-once="true">
                                    <span>{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Sectors;
