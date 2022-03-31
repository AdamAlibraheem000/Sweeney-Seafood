import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../imgs/logoCrop.png';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className='nav'>
      <Container className='justify-space-between'>
        <Nav.Link onClick={() => handlePageChange('Home')}>
          <img class="logo" src={logo} alt="sweeneyLogo"></img>
        </Nav.Link>
        <div className="d-flex flex-row jsutify-space-between">
          <Nav.Link className='nav-item' onClick={() => handlePageChange('Features')}>Features</Nav.Link>
          <Nav.Link className='nav-item' onClick={() => handlePageChange('Menu')}>Menu</Nav.Link>
          <Nav.Link className='nav-item' onClick={() => handlePageChange('Bar')}>Bar</Nav.Link>
          <Nav.Link className='nav-item' onClick={() => handlePageChange('About')}>About</Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
