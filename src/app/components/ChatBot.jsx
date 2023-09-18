import React, { useState, useEffect } from 'react';

const ChatBot = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [question, setQuestion] = useState('What is your name?');
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const bot = () => {
    if (questionNum === 0) {
      setOutput(`<h1>Hello ${inputValue}</h1>`);
      setInputValue('');
      setQuestion('How can we assist you today? You can ask about our services, prices, scheduling, or cleaning products.');
      setTimeout(timedQuestion, 2000);
    } else if (questionNum === 1) {
      const userQuestion = inputValue.toLowerCase();
      let botResponse = '';

      switch (userQuestion) {
        case 'services':
          botResponse = 'We offer a variety of cleaning services including basic cleaning, deep cleaning, office cleaning, carpet cleaning, and more. What service are you interested in?';
          break;
        case 'prices':
          botResponse = 'The cost of our cleaning services varies based on the type of service and the size of your space. Could you please provide more details so we can give you an accurate estimate?';
          break;
        case 'scheduling':
          botResponse = 'You can schedule a cleaning by calling us at [contact number] or filling out our online form on our website. When would you like to schedule the cleaning?';
          break;
        case 'cleaning products':
          botResponse = 'Yes, we use eco-friendly cleaning products that are safe for the environment. Do you have any specific preferences or concerns regarding the cleaning products we use?';
          break;
        default:
          botResponse = "I'm sorry, I didn't quite get that. You can ask about our services, prices, scheduling, or cleaning products.";
      }

      setOutput(`<h1>${botResponse}</h1>`);
      setInputValue('');
      setQuestion('Is there anything else you would like to know?');
      setTimeout(timedQuestion, 2000);
    }
    setQuestionNum(questionNum + 1);
  };

  const timedQuestion = () => {
    setOutput(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      bot();
    }
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  useEffect(() => {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = output;
  }, [output]);

  return (
    <div className={`fixed bottom-0 right-0 ${chatOpen ? 'block' : 'hidden'}`}>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={toggleChat}
      >
        {chatOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      <div id="output" className="bg-white p-4 rounded-t-lg shadow-lg"></div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full bg-gray-200 p-2 rounded"
          placeholder="Type your message..."
        />
      </div>
    </div>
  );
};

export default ChatBot;
