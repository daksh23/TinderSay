import React from "react";
import { animated, to as interpolate } from "@react-spring/web";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "absolute",
    width: "auto",
    height: "200px",
    willChange: "transform",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    touchAction: "none",
  },
  cardBox: {
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "auto",
    maxHeight: "570px",
    willChange: "transform",
    background: `linear-gradient(145deg,  ${theme.Boxshadow.gradientOne}, ${theme.Boxshadow.gradientTwo})`,
    boxShadow: `7px 7px 10px ${theme.Boxshadow.plus},  -7px -7px 10px ${theme.Boxshadow.min}`,
  },
}));

const CardBox = ({ x, y, rot, scale, i, bind, trans }) => {
  const classes = useStyles();

  return (
    <animated.div
      className={classes.box}
      key={i}
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
        }}
      >
        <div className={classes.cardBox}>
          <Cards />
        </div>
      </animated.div>
    </animated.div>
  );
};

export default CardBox;
