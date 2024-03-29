import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import itemData from './itemData.json';


let item = itemData.item; //itemData라는 JSON파일에서 자료를 가져온다!


function reducer(state = item, action){ // 밑에 if-else문을 switch문으로 바꾸는중...

  switch(action.type){
    case 'add_quan':
      return (
        state.map((item, index)=> item.id === action.id? {...item, quan:++item.quan}:item)
      )
    case 'minus_quan':
      return(
        state.map((item, index)=>item.id === action.id?{...item, quan:--item.quan}:item)
      )
    case 'add_cart_list':
      return(
        state.map((item, index)=> item.id === action.id?{...item, quan:Number(action.quan)+item.quan}:item)
      )

    default:
      return state

  }
}



// function reducer(state = item , action){
//   console.log(state)
//   if( action.type === 'add_quan' ){ // 더하는 함수
//     let copy_array = [...state];
//     copy_array[action.data].quan++;
//     return copy_array;
//   }

//   else if( action.type === 'minus_quan' && state[action.data].quan > 0){ // 빼는 함수
//     let copy_array = [...state];

//     if(copy_array[action.data].quan == 1){ // 수량 0되면 리스트 지우기 -> 오류있음 추후 해결바람...(리스트 하나밖에 안지워짐)
//       delete copy_array[action.data];
//       return copy_array
//     }
//     copy_array[action.data].quan--;
//     return copy_array;
//   }

//   else if( action.type === 'add_cart_list'){
//     console.log('작동1')
//     let findindexvalue = state.findIndex((a)=>{return a.id == action.payload.id})
//     console.log(findindexvalue)
//     if(findindexvalue>=0){
//       console.log('작동2')
//       let copy_array = [...state];
//       copy_array[findindexvalue].quan++;
//       return copy_array;
//     }
//     else{
//       let copy_array = [...state];
//       copy_array.push(action.payload);
//       return copy_array;
//     }
    
//   }

//   else{
//     return state;
//   }
// }


let store = createStore(combineReducers({reducer}))


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
