import ContactForm from '../contact-form/ContactForm';
import './ContactFormMap.css';

const ContactFormMap = () => {
    return (
        <>
            <section className="contact-form-map" id="get-in-touch">
                <div className="contact-form-map-head">
                    <h6 data-aos="fade">Every Story Needs Telling and <br /> We Would Love to Help Tell Yours!</h6>
                    <p data-aos="fade">Leave your details below to start a conversation</p>
                </div>
                <div className="contact-form-map-row">
                    <div className="contact-form-map-left" data-aos="fade">
                        <ContactForm />
                    </div>
                    <div className="contact-form-map-right">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9434785406165!2d77.09393977528211!3d28.451120175764327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196a9219452f%3A0x2b7db4e11e0c29d1!2sWeWork%20Two%20Horizon%20Centre%20-%20Coworking%20%26%20Office%20Space%20in%20Golf%20Course%20Road%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1771413889312!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactFormMap;
