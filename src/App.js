import Navbar from './Navbar/Navbar.js';
import News from './News/News.js';
import About from './About/About.js';
import {Switch, Route} from "react-router-dom"; 
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function App ()
{
  const newsCategory = useSelector(state => state.newsCategory)

  return (
    <div>
      <Navbar />
        <Switch>
        <Route exact path="/" render={(props) => (<News {...props} newsCategory={newsCategory}/>)}/>
        <Route exact path="/About" component={About}/>
        </Switch>
    </div>
  );
}

export default App;
