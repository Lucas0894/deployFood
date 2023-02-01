import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import FoodCreated from './components/FoodCreated';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home/:id' render={(match)=><Detail match={match}/>} />
        <Route exact path ='/home' component={Home}/>
        <Route exact path='/recipes' component={FoodCreated}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
