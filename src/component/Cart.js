import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Cart(props){

    let history = useHistory();
    let [popupShow, popupShowChange] = useState(true); //state 사용
    let state = useSelector((state)=>state.reducer); // useSelector를 이용해서 state로 값을 가져온다.
    let dispatch = useDispatch(); // dispatch변수에 useDispatch 함수를 선언해서 쉽게 불러와서 사용 할 수 있다.

    let filterdState = state.filter(item => item.quan>0) // map함수를 쓰면 안되고 filter함수를 써야한다...
    console.log(filterdState)

    return(
        <div className="wid-80">
            <h4 className="mt-4 text-start">Your Item</h4>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">상품명</th>
                <th scope="col">수량</th>
                <th scope="col">증감</th>
                </tr>
            </thead>
                <tbody>
                    {filterdState.map((a, i)=>{
                        return(<>
                            <tr>
                                <td scope="row">{a.id}</td>
                                    <td>{a.title}<br/></td>
                                    <td>{a.quan}</td>
                                    <td>
                                    <button type="button" class="btn btn-dark btn-floating marginr" onClick={()=>{dispatch({ type : 'add_quan', id:a.id })}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>
                                    </button>
                                    <button type="button" class="btn btn-dark btn-floating" onClick={()=>{dispatch({ type : 'minus_quan', id:a.id })}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                                    </button>
                                </td>
                            </tr>
                        </>
                        )
                    })}
                </tbody>
            </table>
            <div className="mb-4 text-end "><button type="button" class=" btn btn-outline-dark btn-rounded btn-lg " data-mdb-ripple-color="dark">주문하기</button></div>
            {popupShow === true
            ?<div class="card wid50per">
                <div class="card-body">
                    <h5 class="card-title">신규가입 특가!</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-outline-dark marginr" data-mdb-ripple-color="dark" onClick={()=>{history.push('/signup')}}>회원가입하기</button>
                    <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark" onClick={()=>{popupShowChange(false)}}>창닫기</button>
                </div>
            </div>
            :null
            }

        </div>
        
    )
}
//export default Cart;

function 함수(state){
    return{
        state : state
    }
}export default connect(함수)(Cart)

