import {Link} from "react-router-dom"
import {useState} from "react"
import Wave from "../wave.js"

function Nav() {
  
  const [showNav, setShowNav] = useState(false);
  
  const change = () => {
    setShowNav(!showNav)
    console.log("ckliicking throygh");
  }

  return [
    <div   className="z-50 absolute inset-y-0 left-0 block" >
      <svg onClick={change} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>,
    <div className={` ${showNav? "" : "hidden"} bg-pink-300 flex h-screen w-screen z-40 absolute inset-y-0 left-0 `}>
    <nav className="m-auto text-3xl text-center">
        <ul>
            <Link to="/Session">
            <li onClick={change}>Home</li>
            </Link>
            <Link to="/Myprofile">
            <li onClick={change}>My Profile</li>
            </Link>
            <Link to="/CreateSession">
            <li onClick={change}>Create</li>
            </Link>
            <li onClick={change}>Logout</li>
         
        </ul>
    </nav>
    <Wave  />
    </div>
    
  ];
}

export default Nav;