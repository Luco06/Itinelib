import { BrowserRouter } from 'react-router-dom';
import Routes from './components/router/Routes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Hello
      </h1>
        <Routes />
      </BrowserRouter>

    </div>

  );
}

export default App;
