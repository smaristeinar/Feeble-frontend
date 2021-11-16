import React from "react";
import Map from "./Map"

function Modal(props) {
    console.log(props.info, "modal");
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

                props.info.users = data;


            })
    }


    return (
        <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-lg flex flex-row" >
            <Map address={props.info} />
            <div className="ml-5">
                <h1>{props.info.city}</h1>
                <h1>{props.info.street}</h1>
                <h1>{props.info.date}</h1>
                <div className="flex flex-row"><p className="font-medium">Participants:</p><ul><li className="font-normal ml-3">{props.info.users}</li></ul></div>
                <button className=" mt-5 w-28 border rounded-xl bg-gray-200 shadow-xl font-medium" onClick={addUserToSession}>Join</button>
            </div>
        </div>

    );

}
export default Modal