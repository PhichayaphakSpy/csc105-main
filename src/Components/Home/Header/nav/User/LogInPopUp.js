import React from "react";
import { PersonFill } from "react-bootstrap-icons";
import Popup from "reactjs-popup";
import { LogIn } from "./LogIn";


export const LogInPopUp  = () => {
  return (<Popup trigger={<button className="buttonss"> <PersonFill/> </button>} position="bottom right">
    <div><LogIn/></div>
  </Popup>);
};