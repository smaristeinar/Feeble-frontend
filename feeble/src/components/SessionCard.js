import React from "react";

function sessionCard(props){
    return(
        <div>
        {props.info.map((value, index) => {
         return <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md" key={index}>
             <p>Session# {value.sessionId}</p>
             <p>{value.location}</p>
             <p>{value.time}</p>
         </div>
         })}
        </div>        
    );

}
export default sessionCard