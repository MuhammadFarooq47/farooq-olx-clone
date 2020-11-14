import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../src/images/logo.png';
import AddIcon from '@material-ui/icons/Add';
import ModalPage from './Modal';
import SearchIcon from '@material-ui/icons/Search';
import Bottommenu from './Bottommenu';
import Banner from '../src/images/banner2.jpg';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import Logout from './Logout';

// kya krna hai?? voice bhaji hyin ka
const SellMenu = () => {
  const [{user}] = useStateValue();

  return (
    <>
      <div className="background">
        <Navbar bg="light" expand="lg">
          <Link to='/'>
            <img src={Logo} alt="Logo" className="nav_logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Form inline className="form">


                <div className='select_location'>
                  <SearchIcon className='search_icon' />

                  <select id="location">
                    <option value="volvo">Pakistan</option>
                    <option value="saab">Sindh</option>
                    <option value="saab">Khyber Pakhtunkhwa</option>
                    <option value="opel">Punjab</option>
                    <option value="audi">Balochistan</option>
                  </select>
                </div>



                <div className='search'>
                  <input type='text' placeholder="Find Cars, Mobile phones and moere..." id='item_search' />
                  <SearchIcon className='search_icon2' />
                </div>

              </Form>



              <div>
          {user?<div><Logout /></div>:
                <ModalPage />
          }
              </div>

              <button className="sell">
                <AddIcon />
                <Link to='/sell' className='sell_link'> Ads   </Link>
              </button>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )

}

export default SellMenu;