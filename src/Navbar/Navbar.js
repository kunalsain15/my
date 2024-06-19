import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/civilinterior">Civil & Interiors</Link></li>
                <li><Link className="dropdown-item" to="/electrical">Electrical</Link></li>
                <li><Link className="dropdown-item" to="/plumbing">Plumbing & Electrical</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const MyNavbar = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <NavDropdown title="Products" id="basic-nav-dropdown">
//             <NavDropdown.Item as={Link} to="/civilinteriour">Civil & Interiors</NavDropdown.Item>
//             <NavDropdown.Item as={Link} to="/electrical">Electrical</NavDropdown.Item>
//             <NavDropdown.Item as={Link} to="/plumbing">Plumbing & Electrical</NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link as={Link} to="/about">About</Nav.Link>
//           <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
//           <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default MyNavbar;
