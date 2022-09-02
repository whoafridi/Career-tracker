import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../Firebase/Firebase.init";
import './Navbar.css'

const Navbars = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };

  return (
    // <div className='sticky-top'>
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    //         <div className="container">
    //             <Link className="navbar-brand text-dark" to='/'>CarTrack</Link>
    //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarText">
    //             <ul className="navbar-nav me-auto my-2 mb-lg-0">
    //                 <li className="nav-item mx-2">
    //                 <CustomLink className="nav-link text-dark" aria-current="page" to='/'>Home</CustomLink>
    //                 </li>
    //                 <li className="nav-item mx-2 ">
    //                 <CustomLink className="nav-link text-dark" to='/services'>My Services</CustomLink>
    //                 </li>
    //                 <li className="nav-item mx-2">
    //                 <CustomLink className="nav-link text-dark" to='/blog'>Blog</CustomLink>
    //                 </li>
    //                 <li className="nav-item mx-2">
    //                 <CustomLink className="nav-link text-dark" to='/about'>About Me</CustomLink>
    //                 </li>
    //             </ul>
    //             <span className="mx-2">
    //                 <CustomLink className="text-light nav-link text-dark" to='/checkout'>Checkout</CustomLink>
    //             </span>
    //             <span className="navbar-text">
    //             {
    //                 user ?
    //                 <button onClick={handleSignout} className="nav-link bg-light text-dark">Sign Out</button>
    //                 :
    //                 <Link className="nav-link bg-light text-dark" to='/login'>Login</Link>
    //             }
    //             </span>
    //             </div>
    //         </div>
    //     </nav>
    // </div>

    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="mt-2" as={Link} to="/">
            {" "}
            CarTrack
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="justify-content-between">
                
                <span>

              <CustomLink
                className="nav-link nav-item mt-2 text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </CustomLink>
                </span>


                <span>
              <CustomLink
                className="nav-link nav-item mt-2 text-dark"
                to="/services"
              >
                My Services
              </CustomLink>
                </span>
              
              <span className="">
                <CustomLink
                  className="text-light nav-item mt-2 nav-link text-dark"
                  to="/checkout"
                >
                  Checkout
                </CustomLink>
              </span>
              
            <span className="">
                <CustomLink
                  className="text-light nav-item mt-2 nav-link text-dark"
                  to="/checkout"
                > <i className="bi bi-person"></i> Register
                </CustomLink>
              </span>
              </Nav>
              <span>
                {user ? (
                  <button
                    onClick={handleSignout}
                    className="nav-link nav-item mt-2"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    className="nav-link nav-item nav-btn mt-2"
                    to="/login"
                  > <i className="bi bi-box-arrow-in-right"></i> Login
                  </Link>
                )}
              </span>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
