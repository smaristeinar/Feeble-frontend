import React from "react"
import {useState } from 'react';
import EnterLocation from "../components/EnterLocation";
//import Create from "../components/Create";

function CreateSession() {
    // states
    const [enterLo, setEnterLo] = useState(false)

    // handle post session function
    const handlePostSession=() =>{
    }

    // enter location function
    const enterLocation =() =>{
        console.log("clicked enter location");
        setEnterLo(!enterLo)   
    }
    if (enterLo){
        return (
        <>
        <EnterLocation enterLocation={enterLocation}/>
        </>
        )
    }
  return (
    <>
    <h1 className="text-center text-6xl">Create Session</h1>
    <label>Time & Date </label> <br/>
            <input type="datetime-local" /> <br/>
            <button>Invite Skaters</button> <br />
            <button 
                onClick={enterLocation}>Enter Location</button> <br/>
            <p>OR</p>
            <button>Pin on Map</button> <br />
            <button 
                onClick={handlePostSession}>Post Session
            </button>
    </>
  );
}

export default CreateSession;
