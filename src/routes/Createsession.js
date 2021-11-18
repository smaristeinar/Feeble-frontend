import React from "react"
import {useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from "moment"


function CreateSession() {
    // states
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [date, setDate] = useState("");
    const [userName, setUserName] = useState(localStorage.getItem("user"));
    const [users, setUsers] = useState([localStorage.getItem("user")]);
    const [sessionId, setSessionId] = useState(uuidv4());
    

    

    function cityInput(evt){
      setCity(evt.target.value)
      
    }
    function streetInput(evt){
      setStreet(evt.target.value)
      
    }
    function dateInput(evt){
      let dateTime = moment(evt.target.value).format('MMMM Do YYYY, h:mm a'); 
      console.log(dateTime) 
      setDate(dateTime)
      
    }
    


    // handle post session function
    const handlePostSession=() =>{
      
      console.log("posting new session")
      let sessionDetails = {userName, sessionId, date, city, street, users};
      console.log(sessionDetails)

      fetch("https://feeble.herokuapp.com/session/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(sessionDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      window.location.href = 'https://smaristeinar.github.io/feeble-build/#/Session';

    }

  return (
    <>
    <div>
    <h1 className="text-center text-6xl font-bold mt-5 mb-0 font-sans">Create Session</h1>
    {/* <h1 className="text-center text-6xl font-bold mt-0 mb-5 font-sans transform rotate-180 text-transparent bg-clip-text bg-gradient-to-b from-transparent to-black">Create Session</h1> */}
    </div>
    <div className="flex flex-col justify-center m-10 md:mx-56">
            <h1 className="p-1 text-center font-medium mb-3 text-xl">Time & Date </h1>
            <input className="border rounded bg-gray-200 shadow-xl" onChange={dateInput} type="datetime-local" />
            <h3 className="p-0 mt-3 text-center font-medium mb-3 text-xl">Enter Location</h3>
            <input onChange={cityInput} className="mb-4 border rounded bg-gray-200 shadow-xl" type="text" placeholder="City" /> 
            <input onChange={streetInput} className="mb-5 border rounded bg-gray-200 shadow-xl" type="text" placeholder="Street"/> 
            <div className="flex justify-center">
            <button className="w-28 border rounded-xl bg-gray-200 shadow-xl font-medium" onClick={handlePostSession}>Post Session</button>
            </div>
    </div>
    </>
 
  );
}

export default CreateSession;
