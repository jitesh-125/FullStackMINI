import axios from "axios";

const API_URL="http://localhost:1111";

class ProductService{
    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product)
    }

    getAllProduct(){
        return axios.get(API_URL+"/All")
    }

    getProductById(id){
        return axios.get(API_URL+"/"+id)
    }

    deleteProduct(id){
        return axios.delete(API_URL+"/deleteProduct/"+id)

    }

    editProduct(product){
        return axios.put(API_URL+"/editProduct/"+product.id,product)
    }

}
export default new ProductService