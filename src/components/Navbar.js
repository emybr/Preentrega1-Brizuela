import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import carrito from '../imagen/carrito.png';
// import cardWidget from '../components/CardWidget'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">boveri.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Conocenos</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Camisas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Campera
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Kimono
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <img
                            src={carrito}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <Nav.Link href="#deets">4</Nav.Link>
                        {/* <Nav.Link href="#deets">{cardWidget}</Nav.Link> */}
                        {/* <cardWidget/> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;














// import "../Navbar.css";


// const Navbar = () => {
//     return (
//         <div className="navbar-container">
//             <h2>Furniture store</h2>
//             {/* <button className="buttons-navbar">Tecnología</button>
//             <button className="buttons-navbar">Electro hogar</button>
//             <button className="buttons-navbar">Muebles</button>
//             <CartWidget /> */}
//         </div>
//     );
// };

// export default Navbar;