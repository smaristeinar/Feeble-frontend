import React from "react";


function userPofile(props){
    let url1 = "https://github.com/";
    let url2 = ".png";

    return(
        
        <div className="userProfileCard flex flex-col">
                <div className="self-center">
                <img className="rounded-full h-24 w-24 flex items-center justify-center border-black border-2" src={url1 + props.name + url2} alt="profile" />
                </div>
                <h1 className="self-center  text-3xl">{props.name}</h1> 
                <div className="p-5 m-5 bg-gray-50 bg-opacity-50 rounded-md">
                    <div className="flex flex-row">
                        <p className="text-xl">Stance:</p>
                        <p className="text-xl ml-4 bg-gray-100 px-2 rounded-md" contenteditable="true">{props.stance}</p>
                    </div>
                    <div className="flex flex-row mt-1">
                        <p className="text-xl">Location:</p>
                        <p className="text-xl ml-2 bg-gray-100 px-2 rounded-md" contenteditable="true">{props.location}</p>
                    </div>
                </div>
                <button className="rounded-md bg-gray-50 bg-opacity-50 w-10 object-center mx-auto mt-0">Save</button>
        </div>
    );

}
export default userPofile