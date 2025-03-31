
import $api from "../http";

export default class StoreService {
    static async getProducts(storeId:any) {
        return $api.post('/getProducts', { storeId });
    }
}