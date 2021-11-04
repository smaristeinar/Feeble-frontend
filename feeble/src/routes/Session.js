import React, { Component } from 'react'
import SessionCard from "../components/SessionCard";
let sessions = [];

export default class session2 extends Component {
    state = {
        loading: true,
        sessions: null
    };


    async componentDidMount() {
        const url = "http://localhost:5000/session";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({sessions:data,loading:false })
        console.log(data);
    }

    render(){
        return(
            <div>
                 <h1 className="text-center text-6xl">Session</h1>
                {this.state.loading ? <div>loading</div> : <SessionCard info={this.state.sessions}/>}
            </div>
        )
    }
}
