import React from "react"
import {useState } from 'react';


function CreateSession() {
    // states
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [date, setDate] = useState("");

    function cityInput(evt){
      setCity(evt.target.value)
      
    }
    function streetInput(evt){
      setStreet(evt.target.value)
      
    }
    function dateInput(evt){
      setDate(evt.target.value)
      
    }
    

    // handle post session function
    const handlePostSession=() =>{
      console.log("posting new session")
      let dateAndAddress = {date, city, street};
      console.log(dateAndAddress)

    }

    // enter location function
    // const enterLocation =() =>{
    //     console.log("clicked enter location");
    //     setEnterLo(!enterLo)   
    // }
    // if (enterLo){
    //     return (
    //     <>
    //     <EnterLocation enterLocation={enterLocation}/>
    //     </>
    //     )
    // }
  return (
    <>
    <h1 className="text-center text-6xl">Create Session</h1>
    <div className="flex flex-col justify-center p-4">
            <h1 className="p-1">Time & Date </h1>
            <input onChange={dateInput} type="datetime-local" />
            <h3 className="p-1">Enter Location</h3>
            <input onChange={cityInput} className="mb-4" type="text" placeholder="City" /> 
            <input onChange={streetInput} className="mb-10" type="text" placeholder="Street"/> 
            <button 
                onClick={handlePostSession}>Post Session
            </button>
    </div>
    </>
 
  );
}

export default CreateSession;
