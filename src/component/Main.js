import React from "react";
import Fade from 'react-reveal/Fade';

function Main(){
    return(
        <div className="backgcolor">


            <Fade bottom>
                <div className="pt-5">
                   <span className="font_deco0 text-box0">Thank You, </span>
                   <span className="font_deco1 text-box1">Valtteri</span>
                </div>
            </Fade>

            <Fade bottom>
                <div className="pt-5">
                    <img src="../main_img0.png" className="main_img"></img>
                </div>
            </Fade>
            <Fade bottom>
                <div className="pt-5">
                    <img src="../main_img1.png" className="main_img"></img>
                </div>
            </Fade>
            <Fade bottom>
                <div className="pt-5">
                    <img src="../main_img2.png" className="main_img"></img>
                </div>
            </Fade>
            <Fade bottom>
                <div className="pt-5">
                    <img src="../main_img3.png" className="main_img"></img>
                </div>
            </Fade>
            <div className="spacing"></div>
        </div>      
    )
}export default Main;


//<figure class="swing">
//  <img src="../main_img0.png" width="300px" ></img>
//</figure>


