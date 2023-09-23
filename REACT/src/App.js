import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';

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
          
          <Link to='/productos' style={linkStyle}>LISTADO DE PRODUCTOS</Link>
          <Link to='/usuarios' style={linkStyle}>LISTADO DE USUARIOS</Link>

          <Switch>
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/productos" component={Productos} />
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

