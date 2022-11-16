import React from 'react';

import Chips from "./Chips";
import SwedishFish from "./SwedishFish";
import DietCoke from "./DietCoke";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/dietcoke">
          <DietCoke />
        </Route>
        <Route exact path="/swedishfish">
          <SwedishFish />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
