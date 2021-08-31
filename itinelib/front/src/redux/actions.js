export const CHANGE_ITINERARY = 'change the waypoints';
export const TOGGLE_ADD_ITINERARY = 'toggle add itinerary';


export const changeItinerary = (donnéesGeolocalisation) => {
    return {
        type : CHANGE_ITINERARY,
        donnéesGeolocalisation
    }
}



export const displayaddItineray = () => {
    return {
        type : TOGGLE_ADD_ITINERARY
    }
}