import React from "react";
import Map from "./Map"

function Modal(props){
    console.log(props.info, "modal");
    function addUserToSession(){
        let user = localStorage.getItem("user");
        let userObj = {userName:user}
        console.log(user);
        fetch("http://localhost:5000/", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }
    

    return(
        <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md" >
            <Map address={props.info}/>
            <h1>{props.info.city}</h1>
            <h1>{props.info.street}</h1>
            <h1>{props.info.date}</h1>
            <button className=" mt-10 w-28 border rounded-xl bg-gray-200 shadow-xl font-medium" onClick={addUserToSession}>Join</button>
        </div>
    
    );

}
export default Modal