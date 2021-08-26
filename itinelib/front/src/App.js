import { BrowserRouter, Route } from 'react-router-dom';
import { Itinerary, Users, Login, Register, Home, About, Contact, Avatar, AvatarPage} from "./components/index.js"



function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user" component={Users} />
          <Route exact path="/map" component={Itinerary} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/inscription" component={Register} />
      </BrowserRouter>

    </div>

  );
}

export default App;
