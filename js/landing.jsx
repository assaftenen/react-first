import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or go to xxnx</Link>
  </div>
);
