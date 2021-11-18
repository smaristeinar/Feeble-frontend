import React from "react";
import Modal from "../components/Modal"
import { Link } from "react-router-dom";
import { useState } from 'react';

function SessionCard(props){
    const [focus, SetFocus] = useState(false);
    console.log(props);
    function UpdateFocus(){
        SetFocus(!focus)
    }

    if(props.filterSwitch === false){
    return(
        <div className="lg:grid lg:grid-cols-3 lg:gap-3 lg:m-10">
        {props.info.map((value, index) => {
         return <Link to={{pathname:"open/"+index,
         state: {item:value}
         
         }}> 
         
         <div onClick={UpdateFocus} id="sessionCards"  className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md shadow-xl font-sans text-lg font-medium lg:m-0 lg:w-full" key={index}>
             {/* <p>Session# {value.sessionId}</p> */}
             <p>Host: {value.userName}</p>
             <div className="flex flex-row"><p>Street:</p><p className="font-normal ml-3">{value.street}</p></div>
             <div className="flex flex-row"><p>City:</p><p className="font-normal ml-3"> {value.city}</p></div>
             <div className="flex flex-row"><p>When:</p><p className="font-normal ml-3"> {value.date}</p></div>
             {/* <div className="flex flex-row"><p>Participants:</p><ul><li className="font-normal ml-3">{value.users}</li></ul></div> */}
               
         </div>
         </Link> 
         })}
         
        </div> 
              
    );
} else {
    const filter = localStorage.getItem("user");
    const filteredResult = props.info.filter((item) => {
        return (item.users.indexOf(filter) >= 0);
    });
    console.log(filteredResult)


    return(
        <div className="lg:grid lg:grid-cols-3 lg:gap-3 lg:m-10">
        {filteredResult.map((value, index) => {
         return <Link to={{pathname:"open/"+index,
         state: {item:value}
         
         }}> 
         
         <div onClick={UpdateFocus}  className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md shadow-xl font-sans text-lg font-medium lg:m-0 lg:w-full" key={index}>
             {/* <p>Session# {value.sessionId}</p> */}
             <p>Host: {value.userName}</p>
             <div className="flex flex-row"><p>Street:</p><p className="font-normal ml-3">{value.street}</p></div>
             <div className="flex flex-row"><p>City:</p><p className="font-normal ml-3"> {value.city}</p></div>
             <div className="flex flex-row"><p>When:</p><p className="font-normal ml-3"> {value.date}</p></div>
             {/* <div className="flex flex-row"><p>Participants:</p><ul><li className="font-normal ml-3">{value.users}</li></ul></div> */}
               
         </div>
         </Link> 
         })}
         
        </div> 
    )
        
}

}

export default SessionCard