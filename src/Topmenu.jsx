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
import { HiOutlineUserGroup } from 'react-icons/hi';


// kya krna hai?? voice bhaji hyin ka
const Topmenu = () => {
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
                  {/* <KeyboardArrowDownIcon className='search_icon' /> */}
                </div>



                <div className='search'>
                  <input type='text' placeholder="Find Cars, Mobile phones and moere..." id='item_search' />
                  <SearchIcon className='search_icon2' />
                </div>

              </Form>



              <div>
          {user?
          <div className='logout'>
            <Logout />
            <Link to='/chat'>
            <HiOutlineUserGroup className='chat_icon' />
            </Link>
            </div>:
                <ModalPage />
          }
              </div>

              <button className="sell">
                <AddIcon />
                <Link to='/form' className='sell_link'> SELL   </Link>
              </button>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
      <Bottommenu />
      <img src={Banner} alt="banner" className='banner' />
    </>
  )

}

export default Topmenu;