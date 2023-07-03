import { useEffect, useState } from "react";
import productService from "../service/productService";

const useProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        productService.fetchProducts().then((response) => {
            setProduct(response)
        })
    }, [])

    return {
        products: product
    }
}

export default useProduct;