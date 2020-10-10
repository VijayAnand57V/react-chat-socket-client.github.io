import React from 'react';

// import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';



const Messages = ({ messages, name, setMessage, sendMessage}) => {
  // <ScrollToBottom className="messages">
 return (
 <div>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name} setMessage={setMessage} sendMessage={sendMessage} /></div>)}
  </div>
  );
};

export default Messages;