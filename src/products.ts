import { CartItem } from "./appModel";

// in real time this data will come from database and user can modified or add this data
export const products: CartItem[] = [
    { sku: "ipd", name: "Supr iPad", price: 549.99 },
    { sku: "mbp", name: "MacBook Pro", price: 1399.99 },
    { sku: "atv", name: "Apple TV", price: 109.50 },
    { sku: "vga", name: "VGA adapter", price: 30.00 }
];
