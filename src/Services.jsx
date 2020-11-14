import React from 'react';
import Sdata from './Sdata';
import Card from './Card';


const Services = () => {
    return (
        <>

            <div className='my-3'>
                <h4 className='text-center'> Fresh recommendations </h4>
                <hr className='ml-auto mr-auto w-25'/>
            </div>

            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                           {Sdata.map((val, index) => {
                               return <Card key = {index}
                               imgsrc = {val.imgsrc}
                               title = {val.title}
                                price={val.price}
                                desc={val.desc}
                                number={val.num}
                                address={val.location} /> 

                           })} 
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
export default Services;