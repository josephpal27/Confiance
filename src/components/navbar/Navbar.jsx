import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo-white.png";

const MyNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar expand="lg" className="navbar">
            <Navbar.Brand as={NavLink} to="/" className="nav-brand">
                <img src={logo} alt="logo" loading="eager" />
            </Navbar.Brand>

            {/* Toggle button opens Offcanvas */}
            <Navbar.Toggle onClick={handleShow} />

            <Navbar.Offcanvas
                show={show}
                onHide={handleClose}
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="start"
            >
                <Offcanvas.Header>
                    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose} style={{ border: 'none' }} >
                            <img src={logo} alt="logo" className="offCanvasLogo" />
                        </Nav.Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 nav">
                        <Nav.Link as={NavLink} to="/" onClick={handleClose}>
                            HOME
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
                            ABOUT US
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/services" onClick={handleClose}>
                            SERVICES
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
                            CONTACT
                        </Nav.Link>
                    </Nav>

                    {/* Right Side */}
                    <div className="right-btn-wrapper">
                        <HashLink smooth to="/#get-in-touch" className="get-in-touch-btn" onClick={handleClose}>
                            GET IN TOUCH
                        </HashLink>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default MyNavbar;
