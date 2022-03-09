import React, { useState } from 'react';
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
import Apiuse from './component/Apiuse';

import {Route, Link, Switch} from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


function App() {

  // Apiuse 컴포넌트에서 사용하는 API인데 App컴포넌트가 아닌 Apiuse컴포넌트로 옮겨야하고, 데이터 가공하는 방법도 확인해봐야함...., 에러도 좀 잡고..
  let [apidata, apidataChange] = useState('');

  axios.get('http://ergast.com/api/f1/drivers?=123')
  .then((result)=>{
    apidataChange(result.data);
  })
  .catch(()=>{
      console.log('데이터 불러오기에 실패했습니다.')
  })
  .finally(()=>{
      console.log('axios사이클이 완료되었습니다.')
  })
  

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
        <Route exact path='/apiuse'>
          <Apiuse apidata={apidata} />
        </Route>

     </Switch>
    </div>
  );
}

export default App;
