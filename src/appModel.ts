export interface CartItem {
    sku: string;
    name: string;
    price: number;
}

export interface Discount {
    offer: string,
    discount?: number,
    minItem?: number
}

export type OffersModel = { [sku: string]: Discount }
