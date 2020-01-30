export interface IAddress {
    city: string;
    country?: string;
    postcode?: number;
}
interface IOtherAddres {
    village: string
}

export interface IUser<T> {
    name: string;
    age: number;
    adress: T
}