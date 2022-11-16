import React from "react";
import NavBar from './NavBar';
import { Link } from "react-router-dom";

function SwedishFish() {
  return (
    <div>
      <h1><Link to="/">go back</Link></h1>
      <h1>Swedish Fish</h1>
      <img
        src="https://media.giphy.com/media/KD8fiHIznOTR0ywzfu/giphy.gif"
        alt="Swedish fish swimming."
      />
    </div>
  );
}

export default SwedishFish;
