import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Drones from './components/Drones';

function App() {
  const linkStyle = {
    display: 'inline-block',
    marginRight: '20px',
    padding: '10px 10px',
    backgroundColor: '#09736Cff', 
    color: '#fff', 
    textDecoration: 'none', 
    borderRadius: '5px', 
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1 className='tituloh1'>DASHBOARD - 7DRONES</h1>
        </header>
        <main>
          
          <Link to='/drones' style={linkStyle}>LISTADO DE PRODUCTOS</Link>
          <Link to='/about' style={linkStyle}>LISTADO DE USUARIOS</Link>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/drones" component={Drones} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </main>
        <footer>
          <p>© 2023 7drones</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

