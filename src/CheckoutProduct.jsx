import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image ,title, price, location, desc, number}) {
    const [{dta}, dispatch] = useStateValue();
    const deleteAd = () => {
    //    const confirm = alert("Are you sure to delete your ad");
    //    if (confirm === "OK"){ ya hy or 1 or hy

    //    }
        dispatch({
            type: "DELETE_AD",
            
        })
    }
    return (
        <div>
            {/* <div className='row'></div> */}
            <div className='col-md-3 col-sm-12 col-10'>
                <div className="card">
                  {/* For attach one pic */}
                    <img src={image} className="card-img-top cardImages" alt='Add img' />
                    {/* For attach multiple pics */}
                    {/* {card.imageUrls.length !== 0 && card.imageUrls.map((val,index)=><img key={index} src={val} className="card-img-top cardImages" alt='img' />)} */}
                    <div className="card-body">
                        <h5 className="card-title text-left font-weight-bold"> Title: {title} </h5>
                        <h6 className="text-left data font-weight-bold"> <span> Rs. </span>  {price} </h6>
                        <p className="text-left address">  {location} </p>
                        <p className="text-left address"> <span> Short desc : </span>  {desc} </p>
                        <p className="text-left address"> <span> Contact # : </span>  {number} </p>
                        <button  className='btn' onClick={deleteAd} > Delete Your ad  </button>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct;
