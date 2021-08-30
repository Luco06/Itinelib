import * as actions from './actions'


export const toggleItinerary = (state = false, action) => {
    if(action.type === actions.TOGGLE_ADD_ITINERARY){
        if(state === false){
            return true
        }
        else{
            return false
        }
    }
    else{
        return state
    }

}

export const itineraryWaypoint = (state = {departureWaypoint:{x:null,y:null}, arrivalWaypoint:{x:null,y:null}}, action) =>  {
    switch(action.type){
        case actions.CHANGE_ITINERARY:
            return{
                departureWaypoint:{
                    x:action.departure.x,
                    y:action.departure.y
                },
                arrivalWaypoint:{
                    x: action.arrival.x,
                    y:action.arrival.y
                }
            }
        default:
            return state
    }
}

