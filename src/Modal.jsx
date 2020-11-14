import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './App.css'
import {Link} from 'react-router-dom'
import { FaGoogle, FaFacebook,FaMobile} from "react-icons/fa";
import EmailIcon from '@material-ui/icons/Email';
import {signInWithGoogle} from './firebase';

class ModalPage extends Component {
state={
  modal2: false,
  modal3: false,
  modal4: false,
  modal5: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}


render() {

 
  return (
    
    <MDBContainer className='login_container'>
      
     <Link to ="#" onClick={this.toggle(2)} className="login"> Login </Link>
      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)}>Login your account</MDBModalHeader>
        <MDBModalBody>
         
         <span className="login_panel"> Continue with {<FaMobile />} </span> <br /> <br />
         <span className="login_panel"> Continue with {<FaFacebook />} </span> <br /> <br /> 
        <button onClick={signInWithGoogle} className="google_login"> <span > Continue with {<FaGoogle />} </span> </button> <br /> <br /> 
        <Link to='/signup'> <span className="login_panel"> Continue with {<EmailIcon />} </span>  </Link> 
  
         
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(2)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;

