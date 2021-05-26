import React from "react";
import genshin from "../assets/genshin.jpg"

function Title() {
return(
    <div className="container">
            <div className="row text-center align-items-center my-5 py-5">
                <div className="col-12 col-md-6 my-5">
                    <img className="img-fluid rounded-circle w-100" 
                    src={genshin} 
                    alt="vijay iyer"
                    />
                </div>
                <div className="col-12 col-md-6 pl-6">
                    <div className="font-weight-light" style={{ fontSize: "50px"}} >
                        Hi I am <span className="text-info" >Vijay Iyer</span>
                        <h5 className="font-weight-light" >I am a freelancer from india</h5>
                    </div>
                </div>
            </div>
    </div>       

);
}

export default Title;

    