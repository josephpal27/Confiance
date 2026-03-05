import './Timeline.css';
import { timelineData } from './TimelineData';

const Timeline = () => {
    return (
        <>
            <section className="timeline">
                <h3 data-aos="fade-up">Our Journey</h3>
                <div className="timeline-wrapper">
                    {timelineData.map((item, index) => (
                        <div
                            className={`timeline-row ${index % 2 !== 0 ? "reverse" : ""}`}
                            key={index}
                        >
                            {/* Left Side */}
                            <div className="timeline-left">
                                <span className="year" data-aos="fade">{item.date}</span>
                                <div className="image-circle">
                                    <img src={item.image} alt={item.date} loading="lazy" />
                                </div>
                            </div>

                            {/* Center */}
                            <div className="timeline-center">
                                <span className="dot" data-aos="fade-down" data-aos-duration="500"></span>
                            </div>

                            {/* Right Side */}
                            <div className="timeline-right">
                                <span data-aos="fade" data-aos-once="true">{item.title}</span>
                                {
                                    item.desc.map((text, index) => (
                                        <p key={index} data-aos="fade" data-aos-once="true">{text}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Timeline;
