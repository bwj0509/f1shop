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
        showCountChange(showCount+3)
    }
    console.log(item)
    return(
        <div className='container mt-1'>
            <Fade bottom>
                <div className='row'>
                    {item.map((a,i)=>{
                            if(i < showCount){
                                return(
                                    <div className='col-md-4'>
                                        <div className='item_img mt-5'>
                                            <img className='pointer item_img_size' src={`../item_${i}.jpg`}  onClick={()=>{history.push(`/product/${i}`)}}></img>
                                        </div>
                                        <h4>{item[i].title}</h4>
                                        <p> {item[i].content} & {item[i].price}₩</p>
                                    </div>
                                )
                            }
                            
                    })}
                </div>
                
            </Fade>
            <button type="button" class="btn btn-info rounded-pill white mt-3 " onClick={Countchange}>More item</button>
            <div className='spacing'> </div>
        </div>
    )
}export default Itemlist;