import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/body/Home';
import Photos from './components/body/Photos';
import Videos from './components/body/Videos';
import Blogs from './components/body/Blog';
import About from './components/body/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Photos">
              <Photos />
            </Route>
            <Route exact path="/Videos">
              <Videos />
            </Route>
            <Route exact path="/Blogs">
              <Blogs />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
