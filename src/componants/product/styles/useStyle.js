import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    '& .MuiImageList-root':{
      justifyContent: 'center',
    },
    '& li':{
      marginTop:"10px",
    }

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));
  
export default useStyles;