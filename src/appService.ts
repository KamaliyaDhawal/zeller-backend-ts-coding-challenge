import { CartItem, OffersModel } from "./appModel";
import { products } from "./products";
import { DiscountRules } from "./discountRules";
import { Offers } from "./offers";

export class AppService {
    private cart: CartItem[] = [];
    private offers: OffersModel = Offers;

    // Get all available discount
    private discountRules: DiscountRules = new DiscountRules();

    // fetch the product details
    public getProduct(item: string) {
        return products.find(product => product.sku === item);
    }

    // scan the product and add into cart
    public scan(item: string) {
        const product = this.getProduct(item);
        if (product) {
            this.cart.push(product);
        } else {
            console.log(`Product with SKU ${item} not found.`);
        }
    }

    // from the cart calculate the total amount
    public calculateTotal(): number {
        let total = 0;
        const groupedItems = this.groupCartItems();
        for (const group of groupedItems) {
            total += this.calculateTotalForGroup(group);
        }
        this.cart = [];
        return total;
    }

    // check the cart items and convert into same product group for the discount calculation
    private groupCartItems(): CartItem[][] {
        const groupedItems: { [key: string]: CartItem[] } = {};
        this.cart.forEach((item) => {
            if (!groupedItems[item.sku]) {
                groupedItems[item.sku] = [];
            }
            groupedItems[item.sku].push(item);
        });
        return Object.values(groupedItems);
    }

    // Check the offer and calculate total according to offer
    private calculateTotalForGroup(group: CartItem[]): number {
        const currentOffer = this.offers[group[0].sku] || { offer: null };
        switch (currentOffer.offer) {
            case 'by2get1':
                return this.discountRules.by2get1(group);

            case 'bulk':
                return this.discountRules.bulkDiscount(group, currentOffer.minItem, currentOffer.discount);

            default:
                return this.discountRules.withoutOffer(group);
        }
    }
}