import './Certificates.css';
import certificateImage from '../../assets/images/prcai-certificate.avif';
import microphoneImage from '../../assets/images/announce-2.avif';

const Certificates = () => {
    return (
        <>
            <section className="certificates">
                <h4>Certificates</h4>
                <span>Confiance is a proud <b>PRCAI member</b></span>
                <p>This affiliation underscores our commitment to upholding the highest standards of professionalism and ethics, while also enhancing our capabilities to serve our clients more effectively.
                As ​a PRCAI member, we ​enjoy access to a wealth of resources, including industry insights, best practices, and exclusive training programs. These tools empower our team to​ deploy the latest​ PR trends​, methodologies​, and elevated strategies tailored to achieve our clients’ ​branding objectives.​</p>
                <img src={certificateImage} alt="PRCAI" loading="lazy" />
                <img src={microphoneImage} alt="Image" loading="lazy" id="microphone" />
            </section>
        </>
    )
}

export default Certificates
