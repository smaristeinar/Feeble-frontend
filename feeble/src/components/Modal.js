import React from "react";
import Map from "./Map"
import { useState } from 'react';

function Modal(props) {
    console.log(props.info, "modal");
    const [users, setUsers] = useState(props.info.users)
    function addUserToSession() {
        let user = localStorage.getItem("user");
        let userObj = {
            userName: user,
            sessionId: props.info.sessionId
        }
        console.log(user);
        fetch("http://localhost:5000/session/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log('front', data)
                setUsers(data.participants)

            })
    }


    return (
        <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-lg flex flex-row" >
            <Map address={props.info} />
            <div className="ml-5">
                <h1>{props.info.city}</h1>
                <h1>{props.info.street}</h1>
                <h1>{props.info.date}</h1>
                <div className="flex flex-row "><p className="font-medium">Participants:</p>
                <ul className="flex flex-row flex-wrap">{users.map(function(name,index)
                {return <li className="flex  flex-row font-normal ml-3" key={ index }><img className="rounded-full  m-2 h-8 w-8 flex items-center justify-center border-black border-2 filter drop-shadow-xl" src={"https://github.com/"+name+".png"} alt="profile" />{name}</li>})}</ul>
                </div>
                <button className=" mt-5 w-28 border rounded-xl bg-gray-200 shadow-xl font-medium" onClick={addUserToSession}>Join</button>
            </div>
        </div>

    );

}
export default Modal

//<ul><li className="font-normal ml-3">{props.info.users}</li></ul>