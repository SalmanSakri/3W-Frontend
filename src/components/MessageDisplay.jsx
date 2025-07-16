// components/MessageDisplay.jsx
import React from 'react';

const MessageDisplay = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mb-6 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center">
      <span className="text-blue-800 font-medium">{message}</span>
    </div>
  );
};

export default MessageDisplay;