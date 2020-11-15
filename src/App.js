import Navbar from './Navbar/Navbar.js';
import News from './News/News.js';
import About from './About/About.js';
import {Switch, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
        <Route exact path="/" component={News}/>
        <Route exact path="/About" component={About}/>
        </Switch>
    </div>
  );
}

export default App;
