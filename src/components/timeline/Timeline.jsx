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
                                <span className="year">{item.date}</span>
                                <div className="image-circle">
                                    <img src={item.image} alt={item.year} />
                                </div>
                            </div>

                            {/* Center */}
                            <div className="timeline-center">
                                <span className="dot"></span>
                            </div>

                            {/* Right Side */}
                            <div className="timeline-right">
                                <span>{item.title}</span>
                                {
                                    item.desc.map((text, index) => (
                                        <p key={index}>{text}</p>
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
