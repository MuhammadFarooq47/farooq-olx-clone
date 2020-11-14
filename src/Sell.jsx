import React from 'react';
import { useStateValue } from './StateProvider';
import './Sell.css';
import CheckoutProduct from './CheckoutProduct';
import Topmenu from './Topmenu';
import Services from './Services';
import Footer from './Footer';


function Sell() {
  const [{ data }, dispatch] = useStateValue();
  console.log("dispatch ==>" + dispatch, "data" + data)

  return (
    <>
      <Topmenu />
      <Services />
      <div className='container mb-5'>
      <div className='row g-5'> 
         {data.map((ad, index) => {
            return (
              <div className='col-10 col-md-3'>
                <CheckoutProduct
              key={index}
              image={ad.imageUrl}
              title={ad.adTitle}
              price={ad.price}
              location={ad.location}
              desc={ad.description}
              number={ad.number}
            />
              </div>
            ) 
          })}
        
       </div>
       </div>
      {/* <div className='container main mb-5'>{
        <div className='row single_row'>
          <div className='col-12 col-md-5 mx-auto'>
            <div className='row gy-4'>
              {data.map((ad, index) => {
                return <CheckoutProduct
                  key={index}
                  image={ad.imageUrl}
                  title={ad.adTitle}
                  price={ad.price}
                  location={ad.location}
                  desc={ad.description}
                  number={ad.number}
                />
              })}
            </div>
          </div>
        </div>
        }
      </div> */}

      <Footer />


    </>
  )
}

export default Sell;
