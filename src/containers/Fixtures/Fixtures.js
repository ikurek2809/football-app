import React, {Component} from 'react';

import footballApi from "../../api/footballApi";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Spinner from "../../components/Spinner";
import 'moment/locale/hr';
import Matches from "../../components/Matches";

class Standings extends Component {


  state = {
    matches: [],
    selectedMatchday: null,
    matchdays: [],
    filteredMatches: []
  };

  async componentDidMount() {
    const competitionId = this.props.match.params.competitionId;
    const response = await footballApi.get(`/competitions/${competitionId}/matches`);
    const matchDaysWithDuplicates = response.data.matches.map(match => match.matchday).flat();
    const matchdaysSet = new Set(matchDaysWithDuplicates);
    const matchdays = [...matchdaysSet];
    const filteredMatches = response.data.matches.filter(match => match.matchday === response.data.matches[0].season.currentMatchday);
    this.setState({matches: response.data.matches, matchdays: matchdays, filteredMatches: filteredMatches, selectedMatchday: response.data.matches[0].season.currentMatchday})
  }

  onSelectedMatchdayChange = (e) => {
    const matches = [...this.state.matches]
    const filteredMatches = matches.filter(match => match.matchday === e.target.value);
    this.setState({selectedMatchday: e.target.value, filteredMatches: filteredMatches});

  };

  onPlusMatchdayButton = () => {
    const matches = [...this.state.matches]
    const newMatchday = this.state.selectedMatchday + 1
    const filteredMatches = matches.filter(match => match.matchday === newMatchday);
    this.setState({selectedMatchday: newMatchday, filteredMatches: filteredMatches});
  }

  onMinusMatchdayButton = () => {
    const matches = [...this.state.matches]
    const newMatchday = this.state.selectedMatchday - 1
    const filteredMatches = matches.filter(match => match.matchday === newMatchday);
    this.setState({selectedMatchday: newMatchday, filteredMatches: filteredMatches});
  }


  render() {
    return (
      <div>
        {this.state.filteredMatches.length === 0
          ? <Spinner/>
          :
          <>
            <FormControl>
              Matchday:
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.selectedMatchday}
                onChange={e => this.onSelectedMatchdayChange(e)}
              >

                {this.state.matchdays.map(matchday => (
                  <MenuItem value={matchday}>{matchday}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <br/>
            <Button onClick={this.onMinusMatchdayButton}>&lt;</Button>
            <Button onClick={this.onPlusMatchdayButton}>&gt;</Button>
            <Matches history={this.props.history} matches={this.state.filteredMatches}/>
          </>
        }
      </div>
    )
  }
}

export default Standings;
