import React from 'react';
import {SearchRoad, Header } from './../index';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './itinerary.scss';
import 'leaflet/dist/leaflet.css';


function Itinerary(props){
    return(
        <main className="itinerary__container">
            {/* <div className="road__formContainer">
            </div> */}
            
                <Header />
            <section className="itinerary__mapContainer">
                <SearchRoad />
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>
            </section> 
        </main>
    )
}

export default Itinerary;