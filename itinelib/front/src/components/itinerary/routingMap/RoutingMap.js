import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(48.8618, 2.3470),
      L.latLng(48.8793, 2.4159)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  

  return instance;
};

const RoutingMap = createControlComponent(createRoutineMachineLayer);

export default RoutingMap;
