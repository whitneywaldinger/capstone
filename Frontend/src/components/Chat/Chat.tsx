"use client";

import React, { useState } from 'react';
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
      sources: [], // Initialize sources for each response
    },
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSend = async () => {
    const userMessage = userInput;

    setUserInput(''); // Clear input after sending
    setResponses((prevResponses) => [
      { text: userMessage, sender: 'user', sources: [] },
      ...prevResponses,
    ]); // Pop user's message first
    setLoading(true); // Lock the send button until get the response

    try {
      const response = await axios.post('http://127.0.0.1:5000/sendquery', { text: userInput });
      setResponses((prevResponses) => [
        {
          text: response.data.response,
          sender: 'bot',
          sources: response.data.sources, // Include sources with the response
        },
        ...prevResponses,
      ]);
      setUserInput(''); // Clear input after sending
    } catch (error) {
      setResponses((prevResponses) => [
        { text: 'Failed to get responses from LLM.', sender: 'bot', sources: [] },
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
                {response.sender === 'bot' && response.sources.length > 0 && (
                  <div className="source-list">
                    <p className="source-text">Sources:</p>
                    {response.sources.map((source, index) => (
                      <p key={index} className="source-link">
                        <a
                          href={
                            source[0] === 'text_file_1.pdf'
                              ? 'https://drive.google.com/file/d/19_zABcxMESJdeNwcqsvgP9sfR-YhSvod/view?usp=drive_link'
                              : 'https://drive.google.com/file/d/1Vwo1UwaWrY3KViHvKbATBYDYAOk6imsy/view?usp=drive_link'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source[0]} on page {source[1]}
                        </a>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
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