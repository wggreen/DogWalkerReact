import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import DogWalker from "./components/DogWalker"

ReactDOM.render(
  <Router>
    <DogWalker />
  </Router>
  , document.getElementById("root"))