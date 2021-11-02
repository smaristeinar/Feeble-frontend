import React from 'react'

function EnterLocation(props) {

    //save location function
    const saveLocation = () =>{
            props.enterLocation()
    }
    return (
        
        <>
            <h3 className="p-1">Enter Location</h3>
            <input className="mb-4" type="text" placeholder="City" /> 
            <input className="mb-10" type="text" placeholder="Street"/> 
        </>
    )
}

export default EnterLocation