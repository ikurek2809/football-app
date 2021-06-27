import React from 'react'

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";


const PlayersAccordion = props => (
  <>
    <Grid item xs={12}>
      <Typography variant={"h4"}>{props.title}</Typography>
    </Grid>
    <Grid item xs={12}>
      {props.players.map(player => (
        <Accordion key={player.id}>
          <AccordionSummary>
            <Typography>{player.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography>Date of birth:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{player.dateOfBirth}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Nationality:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{player.nationality}</Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Grid>
  </>
);

export default PlayersAccordion
