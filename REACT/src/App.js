import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard'; 

function App() {


  return (
    <div className="App">
      <header>
        <h1>DASHBOARD - 7DRONES</h1>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <p>© 2023 7drones</p>
      </footer>
    </div>
  );
}

export default App;