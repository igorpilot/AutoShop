export interface IStore {
    _id?: any;
    userId: any;
    title: string;
    description: string;
    menu: string[];
    supplier: string[];
    rowsAll: IProduct[];
    rowsDelivery: IDelivery[];
    rowsCustomer: ICustomerOrder[];
    numberOfOrder: number;
}

export interface IProduct {
    id: string;
    image: string;
    category: string;
    name: string;
    description: string;
    brand: string;
    quantity: number;
    purchasePrice: number;
    purchaseTotal: number;
    profitPrice: number,
    sellingPrice: number;
    code: string;
}

export interface IDelivery {
    id: string;
    numberOfDocument: string;
    delivery: string;
    date: string;
    price: string;
    products: IProduct[];
}

export interface ICustomerOrder {
    id: string;
    nameOfCustomer: string;
    date: string;
    price: string;
    numberOfOrder: string;
    products: IProduct[];
}