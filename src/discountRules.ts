import { CartItem } from "./appModel";

export class DiscountRules {

    // For by2get1 offer
    by2get1(group: CartItem[]) {
        const numberOfItems = group.length;
        const numberOfFreeItems = Math.floor(numberOfItems / 3);
        return numberOfItems * group[0].price - numberOfFreeItems * group[0].price;
    }

    // For bulk discount offer
    bulkDiscount(group: CartItem[], minItem: number = 1, discount: number = 0) {
        const pricePerItem = group.length > minItem ? group[0].price - discount : group[0].price;
        return group.length * pricePerItem;
    }

    // without offer total calculation
    withoutOffer(group: CartItem[]) {
        return group.reduce((acc, item) => acc + item.price, 0);
    }
}
