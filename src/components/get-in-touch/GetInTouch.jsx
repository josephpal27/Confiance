import './GetInTouch.css';
import contactCircle from '../../assets/images/contact-circle.avif';
import handImage from '../../assets/images/hand.avif';
import lineImage from '../../assets/images/line-shape.avif';
import ContactForm from '../contact-form/ContactForm';

const GetInTouch = () => {
  return (
    <>
      <section className="get-in-touch">
        <div className="get-in-touch-head">
          <h6 data-aos="fade">Every Story Needs Telling And <br /> We Would Love To Help Tell Yours!</h6>
          <p data-aos="fade">Leave your details below to start a conversation</p>
        </div>
        <div className="get-in-touch-row">
          <div className="get-in-touch-left" data-aos="fade">
            <ContactForm />
          </div>
          <div className="get-in-touch-right">
            <img src={contactCircle} alt="Contact Circle" loading="lazy" />
          </div>
          <img src={handImage} alt="Hand" loading="lazy" id="hand" />
          <img src={lineImage} alt="Line" loading="lazy" id="line-bg" />
        </div>
      </section>
    </>
  )
}

export default GetInTouch
