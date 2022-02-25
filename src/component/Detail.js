import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail(props){

    let [show_popup, show_popupChange] = useState(true);
    let params = useParams();
    let history = useHistory();

    useEffect(()=>{
        let timer = setTimeout(()=>{show_popupChange(false)},2000);
        return ()=>{clearTimeout(timer)}
    })

    return(
        <div className="container mt-5">
            {show_popup === true
            ? <div className="sale_popup">
                <h3>There is not much stock left!</h3>
              </div>
            : null
            }
            <div className="row">
                <div className="col-md-8 mt-5">
                    <img src={`../item_${params.id}.jpg`} width='80%'></img>
                </div>
                <div className="col-md-4 mt-5">
                    <h4>{props.item[params.id].title}</h4>
                    <hr></hr>
                    <p>상품가격 : {props.item[params.id].price}$</p>
                    <p>상품설명 : {props.item[params.id].content}</p>
                    <hr></hr>
                    <button type="button" class="btn btn-info btn-rounded margin5" onClick={()=>{
                        props.dispatch({type : 'add_cart_list', payload: {id:params.id, title:props.state[params.id].title ,quan:1}});
                        history.push('/cart')
                        }}>주문하기</button>
                    <button type="button" class="btn btn-info btn-rounded margin5" onClick={()=>{history.goBack()}}>뒤로가기</button>
                </div>
            </div>
            
        </div>
    )
}
//export default Detail;

function 함수(state){
    return{
        state:state
    }
}export default connect(함수)(Detail)