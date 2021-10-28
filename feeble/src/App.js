
import './App.css';
import Nav from './components/Nav';
import Session from './routes/Session';
import Login from './routes/Login';
import Myprofile from './routes/Myprofile';
import CreateSession from './routes/Createsession';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
        <Route path="/Login" component={Login}/>
        <Route path="/Session" component={Session}/>
        <Route path="/Myprofile" component={Myprofile}/>
        <Route path="/CreateSession" component={CreateSession}/>
    </Router>

  );
}

export default App;
