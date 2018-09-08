import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom'

import './App.css';

import InputSearch from './components/inputSearch';
import SearchList from './components/SearchList/searchList';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={InputSearch} />

          <Route path="/search/:term" component={SearchList} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </BrowserRouter>


    );
  }
}

export default App;
