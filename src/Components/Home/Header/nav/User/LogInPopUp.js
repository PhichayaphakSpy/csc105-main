import React from "react";
import { LogIn } from "./LogIn";
import { PersonFill } from 'react-bootstrap-icons';
import { Button, Popup } from 'semantic-ui-react';


export const LogInPopUp  = () => {
  return (<>
  <Popup style={{zIndex:999}} on='click'
    positionFixed pinned trigger={<Button className="buttonss"><PersonFill/> </Button>} position="bottom right" >
        <div><LogIn/></div>
  </Popup></>
  );
};