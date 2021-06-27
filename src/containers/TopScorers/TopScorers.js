import React, {Component} from 'react';

import footballApi from "../../api/footballApi";

import Spinner from "../../components/Spinner";
import TopScorerAccordion from "../../components/TopScorerAccordion";




class TopScorers extends Component {


  state = {
    scorersData: {},
    loading: true,
  };

  async componentDidMount() {
    const competitionId = this.props.match.params.competitionId;
    const response = await footballApi.get(`/competitions/${competitionId}/scorers`);
    this.setState({
      scorersData: response.data,
      loading: false
    })
    console.log("skorers", response.data)
  }



  render() {
    if (this.state.loading) {
      return <Spinner/>
    }
    return (
      <>
        <div>

          {this.state.scorersData.scorers.length > 0 && <TopScorerAccordion title={this.state.scorersData.competition.name} scorers={this.state.scorersData.scorers} />}

        </div>
      </>
    )
  }
}

export default TopScorers;
