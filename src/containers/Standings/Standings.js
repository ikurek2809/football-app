import React, {Component} from 'react';

import footballApi from "../../api/footballApi";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

import classes from "./Standings.module.css";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import standingTableTypes from "../../constants/standingTableTypes";


class Standings extends Component {


  state = {
    totalTable: [],
    homeTable: [],
    awayTable: [],
    competitionName: "",
    selectedTable: []
  };

  async componentDidMount() {
    const competitionId = this.props.match.params.competitionId;
    console.log(competitionId)
    const response = await footballApi.get(`/competitions/${competitionId}/standings`);
    console.log("response", response)
    this.setState({
      competitionName: response.data.competition.name,
      selectedTable: response.data.standings[0].table,
      totalTable: response.data.standings[0].table,
      homeTable: response.data.standings[1] ? response.data.standings[1].table : [],
      awayTable: response.data.standings[2] ? response.data.standings[2].table : []
    })
  }

  onSelectTableButtonClick = (tableType) => {
    if (tableType === standingTableTypes.HOME) {
      this.setState({selectedTable: this.state.homeTable})
    } else if (tableType === standingTableTypes.AWAY) {
      this.setState({selectedTable: this.state.awayTable})
    } else {
      this.setState({selectedTable: this.state.totalTable})
    }
  }


  render() {
    const competitionId = this.props.match.params.competitionId;
    return (
      <>
        <div>
          <h1>{this.state.competitionName}</h1>
          <Button onClick={() => this.props.history.push(`/fixtures/${competitionId}`)}>Fixtures</Button>
          <Button onClick={() => this.props.history.push(`/topScorers/${competitionId}`)}>Top Scorers</Button>
          <br/>
          <Button onClick={() => this.onSelectTableButtonClick(standingTableTypes.HOME)} style={{width: "33%"}}>Home</Button>
          <Button onClick={() => this.onSelectTableButtonClick(standingTableTypes.AWAY)} style={{width: "33%"}}>Away</Button>
          <Button onClick={() => this.onSelectTableButtonClick(standingTableTypes.TOTAL)} style={{width: "34%"}}>Total</Button>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Team Name</TableCell>
                  <TableCell align="right">Played</TableCell>
                  <TableCell align="right">Last 5 games</TableCell>
                  <TableCell align="right">W</TableCell>
                  <TableCell align="right">D</TableCell>
                  <TableCell align="right">L</TableCell>
                  <TableCell align="right">GF</TableCell>
                  <TableCell align="right">GA</TableCell>
                  <TableCell align="right">PTS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.selectedTable.map(row => (
                  <TableRow className={classes.tableRow} key={row.name}>
                    <TableCell onClick={() => this.props.history.push(`/team/${row.team.id}`)} component="th" scope="row">
                      {row.team.name}
                    </TableCell>
                    <TableCell align="right">{row.playedGames}</TableCell>
                    <TableCell align="right">{row.form}</TableCell>
                    <TableCell align="right">{row.won}</TableCell>
                    <TableCell align="right">{row.draw}</TableCell>
                    <TableCell align="right">{row.lost}</TableCell>
                    <TableCell align="right">{row.goalsFor}</TableCell>
                    <TableCell align="right">{row.goalsAgainst}</TableCell>
                    <TableCell align="right">{row.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    )
  }
}

export default Standings;
