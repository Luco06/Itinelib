import { BrowserRouter, Route } from 'react-router-dom';
import { Itinerary} from "./components/index.js"
import Home from "./components/Home/home.js";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Route exact path="/itineraire" component={Itinerary} ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
