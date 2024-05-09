import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Input } from './ChatComponents/input';
import { Button } from './ChatComponents/button';
import './Chat.css';

export default function Searchbar() {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([
    {
      text: 'Welcome to the ACEP Research Chatbot! I am your personalized research assistant. How can I help you?',
      sender: 'bot',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat window when responses change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [responses]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSend = async () => {
    const userMessage = userInput;

    setUserInput(''); // Clear input after sending
    setResponses((prevResponses) => [
      { text: userMessage, sender: 'user'},
      ...prevResponses,
    ]); // Pop user's message first
    setLoading(true); // Lock the send button until get the response

    try {
      const response = await axios.post('https://flaskapp-k22nw35fzq-uw.a.run.app/sendquery', { text: userInput });
      setResponses((prevResponses) => [
        {
          text: response.data.response,
          sender: 'bot',
        },
        ...prevResponses,
      ]);
      setUserInput(''); // Clear input after sending
    } catch (error) {
      setResponses((prevResponses) => [
        { text: 'Failed to get responses from LLM.', sender: 'bot'},
        ...prevResponses,
      ]);
      console.error('Error sending message:', error);
    } finally {
      setLoading(false); // Unlock the send button
    }
  };

  return (
    <main>
      <div className="chat">
        <div className="chat-container">
          <div className="message-container">
            {responses.map((response, index) => (
              <div key={index} className={`message ${response.sender === 'user' ? 'user' : 'bot'}`}>
                <p className="message-text">{response.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
        </div>

        <footer className="footer">
          <div className="input-container">
            <Input value={userInput} onChange={handleInputChange} onEnterPress={handleSend} placeholder={loading ? 'Getting response' : 'Type your message here...'} />
            <Button onClick={handleSend} disabled={!userInput.trim() || loading}>
              Send
            </Button>
          </div>
        </footer>
      </div>
    </main>
  );
}