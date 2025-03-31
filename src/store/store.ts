import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import {IProduct, IStore} from "../models/IStore";
import StoreService from "../services/StoreService";
export default class Store {
    user = {} as IUser;
    stores = [] as IStore[];
    products = [] as IProduct[];


    constructor() {
        makeAutoObservable(this);
    }
    setProducts(products: IProduct[]) {
        this.products=products;
        this.saveState();
    }
    saveState() {
        const state = {
            user: this.user,
            stores: this.stores,
        };
        localStorage.setItem("appState", JSON.stringify(state));
    }
    async getProducts(storeId: any) {
        try {
            const response = await StoreService.getProducts(storeId);
            this.setProducts(response.data);

        } catch (error) {
            console.error('Помилка при отриманні товарів:', error);
        }
    }

}