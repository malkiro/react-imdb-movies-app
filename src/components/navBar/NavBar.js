import React from 'react';
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IMDB_Logo from './assests/IMDB_Logo.png';
import IMDBPRO_Logo from './assests/IMDBPRO_Logo.png';
import {Link} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <Navbar className="background" expand="lg" variant="dark">
      <Container fluid>
      <img src={IMDB_Logo} alt="IMDB Logo" width={'60px'} style={{marginLeft:'30px', marginRight:'20px'}}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/"} className='nav-link nav-title me-2'>Home</Link>
            <Link to={"/menu"} href="#action1" className='nav-link nav-title me-2'>Menu</Link>
            <Form className="d-flex" style={{alignItems:'center'}}>
            <Form.Control style={{width:'550px', height:'30px', borderRadius:'6px', boxShadow:'none'}}
              type="search"
              placeholder="Search IMDb"
              className="me-2"
              aria-label="Search"
            />
            <Button size="sm" variant="outline-success">Search</Button>
          </Form>
            <img src={IMDBPRO_Logo} alt="IMDBPRO_Logo Logo" width={'80px'} height={'20px'} style={{marginLeft:'30px', marginRight:'30px', marginTop:'10px'}}/>
            <Link to={"/watchlist"} href="#action2" className='nav-link nav-title'>Watchlist</Link>
            <Link to={"/signin"} href="#action2" className='nav-link nav-title'>Sign In</Link>
            <NavDropdown title="EN " id="basic-nav-dropdown">
              <NavDropdown.Item disabled href="#action/3.1">Fully supported</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">English (United States)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Partially supported</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Français (Canada)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Français (France)</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deutsch (Deutschland)</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
