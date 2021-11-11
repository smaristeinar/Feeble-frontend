import React from "react";
import Map from "./Map"

function Modal(props){
    console.log(props.info, "modal");
    return(
        <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md" >
            <Map address={props.info}/>
            <h1>{props.info.city}</h1>
            <h1>{props.info.street}</h1>
            <h1>{props.info.date}</h1>
        </div>
    
    );

}
export default Modal