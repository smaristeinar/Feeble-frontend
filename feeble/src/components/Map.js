import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useState, useEffect } from 'react';

function Map(props){
        const [geo, Setgeo] = useState([51.505, -0.09]);
        const [load,Setload] = useState(false)
        const provider = new OpenStreetMapProvider();

        async function loadGeo(address){
            const res = await provider.search({query: `"${address}"`})
            Setgeo([res[0].y,res[0].x])
            Setload(true)
        }
        useEffect(()=>{loadGeo(props.address.city)},[])
        
    return(
        <div className="">
           {load? <MapContainer center={geo} zoom={13} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                     <Marker position={geo}>
                        <Popup>
                             A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                     </Marker>
            </MapContainer>:<div>Something went wrong</div>}
        </div>
    );

}
export default Map