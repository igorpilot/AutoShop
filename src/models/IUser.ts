import {IStore} from "./IStore";

export interface IUser {
    _id: any;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isActivated: boolean;
    stores: IStore[];
}