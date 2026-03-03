import './Timeline.css';
import { timelineData } from './TimelineData';

const Timeline = () => {
    return (
        <>
            <section className="timeline">
                <h2 data-aos="fade-up">Our Journey</h2>
                <div className="timeline-wrapper">
                    {timelineData.map((item, index) => (
                        <div
                            className={`timeline-row ${index % 2 !== 0 ? "reverse" : ""}`}
                            key={index}
                        >
                            {/* Left Side */}
                            <div className="timeline-left">
                                <h3 className="year">{item.date}</h3>
                                <div className="image-circle">
                                    <img src={item.img} alt={item.year} />
                                </div>
                            </div>

                            {/* Center */}
                            <div className="timeline-center">
                                <span className="dot"></span>
                            </div>

                            {/* Right Side */}
                            <div className="timeline-right">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Timeline;
