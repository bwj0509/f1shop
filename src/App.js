import React from 'react';
import './App.css';
import itemName from './data.js'

import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

import Navs from './component/Navs.js';
import Jumbo from './component/Jumbo';
import Itemlist from './component/Itemlist';
import Detail from './component/Detail';
import SimpleSlider from './component/SimpleSlider';
import Cart from './component/Cart';
import Signup from './component/Signup';
import Main from './component/Main';

import {Route, Link, Switch} from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function App() {


  return (
    <div className="App">
      <Navs/>
      <Switch>
        <Route exact path='/'>
          <Jumbo/>
          <Main/>
        </Route>
        <Route exact path='/introduce'>
          <SimpleSlider/>
        </Route>
        <Route exact path='/product'>
          <Jumbo/>
          <Itemlist item={itemName} />
        </Route>
        <Route path='/product/:id'>
          <Detail item={itemName}/>
        </Route>
        <Route exact path='/cart'>
          <Cart item={itemName}/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>

     </Switch>
    </div>
  );
}

export default App;
