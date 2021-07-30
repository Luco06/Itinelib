import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';

function Map(){
    return(
        <div>
            <MapContainer center={[45.7578137, 4.8320114]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[45.7578137, 4.8320114]}>
                <Popup>
                    Lyon
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;