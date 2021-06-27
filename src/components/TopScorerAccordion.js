import React from 'react'

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";


const TopScorerAccordion = props => (
  <>
    <Grid item xs={12}>
      <Typography variant={"h4"}>{props.title} Top Scorers</Typography>
    </Grid>
    <Grid item xs={12}>
      {props.scorers.map(scorer => (
        <Accordion key={scorer.id}>
          <AccordionSummary>
            <Typography>{scorer.player.name}   :    {scorer.numberOfGoals}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography>Date of birth:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{scorer.player.dateOfBirth}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Club</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{scorer.team.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Nationality:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{scorer.player.nationality}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Position:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{scorer.player.position}</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  </>
);

export default TopScorerAccordion
