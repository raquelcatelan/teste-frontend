import React from 'react';
import Formulario from './components/Formulario';
import List from './components/List'
import { Switch, Route } from 'react-router-dom'

import Title from './assets/pokemon.svg'

import './App.css';


function App () {
  return (
    <div>   
     <img className="logo-pokemon" src={Title} alt="logo pokemon"></img>
    <Switch>
      <div>
        <Route exact path='/' component={Formulario} />
        <Route path='/list' component={Formulario} />
      
      </div>
    </Switch>
    </div>
  )
}

export default App;
