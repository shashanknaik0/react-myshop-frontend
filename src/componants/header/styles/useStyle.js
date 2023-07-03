import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",

    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(7),
      "&:hover": {
        color: "yellow",
        textDecoration: "none",
      },
      [theme.breakpoints.down("xs")]:{
        marginLeft: theme.spacing(4),
      }
    },
  }));
  
export default useStyles;