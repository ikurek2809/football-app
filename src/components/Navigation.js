import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import NavigationItem from "./NavigationItem";

import classes from "./Navigation.module.css";


const Navigation = () => (
  <AppBar position="static">
    <Toolbar className={classes.Toolbar}>
      <NavigationItem to="/" text="Home"/>
    </Toolbar>
  </AppBar>
);

export default Navigation








