import React from 'react';

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import SwedishFish from "./SwedishFish";
import DietCoke from "./DietCoke";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/dietcoke">
            <DietCoke />
          </Route>
          <Route exact path="/swedishfish">
            <SwedishFish />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
