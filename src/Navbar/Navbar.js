import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
  return (
 <header style={{ position: 'sticky', width: '100%', top: '0px', zIndex: '10' }}>
            <nav className="navbar navbar-expand-lg navbar_shdow">
                <div className="container-fluid">
                    <div className="row m-0 justify-content-center align-items-center">
                        <div className="col-md-4">
                            <a href="#">
                                <img src="./navbarlogo.png" alt="trp logo" style={{ width: '50%' }} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-md-8">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav navbar_trp">
                                    <li className="nav-item dropdown">
                                        <a className="navlinks" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Products <span><i className="fa-solid fa-angle-down"></i></span>
                                        </a>
                                        <ul className="dropdown-menu parentsearchbar" style={{ backgroundColor: '#f2f2f2' }}>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="navlinks" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sectors <span><i className="fa-solid fa-angle-down"></i></span>
                                        </a>
                                        <ul className="dropdown-menu parentsearchbar cp" style={{ backgroundColor: '#f2f2f2' }}>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item cp">
                                        <a className="navlinks cp" aria-disabled="true">About us</a>
                                    </li>
                                    <li className="nav-item cp">
                                        <a className="navlinks cp" aria-disabled="true">F.A.Q</a>
                                    </li>
                                    <li className="nav-item cp">
                                        <a className="navlinks cp" aria-disabled="true">Contact us</a>
                                    </li>
                                    {/* onClick={() => searchbars()} */}
                                    <li className="nav-item cp" style={{ position: 'relative' }}>
                                      <p>kjfihuih</p>
                                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                                        <div id="searchbar">
                                            <div className="parentsearchbar">
                                                <div>
                                                    <input type="text" placeholder="Search for Products" className="input_style" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item cp">
                                        <a className="navbar_Btn cp bg-orange" aria-disabled="true">Buyer Sign in <span><i className="fa-sharp fa-light fa-arrow-up-right"></i></span></a>
                                    </li>
                                    <li className="nav-item cp">
                                        <a className="navbar_Btn cp bg-orange" aria-disabled="true">Sellors Sign in <span><i className="fa-light fa-arrow-up-right"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">MyApp</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Products
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li><Link className="dropdown-item" to="/civilinterior">Civil & Interiors</Link></li>
    //             <li><Link className="dropdown-item" to="/electrical">Electrical</Link></li>
    //             <li><Link className="dropdown-item" to="/plumbing">Plumbing & Electrical</Link></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">About</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contactus">Contact Us</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/faq">FAQ</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
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
