import React from "react";
import { connect } from "react-redux";

function Cart(props){
    return(
        <div className="wid-80">
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
                    {props.state.map((a, i)=>{
                        return(
                            <>
                                <tr>
                                    <th scope="row">{a.id}</th>
                                        <td>{a.title}</td>
                                        <td>{a.quan}</td>
                                        <td>
                                        <button type="button" class="btn btn-dark btn-floating marginr" onClick={()=>{props.dispatch({ type : 'add_quan', data:a.id })}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>
                                        </button>
                                        <button type="button" class="btn btn-dark btn-floating" onClick={()=>{props.dispatch({ type : 'minus_quan', data:a.id })}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/></svg>
                                        </button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}
//export default Cart;

function 함수(state){
    return{
        state : state
    }
}export default connect(함수)(Cart)

