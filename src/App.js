import React from 'react';
import './App.css';
import itemName from './data.js'
import Navs from './component/Navs.js';
import Jumbo from './component/Jumbo';
import Itemlist from './component/Itemlist';
import {Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navs/>
      <Switch>
        <Route exact path='/'>
          <Jumbo/>
        </Route>
        <Route path='/product'>
          <Jumbo/>
          <Itemlist item={itemName} />
        </Route>

     </Switch>
    </div>
  );
}

export default App;
