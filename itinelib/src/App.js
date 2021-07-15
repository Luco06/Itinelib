import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './components/router/Routes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>

    </div>

  );
}

export default App;
