import React from "react";
import NavBar from './NavBar';
import { Link } from "react-router-dom";

function DietCoke() {
  return (
    <div>
      <h1><Link to="/">go back</Link></h1>
      <h1>Diet Coke</h1>
      <img
        src="https://media.giphy.com/media/UdUwcOJxWK0sQj1xo4/giphy.gif"
        alt="Diet coke, boss o'clock."
      />
    </div>
  );
}

export default DietCoke;
