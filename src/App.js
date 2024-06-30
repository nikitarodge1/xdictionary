// src/App.js
import React, { useState } from 'react';
import './App.css';

const initialDictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const found = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setResult(<p><strong>Definition:</strong> {found.meaning}</p>);
    } else {
      setResult(<p>Word not found in the dictionary.</p>);
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a word..."
      />
      <button onClick={handleSearch}>Search</button>
      <p>{result}</p>
    </div>
  );
}

export default App;

