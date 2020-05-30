import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import AddScreen from './screens/AddScreen'
import EditScreen from './screens/EditScreen'

function App() {
  return (
    <div className="App">
     <Router>
     <div>
     <NavBar />
     <Switch>
     <Route path="/add"><AddScreen /></Route>
     <Route path="/edit/:id"><EditScreen /></Route>
     <Route path="/"><HomeScreen /></Route>
     {/*<Route path="/add" component={AddScreen} />
      <Route path="/edit/:id" component={EditScreen} />
    <Route path="/" component={HomeScreen} />*/}
     </Switch>
    </div>
    </Router>
    </div>
  )
}

export default App
