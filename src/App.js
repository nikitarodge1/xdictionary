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
    if (!searchTerm.trim()) {
      setResult("Word not found in the dictionary.");
      return;
    }

    const found = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
    if (found) {
      setResult(<span><strong>Definition:</strong> {found.meaning}</span>);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
