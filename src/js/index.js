//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { Excusa } from "./component/excuse"; 


setInterval(()=>{
    ReactDOM.render(<Excuse excuse={excuse}/>, document.querySelector("#app"));}, 5000);
//render your react application each five seconds 

