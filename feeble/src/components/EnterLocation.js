import React from 'react'

function EnterLocation(props) {

    //save location function
    const saveLocation = () =>{
            props.enterLocation()
    }
    return (
        
        <>
            <h3>Enter Location</h3>
            <input type="text" placeholder="City" /> <br />
            <input type="text" placeholder="Street"/> <br />
            <input type="text" placeholder="Name"/> <br />
            <button onClick={saveLocation}>Save</button>
        </>
    )
}

export default EnterLocation