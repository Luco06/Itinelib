import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { connect } from "react-redux";


const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.itineraryWaypoint.departureWaypoint.x, props.itineraryWaypoint.departureWaypoint.y),
      L.latLng(props.itineraryWaypoint.arrivalWaypoint.x, props.itineraryWaypoint.arrivalWaypoint.y),
      // L.latLng(48.8618, 2.3470),
      // L.latLng(48.8793, 2.4159)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 7 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  
console.log('ouiuio',props)
  return instance;
};

const RoutingMap = createControlComponent(createRoutineMachineLayer);

export default connect((state)=>{
  console.log(state)
  return {
    itineraryWaypoint:state.itineraryWaypoint
  }
})(RoutingMap)
