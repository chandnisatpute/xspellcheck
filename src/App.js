import React, { useState } from 'react';
import './App.css'; // Optional if you have styles

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

function App() {
  const [inputText, setInputText] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    if (text.trim() === '') {
      setSuggestion('');
      return;
    }

    const words = text.split(/\s+/);
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary.hasOwnProperty(lowerWord)) {
        setSuggestion(`Did you mean: ${customDictionary[lowerWord]}?`);
        return;
      }
    }

    setSuggestion('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>XSpellCheck</h2>
      <textarea
        value={inputText}
        onChange={handleChange}
        rows="6"
        cols="50"
        placeholder="Type your text here..."
        style={{ fontSize: '16px', padding: '10px' }}
      />
      {suggestion && (
        <p style={{ marginTop: '10px', color: 'red' }}>{suggestion}</p>
      )}
    </div>
  );
}

export default App;
