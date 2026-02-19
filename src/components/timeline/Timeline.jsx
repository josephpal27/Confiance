import './Timeline.css';
import { timelineData } from './TimelineData';

const Timeline = () => {
    return (
        <>
            <section className="timeline">
                <h2 data-aos="fade-up">OUR JOURNEY</h2>
                <div className="timeline-content">
                    {
                        timelineData.map((item, index) => {
                            return (
                                <div className="timeline-box" key={index} data-aos="fade">
                                    <span>{item.date}, <br /> {item.title}</span>
                                    {
                                        item.desc.map((para, i) => {
                                            return(
                                                <p key={i}>{para}</p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Timeline;
