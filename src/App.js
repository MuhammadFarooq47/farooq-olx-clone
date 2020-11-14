import React, { useEffect } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Route, Switch} from "react-router-dom";
import Sell from './Sell';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Form from './Form';
import {auth} from './firebase';
import Chat from './Chat'



function App() {
  const [{user}, dispatch] = useStateValue();

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser){
      //The user is login
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }
    else{
      //The user is logout
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  });

  return () => {
    unsubscribe();
  }
}, []);

console.log("User is ==>" , user)

  return (
    
    <>
    <div className='App'>
    <Switch>
     <Route exact path='/chat' component={Chat} />
     <Route exact path='/form' component={Form} />
     <Route exact path='/sell' component={Sell} />
     <Route exact path='/checkout' component={CheckoutProduct} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/signup' component={Signup} />
     <Route exact path='/' component={Home} />
    </Switch>
    </div>
     </>
        
        
   
  );
}

export default App;
