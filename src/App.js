import React from 'react';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'


function App() {
  return (
    <Router>
    <div className="App">

     <Navigation/> 
     <Switch>
     <Route path ="/" exact component = {Home} />
     <Route path ="/blog" exact component = {Blog} />
     
     </Switch>
    </div>
    </Router>
  );
}

export default App;
