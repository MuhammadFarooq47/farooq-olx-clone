import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './App.css'
import {IoLogoInstagram} from "react-icons/io";
import {TiSocialTwitterCircular, TiSocialYoutubeCircular, TiSocialFacebookCircular} from "react-icons/ti";
import Appstore from '../src/images/appstore.png';
import Playstore from '../src/images/playstore.png'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const FooterPage = () => {
  return (
    
    <MDBFooter color="blue" className="font-small pt-4  footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">POPULAR CATEGORIES</h5>
            <p> Cars </p>
            <p> Flats for rent </p>
            <p> Jobs </p>
            <p> Mobile phones </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title"> TRENDING SEARCHES </h5>
            <p> Bikes </p>
            <p> Watches </p>
            <p> Books </p>
            <p> Dogs </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">About Us</h5>
            <div className='title_data'>
          <Link to="https://www.olxgroup.com/" target="_blank"> <p> About OLX Group </p></Link>
          <Link to="https://blog.olx.com.pk/" target="_blank"><p> OLX Block </p></Link> 
          <Link to="https://help.olx.com.pk/hc/en-us/requests/new?ticket_form_id=29191" target="_blank"><p> Contact Us </p></Link> 
          <Link to="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website" target="_blank"><p> OLX For Business </p></Link> 
           </div>
          </MDBCol>
        
          <MDBCol md="2">
            <h5 className="title">OLX</h5>
            <div className='title_data'>
          <Link to="https://help.olx.com.pk/hc/en-us" target='_blank'><p> Help </p></Link> 
          <Link to="https://www.olx.com.pk/sitemap/most-popular" target='_blank'> <p> Sidemap </p></Link>
          <Link to="https://help.olx.com.pk/hc/en-us/categories/360000044302-Legal-Privacy-information" target='_blank'><p> Legal & privacy information </p></Link> 
           
           </div>
          </MDBCol>

          <MDBCol md="2">
            <h5 className="title">Follow US</h5>
            <div className='follow'>
            <Link to="https://www.facebook.com/olxpakistan" target='-blank'><TiSocialFacebookCircular /></Link> 
            <Link to="https://twitter.com/OLX_Pakistan" target='-blank'><TiSocialTwitterCircular /></Link> 
            <Link to="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1" target='-blank'><TiSocialYoutubeCircular /></Link> 
            <Link to="https://www.instagram.com/olx.pakistan/" target='-blank'><IoLogoInstagram /></Link> 
            </div>
            <div className="store">
          <Link to="https://apps.apple.com/app/olx-pakistan/id1119081665"> <img className="play_store" src={Appstore} alt="Appstore"/></Link>
          <Link to="https://play.google.com/store/apps/details?id=com.olx.pk"><img className="play_store" src={Playstore} alt="Playstore"/></Link> 
            </div>
            
            
          </MDBCol>

          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        {/* <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:<Link to="https://www.olx.com.pk/"> olx.com </Link>
        </MDBContainer> */}
      </div>
      <br />
    <Navbar bg="dark" variant="dark" className='dark_nav'>
      <p> <span className='other_countries'>Other Countries</span> <Link to="Indonesia">India</Link>- 
    
     <Link to="https://www.olx.co.za/">South Africa</Link> - 
     <Link to="https://www.olx.co.id/"> Indonesia</Link></p>

      <p className='ml-auto'> Free Classifieds in Pakistan. © 2006-2020 OLX </p>
     
    </Navbar>
    </MDBFooter>
    // </div>
   
  );
}

export default FooterPage;
