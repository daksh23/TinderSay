// create own theme
import { createTheme } from "@material-ui/core/styles";

//define themes
const LightTheme = createTheme({
  Colors: {
    background: "#E0E5EC",
    title: "black",
  },
  Boxshadow: {
    plus: "#a3b1c6",
    min: "#F4FAFF",
    gradientOne: "E0E5EC",
    gradientTwo: "E0E5EC",
  },
  btnShadow: {
    plus: "#a3b1c6",
    min: "#F4FAFF",
  },
});

export default LightTheme;
