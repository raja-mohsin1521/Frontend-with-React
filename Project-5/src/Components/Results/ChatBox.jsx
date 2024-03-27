import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ChatBox = () => {
  const [messages, setMessages] = useState([{ type: 'user', content: 'Hello!' }, { type: 'bot', content: 'Hi there!' }]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' , block: "center" });
  }, [messages]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserMessage = { type: 'user', content: inputValue };
    const newBotMessage = { type: 'bot', content: 'My name is Mohsin' };
    
    setMessages([...messages, newUserMessage, newBotMessage]);
    setInputValue('');
  };

  return (
    <Chatting className="container mt-5">
      <div className="card mt-5">
        <div className="card-header">Chat</div>
        <div className="card-body">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`row user ${message.type === 'user' ? 'justify-content-end' : ''}`}
            >
              <div 
                className={`col-auto bot alert ${message.type === 'user' ? 'user-message' : 'bot-response'}`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
        <div className="card-footer">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Chatting>
  );
};
const Chatting=styled.div`
    .card-header{
        background-color: #007BFF;
        color: white;
        font-weight: 500;
        font-size: 20px;
    }
`

export default ChatBox;
