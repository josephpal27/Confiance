import { Link } from 'react-router-dom';
import '../css/Error.css';

const Error = () => {
    return (
        <>
            <div className="error">
                <h1 data-aos="fade">PAGE NOT FOUND</h1>
                <p data-aos="fade">The page you are looking for does not exist</p>
                <Link to="/" data-aos="fade">Back to Home</Link>
            </div>
        </>
    )
}

export default Error
