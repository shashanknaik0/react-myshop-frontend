import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    margin:"10px auto"
  },
  makecenter:{
    margin:"0 auto"
  },
  image:{
    width:"150px",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]:{
      width:"120px",
      height:"120px"
    }
  },
  cardHolder:{
    borderRadius:"5px",
    padding:"10px",
    boxSizing:"border-box",
    display:"flex",
    boxShadow:"#939393 0px 0px 8px 2px",
    marginBottom:"10px",
  },
  info:{
    width:"100%"
  },
  buttons:{
    display:"flex",
    flexDirection: "row-reverse",
  },
  button:{
    marginLeft:"5px",
    [theme.breakpoints.down("xs")]:{
      padding:"5px",
      "& MuiButton-label":{
        margin:"0"
      }
    }
  }
}));
  
export default useStyles;