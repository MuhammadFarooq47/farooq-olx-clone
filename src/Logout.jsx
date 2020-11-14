import React from 'react';
import { useStateValue } from './StateProvider';
import './Logout.css';
import Logout2 from './Logout2'

function Logout() {
    const [{user}] = useStateValue();
    console.log(user.email)
    return (
        <div>
        {user.displayName === null ? <p className='user_email'> Hello : {user.email} </p> :
        <div className="google_data">
            <p className='google_email'> Hello : {user.displayName} </p>
            <img className='user_photo' src={user.photoURL} alt="User_photo"/>
        </div>
         }
           
           {/* <Link> <p className='logout'> Logout </p> </Link> */}

           <Logout2 />
           {/* <div>
          {user?<div><Logout2 /></div>:
                <ModalPage />
          }
              </div> */}
        </div>
    )
}

export default Logout;
