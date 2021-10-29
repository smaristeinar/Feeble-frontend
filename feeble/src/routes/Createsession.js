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
    <div className="flex flex-col justify-center p-4">
            <h1 className="p-1">Time & Date </h1>
            <input type="datetime-local" />
            <EnterLocation />
            <button 
                onClick={handlePostSession}>Post Session
            </button>
    </div>
    </>
 
  );
}

export default CreateSession;
