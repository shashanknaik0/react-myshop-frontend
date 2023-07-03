import useProduct from "./hooks/useProduct"
import useStyles from "./styles/useStyle"
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Tooltip
} from '@material-ui/core'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import productService from "./service/productService";

const Product = () => {

    const classes = useStyles()

    const { products } = useProduct()
    console.log(products)

    return (
        <div className={classes.root}>
            <ImageList rowHeight={180} >
                {products.map((product) => (
                    <ImageListItem key={product.pk} style={{ width: "250px" }}>
                        <img src={product.fields.imgURL} alt={product.fields.name} />
                        <ImageListItemBar
                            title={product.fields.name}
                            subtitle={<><span>{product.fields.description}</span>
                                <div style={{ marginTop: "5px" }}>{product.fields.quantity} {"₹" + product.fields.price} </div></>
                            }
                            actionIcon={
                                <Tooltip title="add to cart" placement="top" onClick={()=> productService.addCart(product.pk)}>
                                    <IconButton aria-label={`add ${product.fields.name} to cart`} className={classes.icon}>
                                        <AddCircleOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Product;