'use client'
import React, { useState } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how can I assist you today?', sender: 'bot' },
    { id: 2, text: 'What is the weather like today?', sender: 'user' },
    { id: 3, text: 'It is going to rain', sender: 'bot' },
    { id: 4, text: 'Thank you', sender: 'user' },
  ]);
  const [input, setInput] = useState('');
  const [chats, setChats] = useState([
    { id: 1, name: 'Chat 1', lastMessage: 'What is the weather like today?' },
    { id: 2, name: 'Chat 2', lastMessage: 'Tell me a joke.' },
    { id: 3, name: 'Chat 3', lastMessage: 'Who is Bill Gates?' },
    { id: 4, name: 'Chat 4', lastMessage: 'How to train an AI Model' },
  ]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="min-h-[550px] flex bg-zinc-900 text-gray-200">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-zinc-950 p-4 border-r border-gray-700 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 text-white">Previous Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li key={chat.id} className="mb-4 p-3 bg-black hover:bg-zinc-800 rounded-lg cursor-pointer">
              <div className="font-bold text-gray-200">{chat.name}</div>
              <div className="text-sm text-gray-400">{chat.lastMessage}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <img
                    src="/path-to-your-ai-avatar.jpg"
                    alt="AI Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                )}
                <div
                  className={`max-w-xl p-4 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-zinc-600 text-white'
                      : 'bg-zinc-950 text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <img
                    src="/path-to-your-user-avatar.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full ml-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-zinc-900 p-4 border-t border-gray-700">
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-3 bg-zinc-600 text-zinc-200 rounded-lg border border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat