import React from 'react';
import './App.css';
import itemName from './data.js'

import Navs from './component/Navs.js';
import Jumbo from './component/Jumbo';
import Itemlist from './component/Itemlist';
import Detail from './component/Detail';
import SimpleSlider from './component/SimpleSlider';
import Cart from './component/Cart';

import {Route, Link, Switch} from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function App() {


  return (
    <div className="App">
      <Navs/>
      <Switch>
        <Route exact path='/'>
          <Jumbo/>
          <SimpleSlider />
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

     </Switch>
    </div>
  );
}

export default App;
