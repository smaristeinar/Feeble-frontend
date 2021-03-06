import React from 'react';
import { useState } from 'react';
import LogoBoard from "../logoSkateB.png";


function Login() {

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")

  function onChange(evt) {
    setUsername(evt.target.value);
  }
  function onChange2(evt) {
    setPassword(evt.target.value);
  }


  function onClick() {
    const login = { Username, Password };
    console.log('login', login);


    fetch("https://feeble.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(login)
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data.message);

        if(data.message === `Användare: ${Username} inloggad`){
          console.log("login successfull");
          localStorage.setItem("user", Username );
          //bad solution - will try to figure out how to redirect properly
          window.location.href = 'https://smaristeinar.github.io/feeble-build/#/Session';
          window.location.reload()
         
          
        } else {
          console.log("Login failed");
        }})
  }

  return (
    <>
      <img className="object-center mx-auto mt-10" src={LogoBoard} alt="logo with feeble and skater"/> 
      <div className="text-center text-2xl mt-15 flex-column font-sans">
        <input onChange={onChange} className="text-left px-3 text-2xl mt-5 border rounded bg-gray-200" type="text" placeholder="Username" /><br></br>
        <input onChange={onChange2} className="text-left px-3 text-2xl mt-5 border rounded bg-gray-200" type="password" placeholder="Password" /><br></br>
        <button onClick={onClick} className="text-left px-3 py-1 text-2xl mt-5 border rounded bg-gray-200 ">Login</button>
      </div>
    </>
  );
}

export default Login;
