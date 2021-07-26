import { BrowserRouter, Route } from 'react-router-dom';
import { Itinerary} from "./components/index.js"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello
      </h1>
        <Route />
              <Route exact path="/itineraire" component={Itinerary} ></Route>
      </BrowserRouter>

    </div>

  );
}

export default App;
