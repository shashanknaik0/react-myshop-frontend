import { Grid,Button } from "@material-ui/core";
import useCart from "./hooks/useCart";
import useStyles from "./styles/useStyle";
import DeleteIcon from '@material-ui/icons/Delete';
import cartService from "./service/cartService";

const Cart = ()=>{
    const {cartItems, setReload} = useCart();
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid item lg={6} md={6} sm={8} className={classes.makecenter}>
            {cartItems.map((items)=>(
                <div key={items.id} className={classes.cardHolder}>
                    <img className={classes.image}
                    src={items.imgURL}
                    alt={items.name}
                    />
                    <div className={classes.info}>
                        <h3 style={{marginBottom:"0"}}>{items.name}</h3>
                        <span>{items.description}</span>
                        <h4>{items.quantity} {items.price+" Rs"}</h4>
                        <div className={classes.buttons}>
                            <Button variant="contained"
                             color="primary" 
                             style={{}}
                             className={classes.button}
                             >buy</Button>
                            <Button variant="contained"
                             color="secondary" 
                             style={{width:"10px"}}
                             className={classes.button}
                             onClick={()=>{cartService.deleteCart(items.id,setReload);setReload(Math.random())}}
                             ><DeleteIcon /></Button>
                        </div>
                    </div>
                </div>
                
            ))}
        </Grid>
    </div>
    )
}

export default Cart;