
import './App.css';
import Nav from './components/Nav';
import Session from './routes/Session';
import Login from './routes/Login';
import Myprofile from './routes/Myprofile';
import CreateSession from './routes/Createsession';
import Open from "./routes/Open"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  
  const [user, setUser] = useState();


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = (loggedInUser);
      setUser(foundUser);
     
    }
  }, []);

  if (user) {
    return(
    <Router>
      <Nav />
        <Route path="/Session" component={Session}/>
        <Route path="/Myprofile" component={Myprofile}/>
        <Route path="/CreateSession" component={CreateSession}/>
        <Route path="/Open/:id" component={Open}/>
    </Router>
    )} 
    else {
      return(
    <Login />
    )
  }

}

export default App;


