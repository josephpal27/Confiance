import { Link } from 'react-router-dom';
import '../css/Error.css';

const Error = () => {
    return (
        <>
            <div className="error">
                <h1 data-aos="fade">Under Development</h1>
                <Link to="/" data-aos="fade">Back to Home</Link>
            </div>
        </>
    )
}

export default Error
