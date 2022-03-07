import React, { useState } from 'react';
import {} from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

function Itemlist(props){

    let item = useSelector((state)=>state.reducer)// useSelcect를 사용해서 reducer값을 가져온다.
    let history = useHistory();
    let [showCount, showCountChange] = useState(3)

    function Countchange(){
        showCountChange(6)
    }

    return(
        <div className='container mt-5'>
            <Fade bottom>
                <div className='row'>
                    {item.map((a,i)=>{
                            if(i < showCount){
                                return(
                                    <div className='col-md-4'>
                                        <img className='pointer' src={`../item_${i}.jpg`} width='70%' onClick={()=>{history.push(`/product/${i}`)}}></img>
                                        <h4>{item[i].title}</h4>
                                        <p> {item[i].content} & {item[i].price}₩</p>
                                    </div>
                                )
                            }
                            
                    })}
                </div>
                
            </Fade>
            <button type="button" class="btn btn-info rounded-pill white mt-3" onClick={Countchange}>More item</button>
        </div>
    )
}export default Itemlist;