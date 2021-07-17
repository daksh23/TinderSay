// create own theme
import { createTheme } from "@material-ui/core/styles";

//define themes
const DarkTheme = createTheme({
  Colors: {
    background: "#1b2021",
    Title: "white",
  },
  Boxshadow: {
    plus: "#191d1e",
    min: "#1d2324",
    gradientOne: "#171B1C",
    gradientTwo: "#1F2526",
  },
  btnShadow: {
    plus: "#141818",
    min: "#22282A",
  },
});

export default DarkTheme;
