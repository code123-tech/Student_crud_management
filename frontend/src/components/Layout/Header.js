import { Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap';

const Header = ()=>{
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand>
                <Link to="/" className="text-white text-decoration-none">Students-Manager</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/add-student" className="text-white">Add Student</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;