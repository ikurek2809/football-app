import React, {Component} from 'react';

import Grid from "@material-ui/core/Grid/index";
import Paper from "@material-ui/core/Paper/index";
import Typography from "@material-ui/core/Typography/index";

import footballApi from "../../api/footballApi";

import classes from "./Team.module.css";

import 'moment/locale/hr';
import Matches from "../../components/Matches";
import Spinner from "../../components/Spinner";



class Team extends Component {


  state = {
    loading: true,
    matches: [],
    team: {}
  };


  async componentDidMount() {
    const teamId = this.props.match.params.teamId;
    const response = await footballApi.get(`/teams/${teamId}`);
    const response2 = await footballApi.get(`/teams/${teamId}/matches`);
    console.log("aaa", response);
    this.setState({
      team: response.data,
      loading: false,
      matches: response2.data.matches
    })
  }


  onViewSquadButtonClick = () => {
    this.props.history.push(`/squad/${this.state.team.id}`)
  };



  render() {
    console.log("team", this.state)
    if (this.state.loading) {
      return <Spinner/>
    }
    return (
      <>
        <div>
          <Paper className={classes.content}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  {this.state.team.name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Basic info
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      Founded:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {this.state.team.founded}
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      Stadium name:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      {this.state.team.venue}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      Address:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      {this.state.team.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      Website:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      <a href={this.state.team.website}>{this.state.team.website}</a>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      Email:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      {this.state.team.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      Full Squad:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h8">
                      <button className={classes.viewSquadButton} onClick={this.onViewSquadButtonClick}>View</button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Active competitions
                    </Typography>
                  </Grid>
                  {this.state.team.activeCompetitions.map(c => (
                    <>
                      <Grid item xs={6}>
                        <Typography variant="h8">
                          {c.area.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h8">
                          {c.name}
                        </Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Typography variant="h4">
            Matches
          </Typography>
          <Matches history={this.props.history} matches={this.state.matches}/>
        </div>
      </>
    )
  }
}

export default Team;
