import React from "react";
import Modal from "../components/Modal"
import { useState } from 'react';
function SessionCard(props){
    const [focus, SetFocus] = useState(false);
    console.log(props);
    function UpdateFocus(){
        SetFocus(!focus)
    }
    return(
        <div>
        {props.info.map((value, index) => {
         return <div onClick={UpdateFocus}  className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md" key={index}>
             <p>Session# {value.sessionId}</p>
             <p>Host: {value.userName}</p>
             <p>{value.street}</p>
             <p>{value.city}</p>
             <p>{value.date}</p>             
         </div>
         })}
         {focus ? <Modal info={props}/>:<div></div>}
        </div>        
    );

}
export default SessionCard