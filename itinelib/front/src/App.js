import { BrowserRouter, Route } from 'react-router-dom';
import { Itinerary, Users, Login, Register, Home, Map} from "./components/index.js"



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/itineraire" component={Itinerary} ></Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/inscription" component={Register} />
          <Route exact path="/map" component={Map} />
      </BrowserRouter>

    </div>

  );
}

export default App;
