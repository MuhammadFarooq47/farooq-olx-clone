import React from 'react';
import Button from '@material-ui/core/Button'
import './App.css';
import {Link} from 'react-router-dom';
import Banner from "../src/images/banner.PNG"; 


const Loadmore = () => {
  
  return (
    <div>
      <Link to='/sell' className='load_link'>
        <Button className="text-center loadmore_btn">Load More</Button>
      </Link>
      <img className='bottom_banner' src={Banner} alt=""/>
    </div>
  );
}

export default Loadmore;
