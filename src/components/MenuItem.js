import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './About';
import WeatherApp from '../Apps/Weather/WeatherContainer';
import TodoContainer from '../Apps/TodoApp/TodoContainer';
import PokemonContainer from '../Apps/Pokemon/PokemonContainer';

const MenuItem = () => {
    return (
    <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/weather" component={WeatherApp}/>
          <Route exact path="/todo" component={TodoContainer}/>
          <Route exact path="/movie" component={PokemonContainer}/>
          <Route exact path="/titato" component={PokemonContainer}/>
          <Route exact path="/pokemon" component={PokemonContainer}/>
          <Route exact path="/gallery" component={PokemonContainer}/>
          <Route exact path="/recipe" component={PokemonContainer}/>
          <Route exact path="/covid" component={PokemonContainer}/>
          <Route exact path="/quiz" component={PokemonContainer}/>
          <Route exact path="/chat" component={PokemonContainer}/>
          <Route exact path="/stocks" component={PokemonContainer}/>
    </Switch> 
    );
}

export default MenuItem;
