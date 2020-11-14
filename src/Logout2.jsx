import React from 'react'
import  {Link} from 'react-router-dom';
import "./Logout.css";
import { useStateValue } from './StateProvider';


function Logout2() {
    const [{user}, dispatch] = useStateValue();
    const logout = () => {
        dispatch({
            type: 'SET_USER',
            user: null
          })
    }

    return (
        <div>
            {/* <Link to='#' className='login'> Logout </Link> */}
            <button onClick={logout} className='logout' > Logout </button>
        </div>
    )
}

export default Logout2;
