import React, {Component} from 'react';

import Grid from "@material-ui/core/Grid";

import PlayersAccordion from "../../components/PlayersAccordion";

import footballApi from "../../api/footballApi";


class Squad extends Component {


  state = {
    squad: []
  };

  async componentDidMount() {
    const teamId = this.props.match.params.teamId;
    const response = await footballApi.get(`/teams/${teamId}`);
    this.setState({squad: response.data.squad})
  }


  render() {
    return (
      <Grid container spacing={3}>
        <PlayersAccordion title="Goalkeepers" players={this.state.squad.filter(player => player.position === "Goalkeeper")}/>
        <PlayersAccordion title="Defenders" players={this.state.squad.filter(player => player.position === "Defender")}/>
        <PlayersAccordion title="Midfielders" players={this.state.squad.filter(player => player.position === "Midfielder")}/>
        <PlayersAccordion title="Attackers" players={this.state.squad.filter(player => player.position === "Attacker")}/>
        <PlayersAccordion title="Manager" players={this.state.squad.filter(player => player.role === "COACH")}/>
      </Grid>
    )
  }
}

export default Squad;
