import React from 'react';
import SearchRoad from './searchRoad/SearchRoad.js'

function Itinerary(props){
    return(
        <div>
            <div className="road__formContainer">
                <SearchRoad />
            </div>
            
            <main>
                <img src="https://images.unsplash.com/photo-1625111988773-8951494ce8ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="map itineraire" />
            </main> 
        </div>
    )
}

export default Itinerary;