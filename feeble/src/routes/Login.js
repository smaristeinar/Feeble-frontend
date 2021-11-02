import React from 'react';
import { useState } from 'react';



function Login() {

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")


  function onClick() {

    const login = { Username, Password };
    console.log('login', login);


    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(login)
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);


      }

      )
  }

  function onChange(evt) {
    setUsername(evt.target.value);
  }
  function onChange2(evt) {
    setPassword(evt.target.value);
  }



  return (
    <>
      <h1 className="text-center text-6xl">Login</h1>
      <div className="text-center text-2xl mt-44 flex-column">
        <h2 >Place logo here</h2>
        <input onChange={onChange} className="text-left px-3 text-2xl mt-5 border rounded bg-gray-200" type="text" placeholder="Username" /><br></br>
        <input onChange={onChange2} className="text-left px-3 text-2xl mt-5 border rounded bg-gray-200" type="password" placeholder="Password" /><br></br>
        <button onClick={onClick} className="text-left px-3 py-1 text-2xl mt-5 border rounded bg-gray-200 ">Login</button>
      </div>
    </>
  );
}

export default Login;
