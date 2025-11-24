import './Certificates.css';
import certificateImage from '../../assets/images/prcai-certificate.avif';
import microphoneImage from '../../assets/images/announce-2.avif';

const Certificates = () => {
    return (
        <>
            <section className="certificates">
                <h4 data-aos="fade-up">Certificates</h4>
                <span data-aos="fade">Confiance is a proud <b>PRCAI member</b></span>
                <p data-aos="fade">This affiliation underscores our commitment to upholding the highest standards of professionalism and ethics, while also enhancing our capabilities to serve our clients more effectively.
                As ​a PRCAI member, we ​enjoy access to a wealth of resources, including industry insights, best practices, and exclusive training programs. These tools empower our team to​ deploy the latest​ PR trends​, methodologies​, and elevated strategies tailored to achieve our clients’ ​branding objectives.​</p>
                <img src={certificateImage} alt="PRCAI" loading="lazy" data-aos="fade" data-aos-once="true" />
                <img src={microphoneImage} alt="Image" loading="lazy" id="microphone" />
            </section>
        </>
    )
}

export default Certificates
