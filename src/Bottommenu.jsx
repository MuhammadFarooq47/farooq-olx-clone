import React from 'react';
import './Bottommenu.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
function Bottommenu() {

    return (
      <>  
      <Navbar className="bottom_menu" expand="lg">
  <div className='all_categries'>
  <Navbar.Brand href="#home">ALL CATEGRIES</Navbar.Brand>
  <KeyboardArrowDownIcon className='arrow_key' />
  </div>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="#home" className='item'>Mobile Phones</Link>
      <Link to="#link" className='item'>Cars</Link>
      <Link to="#link" className='item'>Motor Cycles</Link>
      <Link to="#link" className='item'>House</Link>
      <Link to="#link" className='item'>TV-Video-Audio</Link>
      <Link to="#link" className='item'>Tablets</Link>
      <Link to="#link" className='item'>Land and Plots</Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
 
                                                                                                                                                                                                                       
      </>
    );
  }
  
  export default Bottommenu;
  