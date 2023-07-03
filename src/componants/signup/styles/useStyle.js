import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formbox:{
      width: "100%",
      marginTop: "5%",
    },
    form:{
      width: "30%",
      margin : "auto",
      padding : "20px",
      boxSizing : "border-box",
      border : "1px solid #c0c0c0",
      borderRadius: "10px",
      [theme.breakpoints.down("xs")]:{
        width: "100%",
        padding : "15px",
      }
    },
    feilds:{
      marginBottom: "10px"
    }
}));
  
export default useStyles;