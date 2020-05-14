import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './component';
import Resume from './component/Resume';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './component/Navbar';


const App = () => {
  return (
    <>
    <CssBaseline/>
    
    <Router>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume}/>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
