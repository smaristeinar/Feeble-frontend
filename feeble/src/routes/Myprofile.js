import React from "react";
import UserCard from "../components/UserCard"

function Myprofile() {
let mockData = {
    userId:1,
    userName:"Off-The-Hook-dude123",
    stance:"goofy",
    location:"malmo"
  }  

  return (
    <div className="flex justify-center items-center font-sans">
      <div>
        <h1 className=" pb-10 text-center text-6xl font-bold mt-5">My profile</h1>
        <UserCard name={localStorage.getItem("user")} stance={mockData.stance} location={mockData.location} />
      </div>
    </div>
  );
}

export default Myprofile;
