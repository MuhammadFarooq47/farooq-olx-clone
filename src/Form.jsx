import React, { useState } from 'react';
import {useStateValue} from './StateProvider';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './Sell.css';
import SellMenu from './SellMenu';

function Form() {
  const [{data}, dispatch] = useStateValue();
//   console.log("dispatch ==>" + dispatch, "data" + data)


  const [card, setcard] = useState({
    adTitle: '',
    location: '',
    description: '',
    price: '',
    image: '',
    //images:[],
    number: '',
    imageUrl:'',
    //imageUrls:[],
  });

const [details, setdetails] = useState({
  adTitle: '',
  location: '',
  description: '',
  price: '',
  image: '',
  //images:[],
  number: '',
  imageUrl:'',
  //imageUrls:[],
})

const inputValue = (e) => {
  console.log(e.target.value)
  console.log(e.target.name)
  

  const value = e.target.value;
  const name = e.target.name;

  if (e.target.files && e.target.files[0]) {
    console.log(e.target.files)
    setdetails({...details,
      imageUrl: URL.createObjectURL(e.target.files[0]),
      //imageUrls: Object.values(e.target.files).map((val)=>URL.createObjectURL(val)), (For multiple pics)
      [name]:e.target.files[0], 
      //[name]:e.target.files (For multiple pics)
    });
  }
  else{
    setdetails({...details,[name]:value});
  }

  
// setdetails ((preValue) => {
//   console.log(preValue)
//  if (name === 'title') {
//    return{
//      adTitle: value,
//      description: preValue.description,
//      location: preValue.location,
//      price: preValue.price,
//      image: preValue.image,
//      number: preValue.number,
//    }
//  }else if (name === 'location') {
//   return{
//     adTitle: preValue.adTitle,
//     location: value,
//     description: preValue.description,
//     price: preValue.price,
//     image: preValue.image,
//     number: preValue.number,
//   }
// }else if (name === 'description') {
//   return{
//     adTitle: preValue.adTitle,
//     location: preValue.location,
//     description: value,
//     price: preValue.price,
//     image: preValue.image,
//     number: preValue.number,
//   }
// }else if (name === 'price') {
//   return{
//     adTitle: preValue.adTitle,
//     location: preValue.location,
//     description: preValue.description,
//     price: value,
//     image: preValue.image,
//     number: preValue.number,
//   }
// }else if (name === 'image') {
//   return{
//     adTitle: preValue.adTitle,
//     location: preValue.location,
//     description: preValue.description,
//     price: preValue.price,
//     image: value,
//     number: preValue.number,
//   }
// }else if (name === 'number') {
//   return{
//     adTitle: preValue.adTitle,
//     location: preValue.location,
//     description: preValue.description,
//     price: preValue.price,
//     image: preValue.image,
//     number: value,
//   };
// };


// });
};


  const onSubmits = (e) =>{
    e.preventDefault()

    setcard(details);
    setdetails({
      adTitle: '',
      location: '',
      description: '',
      price: '',
      image: '',
      //images:[],
      number: '',
      imageUrl:'',
      //imageUrls:[],
    });
    
  }

  const adActive = () => {
    dispatch({
      type: "ACTIVE_AD",
      item: {
        adTitle: card.adTitle,
        location: card.location,
        description: card.description,
        price: card.price,
        image: card.image,
        //images:[],
        number: card.number,
        imageUrl:card.imageUrl,
        //imageUrls:[],
      }
    });

    setcard({
      adTitle: '',
      location: '',
      description: '',
      price: '',
      image: '',
      //images:[],
      number: '',
      imageUrl:'',
      //imageUrls:[],
    });

  }
  //  const [{data}] = useStateValue();
  //   console.log(data) 1ya hy ya wo sale waly form ka code hy call pe ao
    return (
      <>
  
  <MDBContainer fluid>
  <SellMenu />
  <MDBRow>
    <MDBCol md="6" className='ml-auto mr-auto'>
      <form onSubmit={onSubmits}>
        <p className="h4 text-center mb-4 mt-5">POST YOUR AD</p>
        <hr className='w-25 ml-auto mr-auto' />

        {/* Details Portion */}
        <div className='details'>
        <p className="h4 text-left mb-4">INCLUDE SOME DETAILS</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text text-left">
          Ad title* 
        </label>
        <input 
        name='adTitle' 
        placeholder='ad Title'
        value={details.adTitle}
        onChange={inputValue} 
        type="text" 
        id="defaultFormContactNameEx" 
        className="form-control" />
        <br />
        <label htmlFor="defaultFormContactNameEx" className="grey-text text-left">
          Your Address*
        </label>
        <input 
        name='location' 
        placeholder='Enetr address'
        value={details.location}
        onChange={inputValue} 
        type="text" 
        id="defaultFormContactNameEx" 
        className="form-control" />
        <br />

        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Description*
        </label>
        <textarea 
        name='description' 
        value={details.description}
        onChange={inputValue} 
        type="text" 
        id="defaultFormContactMessageE
        x" className="form-control description mb-5" rows="3" />
        </div>

 {/* Price portion */}
        <div className='details'>
       <p className="h4 text-left mb-4">SET A PRICE</p>
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Price*
        </label>
        <input 
        name='price' 
        placeholder='Enter price'
        value={details.price}
        onChange={inputValue} 
        type="text" 
        id="defaultFormContactEmailEx"
         className="form-control" />
        <br />
        </div>
       
       {/* Image portion */}
        <div className='details'>
        <p className="h4 text-left mb-4">Add your image</p>
        <label htmlFor="defaultFormContactNameEx">
          Select your images
        </label> <br />
        <input 
        name='image' 
        //name='images' 
        //multiple (use to select multiple images)
        // value={details.images}
        onChange={inputValue} 
        type="file" 
        id="myfile" name="myfile"  
        className='attach_img' />
        <br />
        </div>
        
        {/* Number portion */}
        <div className='details'>
        <p className="h4 text-left mb-4">Review your details</p>
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
         Contact number*
        </label>
        <input 
        name='number' 
        placeholder='Enter your number'
        value={details.number}
        onChange={inputValue} 
        type="text" 
        id="defaultFormContactSubjectE
        x" className="form-control" />
        <br />
        </div>
        
        <div className="text-center mt-4">
                  <MDBBtn className='btn' outline type="submit" value = "submit">
                    Post now
                    {/* <MDBIcon far icon="paper-plane" className="ml-2" /> */}
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
        
        <div className='row'>
        <div className='col-md-3 col-sm-6 col-10'>
                <div className="card m-5">
                  {/* For attach one pic */}
                    <img src={card.imageUrl} className="card-img-top cardImages" alt='Add img' />
                    {/* For attach multiple pics */}
                    {/* {card.imageUrls.length !== 0 && card.imageUrls.map((val,index)=><img key={index} src={val} className="card-img-top cardImages" alt='img' />)} */}
                    <div className="card-body">
                        <h5 className="card-title text-left font-weight-bold"> Title: {card.adTitle} </h5>
                        <h6 className="card-title text-left font-weight-bold"> <span> Rs. </span>  {card.price} </h6>
                        <p className="text-left data">  {card.location} </p>
                        <p className="text-left data"> <span> Short desc : </span>  {card.description} </p>
                        <p className="text-left address"> <span> Contact # : </span>  {card.number} </p>
                        <button  className='btn' onClick={adActive} > Active your ad  </button>  
                    </div>
                </div>
            </div>
            {/* <div className='container mb-5'>
            <div className='row'>
              <div className='col-10 mx-auto'>
            {data.map((ad,index) => (
              <CheckoutProduct 
              key={index}
             image= {ad.imageUrl}
             title= {ad.adTitle}
             price= {ad.price}
             location= {ad.location}
             desc={ad.description}
             number={ad.number}
               />
            ))}
            </div>
            </div>
            </div> */}
            </div>
            

       
        </>
    )
}

export default Form;
