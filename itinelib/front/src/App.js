import { BrowserRouter, Route } from 'react-router-dom';
import Users from '../Users'
import Login from'../Login'
import Register from '../Register';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/user" component={Users} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/inscription" component={Register} />
      </BrowserRouter>

    </div>

  );
}

export default App;
