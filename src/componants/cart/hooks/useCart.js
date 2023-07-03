import { useEffect, useState } from "react";
import cartService from "../service/cartService";



const useCart = () => {
    const [cart, setCart] = useState([])
    const [reload, setReload] =useState(0)

    useEffect(() => {
        cartService.fetchCart().then((response) => {
            setCart(response)
            console.log(response)
        })
    }, [reload])

    return {
        cartItems: cart,
        setReload: setReload
    }
}

export default useCart;