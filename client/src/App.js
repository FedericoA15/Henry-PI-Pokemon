import './App.css';
import Home from "../src/components/Home.jsx"
import {  Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Route path="/"> 
          <Home/>
        </Route>

    </div>
  );
}

export default App;
