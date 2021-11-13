import HomePage from './components/homePage/HomePage'
import Header from './components/header/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Projects from './components/projects/Projects';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path= "/">
      <HomePage className='homepage pt-5'/>
      </Route>
      <Route path= "/projects">
        <Projects/>
      </Route>
    
      </Switch>
    </div>
    </Router>

  );
}

export default App;
