import React, { Component } from 'react'
import SessionCard from "../components/SessionCard";
let sessions = [];

export default class session extends Component {
    state = {
        loading: true,
        sessions: null,
        filterSwitch: false
    };

    


    async componentDidMount() {
        const url = "http://localhost:5000/session";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({sessions:data,loading:false })
        console.log(data);
        
    }
    
    
    filterSwitch(){
      
        if (this.state.filterSwitch === false){  
            console.log("switch is on")
            this.setState({filterSwitch: true})
            document.getElementById("allSessions").className = "mr-2 mt-1 font-normal";
            document.getElementById("mySessions").className = "ml-2 mt-1 font-bold";
            
           
        } else if(this.state.filterSwitch === true) {
           console.log("switch is off")
           this.setState({filterSwitch: false})
           document.getElementById("allSessions").className = "mr-2 mt-1 font-bold";
           document.getElementById("mySessions").className = "ml-2 mt-1 font-normal";
           
            
        }
    }

   

    render(){
        return(
            <div>
                <h1 className="text-center text-6xl font-sans font-bold tracking-wider mt-5 mb-10">Sessions</h1>
                <div className="flex justify-center ">
                <p  id="allSessions" className="mr-2 mt-1 font-bold">All Sessions</p>
                <label class="switch">
                <input id="filterSwitch" type="checkbox" onClick={() => this.filterSwitch()}></input>
                <span class="slider round"></span>
                </label> 
                <p id="mySessions" className="ml-2 mt-1 font-normal">My Sessions</p>
                </div>
                {this.state.loading ? <div>loading</div> : <SessionCard filterSwitch={this.state.filterSwitch} info={this.state.sessions}/>}
               
            </div>
        )
    }
}
