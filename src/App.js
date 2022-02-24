import React from 'react';
import './App.css';
import {Navbar, Container, NavDropdown, Button, Jumbotron} from 'react-bootstrap';
import Navs from './component/Navs.js';
import Jumbo from './component/Jumbo';

function App() {
  return (
    <div className="App">
      <Navs/>
      <Jumbo/>
    </div>
  );
}

export default App;
