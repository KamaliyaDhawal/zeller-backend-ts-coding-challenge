import { AppController } from "./appController";

const appController = new AppController();

// First Cart
appController.scan('atv');
appController.scan('atv');
appController.scan('atv');
appController.scan('vga');
appController.total();

// Second Cart
appController.scan('atv');
appController.scan('ipd');
appController.scan('ipd');
appController.scan('atv');
appController.scan('ipd');
appController.scan('ipd');
appController.scan('ipd');
appController.total();
