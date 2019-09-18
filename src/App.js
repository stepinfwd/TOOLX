import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header'
import { isImport } from '@babel/types';
import Home from './components/home/home'
import Card from './components/card/card'
import Archive from './components/reports-archive/archive'
import  RepoPart2 from './components/repo-arch-part2/repo-arch-part2'
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">

          <Header/>
          <Switch>
          <Route exact path="/"  component={Home}/>
          <Route path="/archive" component={Archive}/>

          <Route path="/report" component={RepoPart2}/>
          </Switch>
         
    
           

    </div>
    </Router>
  );
}

export default App;
