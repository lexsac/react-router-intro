import React from "react";
import NavBar from './NavBar';
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1><Link to="/">go back</Link></h1>
      <h1>Chips</h1>
      <img
        src="https://media.giphy.com/media/xT39Dl1AHieEwAobq8/giphy.gif"
        alt="Endless amounts of potato chips."
      />
    </div>
  );
}

export default Chips;
