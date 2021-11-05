import React, { Component } from 'react'
import Modal from '../components/Modal'
export default class Open extends Component {
    state={
        items:null
    }
    componentDidMount(){
        if(this.props.location.state){
            const {item} = this.props.location.state
            this.setState({items:item})
            console.log(item.city);
        }
    }
    
    render() {
        return (
            
            <div>
                <h1 className="text-center text-6xl">Session</h1>
                {this.state.items ? <Modal info={this.state.items}/>:<div>this does not exist</div>}
            </div>
        )
    }
}
