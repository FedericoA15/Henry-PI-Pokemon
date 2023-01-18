import './App.css';
import { Route, Switch, useLocation } from "react-router-dom";
import {Home,LandingPage,Detail,Form} from "./views"
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  const location = useLocation()
  return (
    <div className="App">
        {location.pathname!=="/" &&<NavBar />}
        <Switch>
        <Route exact path="/">
            <LandingPage/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/detail/:id">
            <Detail/>
        </Route>
        <Route path="/create">
            <Form/>
        </Route>
        </Switch>

    </div>
  );
}

export default App;
