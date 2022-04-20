import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.Colors.background,
  },
  title: {
    flexGrow: 1,
    color: theme.Colors.Title,
    fontFamily: ["Pacifico", "cursive"],
  },
  btn: {
    color: theme.Colors.Title,
  },
}));

const Header = ({tc}) => {
  const classes = useStyles();


  return (
    <div>
      <AppBar className={classes.root} color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TinderSay
          </Typography>
          <Button color="inherit" className={classes.btn} onClick={() => tc()}>
            <WbSunnyIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
