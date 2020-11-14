import React, { useEffect, useState } from 'react';
import './Chat.css';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message'
import {db} from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton, Button } from '@material-ui/core';
import Logo from "../src/images/logo.png";
import {Link} from 'react-router-dom';



function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setuserName] = useState('');


  const user_name = () => {
    setuserName(prompt("Enter your name..."))
  }
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    }); 
  }, [] );


  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
     message: input,
     username: userName,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }
  return (
    <div className="App">
    
    {userName===''?(
    <div className='main'>
      <Link to='/'>
      <img src= {Logo} alt="" id="logo" />
      </Link>
      <h4 id="h3"> Login for Chat </h4>
      <Button variant="contained" color="primary" onClick={user_name} id="btn">
        Login
      </Button>
       </div>
      
     
      ): 
      
      
      (<>
      <Link to='/'>
      <img src={Logo} alt="" id="logo" />
      </Link>
      <h2 id="h1"> Welcome {userName}</h2>
      <form className="app_form">
        <FormControl className='app_formControl'>
          <Input className='app_input' placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app_iconButton' disabled={!input} 
          variant="contained" color="primary" 
          type="submit" onClick={sendMessage}>
          <SendIcon />
          </IconButton>
        </FormControl>
        
      </form>

    <FlipMove>
    {messages.map((message, id) => { 
       console.log(message)
        return (
        <Message key={id} 
        username={userName}
        message={message.data} 
        />
        
        );
       
      })}
    </FlipMove>
    </>)
}
    
  
    </div>

  );

}

export default Chat;
