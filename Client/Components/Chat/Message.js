import React,{useEffect} from 'react';


import icon from '../../assets/images/vijay.jpg';
// import ReactEmoji from 'react-emoji';
import '../../../node_modules/react-chat-widget/lib/styles.css';

import { Widget, addResponseMessage} from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';

const Message = ({ message: { text, user }, name, setMessage, sendMessage}) => {
  let isSentByCurrentUser = true;

  const trimmedName = name.trim().toLowerCase();

  useEffect(() => {
    if(user !== trimmedName) {
      isSentByCurrentUser = false;
    addResponseMessage(`${text} - ${user}`);
    }
    console.log(text);
  }, []);



 
 
 const handleSubmit = (message) => {
  console.log(`Message in submit ${message}`);
  sendMessage(message);
 }

  const handleTextInputChange =(event)=>{
    console.log(`OnChange ${event.target.value}`);
    setMessage(event.target.value);
  }
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    
  };
  return(
      
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        handleSubmit={handleSubmit}
        title="Group Chat React"
        subtitle=""
        profileAvatar={icon}
        titleAvatar={icon}
        handleTextInputChange={handleTextInputChange}
        
      />
       
        {/* <div className="rcw-widget-container"><p>username is {user}</p></div> */}

      
    </div>
  );
}

export default Message;