import React from "react";
import Box from "./Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.Colors.background,
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    cursor: "pointer",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box />
    </div>
  );
};

export default Home;
