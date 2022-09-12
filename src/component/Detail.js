import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group"


function Detail(props){
    let state = useSelector((state)=>state.reducer);
    let [show_popup, show_popupChange] = useState(true);
    let [tabnumber, tabChange] = useState(0);
    let [cssswitch, cssswitchChange] = useState(false);
    let params = useParams();
    let history = useHistory();
    let [quan, setQuan] = useState(0)
    useEffect(()=>{
        let timer = setTimeout(()=>{show_popupChange(false)},2000);
        return ()=>{clearTimeout(timer)}
    })

    return(
        <>
            <div className="container mt-3 detail_nav"><span>MERCEDES  /  MERCEDES PRODUCT  /  PRODUCT ID: {params.id.padStart(6,'0')}</span><hr></hr></div>
            <div className="container">
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
                        <h4>{state[params.id].title}</h4>
                        <hr></hr>
                        <p>상품가격 : {state[params.id].price}$</p>
                        <p>상품설명 : {state[params.id].content}</p>
                        <hr></hr>
                        <input placeholder="수량" onChange={(e)=>{setQuan(e.target.value)}}></input>
                        <br />
                        <button type="button" class="btn btn-info btn-rounded margin5" onClick={()=>{
                            props.dispatch({type : 'add_cart_list', id:params.id, title:state[params.id].title ,quan:quan});
                            history.push('/cart')
                            }}>주문하기</button>
                        <button type="button" class="btn btn-info btn-rounded margin5" onClick={()=>{history.goBack()}}>뒤로가기</button>
                    </div>
                </div>
                

                <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link className="nav_deco" eventKey="link-0" onClick={()=>{ cssswitchChange(false); tabChange(0) }}>상품정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav_deco" eventKey="link-1" onClick={()=>{ cssswitchChange(false); tabChange(1) }}>배송정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="nav_deco" eventKey="link-2" onClick={()=>{ cssswitchChange(false); tabChange(2) }}>판매자정보</Nav.Link>
                    </Nav.Item>
                </Nav>

                <CSSTransition in={cssswitch} classNames="wow" timeout={2000}>
                    <TapContent tabnumber={tabnumber} cssswitchChange={cssswitchChange}/> 
                </CSSTransition>
            </div>
        </>
        
    )
}
//export default Detail;

function 함수(state){
    return{
        state:state
    }
}export default connect(함수)(Detail)




function TapContent(props){
    
    let params = useParams();
    let state = useSelector((state)=>state.reducer);

    useEffect(()=>{
      props.cssswitchChange(true);
    })

    if(props.tabnumber === 0){
      return(<div className="item_description mt-3 mb-5">{state[params.id].Description}</div>)
    }
    else if(props.tabnumber === 1){
      return(<div className="item_description mt-3 mb-5">배송정보를 입력해주세요.</div>)
    }
    else{
      return(<div className="item_description mt-3 mb-5">판매자 정보를 입력해주세요.</div>)
    }
  }