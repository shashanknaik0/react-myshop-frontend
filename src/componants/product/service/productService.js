import apiService from "../../../helpers/apiService";

export default {
    fetchProducts: async() =>{
        try {
            let response = await apiService.get("product/")
            return response.data
        } catch (err) {
            console.log(err)
            return []
        }
    },
    addCart: async(key) =>{
        await apiService.post("cart/",{
            productId : key
        })
        // return response.data
    }
}