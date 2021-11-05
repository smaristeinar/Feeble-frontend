import React from "react";


function Modal(props){
    console.log(props.info, "modal");
    return(

        <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md" >
            <h1>{props.info.city}</h1>
            <h1>{props.info.street}</h1>
            <h1>{props.info.date}</h1>
        </div>
    
    );

}
export default Modal