import React from "react"
import SessionCard from "../components/SessionCard";

function Session() {
  let mockData= [
    {
     sessionId:1,
     location:"skatespot address 12",
     time:"06/01/1999 Mon 16:00",
     users:["me","someone else","that other guy"]
    },
  {
    sessionId:2,
    location:"skatepark some where",
    time:"23/09/2021 Tue 13:30",
    users:["radical man","Gnarly man","tre flip king69"]
  }
];

  return (
    <div>
    <h1 className="text-center text-6xl">Session</h1>
    <SessionCard info={mockData}/>
    </div>
    
  );
}

export default Session;
