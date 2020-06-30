import React from 'react';
import { StyledMenu } from './Menu.styled';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { HashLink as Link } from 'react-router-hash-link';



const menu = ({ open }) => (


    <StyledMenu>
        <p>work</p>
        <p>about</p>
        <p>contact</p>
    </StyledMenu>


);

export default menu;
