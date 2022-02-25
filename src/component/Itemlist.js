import React from 'react';
import {} from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Itemlist(props){

    let history = useHistory();

    return(
        <div className='container mt-5'>
            <div className='row'>
                {props.item.map((a,i)=>{
                    return(
                        <div className='col-md-4'>
                            <img className='pointer' src={`../item_${i}.jpg`} width='70%' onClick={()=>{history.push(`/product/${i}`)}}></img>
                            <h4>{props.item[i].title}</h4>
                            <p> {props.item[i].content} & {props.item[i].price}₩</p>
                        </div>
                    )
                })}
            </div>
            <button type="button" class="btn btn-info rounded-pill white mt-3">More item</button>
        </div>
    )
}export default Itemlist;