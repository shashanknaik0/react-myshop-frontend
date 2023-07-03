import apiService from "../../../helpers/apiService";

export default {
    fetchCart: async() =>{
        try {
            let response = await apiService.get("cart/")
            return response.data
        } catch (err) {
            console.log(err)
            return []
        }
    },
    deleteCart: async(key,setReload) =>{
        await apiService.delete("cart/"+key)
        setReload(Math.random())
    }
}