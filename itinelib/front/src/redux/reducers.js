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

export const itineraryWaypoint = (state = {departureWaypoint:{x:48.8618,y:2.3470}, arrivalWaypoint:{x:48.8793,y:2.4159}}, action) =>  {
    switch(action.type){
        case actions.CHANGE_ITINERARY:
            return{
                departureWaypoint:{
                    x:action[0].x,
                    y:action[0].y
                },
                arrivalWaypoint:{
                    x: action[1].x,
                    y:action[1].y
                }
            }
        default:
            return state
    }
}

