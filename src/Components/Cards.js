import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Box,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: "center",
    padding: 12,
    color: theme.Colors.title,
    fontFamily: ["ABeeZee", "sans-serif"],
  },
  Author: {
    color: theme.Colors.title,
    textAlign: "right",
    paddingRight: 12,
    fontFamily: ["ABeeZee", "sans-serif"],
  },
  card: {
    background: `linear-gradient(145deg,  ${theme.Boxshadow.gradientOne}, ${theme.Boxshadow.gradientTwo})`,
    color: "white",
    borderRadius: 0,
    maxWidth: 450,
    height: "auto",
    width: 400,
  },
  largeIcon: {
    background: theme.Colors.background,
    borderRadius: "100%",
    padding: 15,
    fontSize: 60,
    boxShadow: `7.81px 7.81px 10px ${theme.btnShadow.plus}, -7.81px -7.81px 10px ${theme.btnShadow.min}`,
  },
  smallIcon: {
    background: theme.Colors.background,
    borderRadius: "100%",
    padding: 10,
    fontSize: 40,
    boxShadow: `7.81px 7.81px 10px ${theme.btnShadow.plus}, -7.81px -7.81px 10px ${theme.btnShadow.min}`,
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.text} variant="h5">
          “Your time is limited, so don’t waste it living someone else’s life.
          Don’t be trapped by dogma – which is living with the results of other
          people’s thinking.”
        </Typography>
        <Typography variant="subtitle1" className={classes.Author}>
          - steve jobs
        </Typography>
      </CardContent>
      <CardActions>
        <Box flexGrow={1} display="flex" justifyContent="center">
          <Box m={1}>
            <ReplayIcon className={classes.smallIcon} />
          </Box>
          <Box m={1}>
            <ClearIcon className={classes.largeIcon} />
          </Box>
          <Box m={1}>
            <FavoriteIcon className={classes.largeIcon} />
          </Box>
          <Box m={1}>
            <ShareIcon className={classes.smallIcon} />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Cards;

// background: linear-gradient(145deg, #1F2526, #171B1C);
// border-radius: 100%;
// box-shadow: 10.81px 10.81px 15px #141818, -10.81px -10.81px 15px #22282A;
