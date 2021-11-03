import React from "react";

function userPofile(props){

    return(
        <div className="userProfileCard flex flex-col">
                <div className="self-center">
                <img className="rounded-full h-24 w-24 flex items-center justify-center border-black border-2" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile image" />
                </div>
                <h1 className="self-center  text-3xl">{props.name}</h1>
                <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md">
                        <p className="text-xl">Stance: {props.stance}</p>
                        <p className="text-xl">Location: {props.location}</p> 
                </div>
        </div>
    );

}
export default userPofile