import './Sectors.css';

let sectorsData = [
    { id: 1, title: "Tourism", image: "/images/icons/sectors/1.png", },
    { id: 2, title: "Hospitality", image: "/images/icons/sectors/2.png", },
    { id: 3, title: "Luxury", image: "/images/icons/sectors/3.png", },
    { id: 4, title: "Deep-Tech", image: "/images/icons/sectors/4.png", },
    { id: 5, title: "Venture Capital", image: "/images/icons/sectors/5.png", },
    { id: 6, title: "FinTech & RegTech", image: "/images/icons/sectors/6.png", },
    { id: 7, title: "Health & Wellness", image: "/images/icons/sectors/7.png", },
    { id: 8, title: "Consumer Brands", image: "/images/icons/sectors/8.png", },
    { id: 9, title: "Consumer Tech", image: "/images/icons/sectors/9.png", },
    { id: 10, title: "EdTech", image: "/images/icons/sectors/10.png", },
    { id: 11, title: "Education", image: "/images/icons/sectors/11.png", },
    { id: 12, title: "Real Estate", image: "/images/icons/sectors/12.png", },
    { id: 13, title: "Energy", image: "/images/icons/sectors/13.png", },
    { id: 14, title: "Climate & Sustainability", image: "/images/icons/sectors/14.png", },
    { id: 15, title: "EV and Battery", image: "/images/icons/sectors/15.png", },
    { id: 16, title: "Logistics", image: "/images/icons/sectors/16.png", },
    { id: 17, title: "Infrastructure", image: "/images/icons/sectors/17.png", },
];

// Chunk function
const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const Sectors = () => {

    const rows = chunkArray(sectorsData, 6);

    return (
        <>
            <section className="sectors">
                <div className="sectors-head">
                    <h3 data-aos="fade-up">Sectors</h3>
                    <p data-aos="fade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur unde quam maxime nisi magni voluptatum deserunt perferendis amet reiciendis.</p>
                </div>

                {rows.map((row, rowIndex) => (
                    <div className="sectors-row" key={rowIndex}>
                        {row.map((item) => (
                            <div className="sector-box" key={item.id}>
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </>
    );
};

export default Sectors;