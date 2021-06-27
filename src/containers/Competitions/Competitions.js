import React, {Component} from 'react';

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";

import footballApi from "../../api/footballApi";

import classes from "./Competitions.module.css";


class Competitions extends Component {


  state = {
    competitions: []
  };

  async componentDidMount() {
    const response = await footballApi.get('/competitions')
    this.setState({competitions: response.data.competitions.filter(competition => competition.plan === "TIER_ONE")})
  }


  render() {
    return (
      <>
        <div>
          <List >
            {this.state.competitions.map(competition => (
              <ListItem button>
                <Link className={classes.listItemLink} to={`standings/${competition.code}`}>
                  <ListItemText primary={competition.name}/>
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </>
    )
  }
}

export default Competitions;
