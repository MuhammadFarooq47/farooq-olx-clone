import React from 'react';
import './App.css'


const Card = (props) => {

    return (
        <>
            <div className='col-md-3 col-sm-12 col-10'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top cardImages" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title text-left font-weight-bold"> {props.title} </h5>
                        <h6 className="text-left data font-weight-bold"> Rs. {props.price} </h6>
                        <p className="text-left address"> {props.address} </p>
                        <p className="text-left address"> {props.desc} </p>
                        <p className="text-left address"> {props.number} </p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
            
            
            
            

        </>
    );
}

export default Card;