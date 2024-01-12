import { AppService } from "./appService";

export class AppController {
    private appService: AppService = new AppService();
    constructor() {
    }

    // scan your item in any sequence
    scan(item: string) {
        this.appService.scan(item);
    }

    // display total of your current cart
    total() {
        const total = this.appService.calculateTotal();
        console.log('Total expected: $' + total);
    }
}
