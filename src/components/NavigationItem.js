import React from 'react';

import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

import classes from "./NavigationItem.module.css";


const NavigationItem = props => (
      <Typography variant="h6" >
        <Link className={classes.Link} to={props.to}>{props.text}</Link>
      </Typography>
)

export default NavigationItem
