import React from 'react';
import { Characters } from './components/Characters/Characters';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Star Wars - The Source</header>
      <main>
        <Characters />
      </main>
    </div>
  );
}

export default App;
