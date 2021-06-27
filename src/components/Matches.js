import React from 'react'

import classes from "./Spinner.module.css";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import moment from 'moment'
import 'moment/locale/hr';import TableContainer from "@material-ui/core/TableContainer";




const Matches = props => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Home Team</TableCell>
          <TableCell align="right"></TableCell>
          <TableCell align="right">Away Team</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.matches.map(match => (
          <TableRow className={classes.tableRow} key={match.name}>
            <TableCell onClick={() => props.history.push(`/team/${match.homeTeam.id}`)} align="left">{match.homeTeam.name}</TableCell>
            <TableCell align="right">{match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam} </TableCell>
            <TableCell onClick={() => props.history.push(`/team/${match.awayTeam.id}`)} align="right">{match.awayTeam.name}</TableCell>
            <TableCell align="right">{moment(match.utcDate).format("DD-MM-YYYY hh:mm")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Matches