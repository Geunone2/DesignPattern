import {GeunOneWay} from '../FactoryWay/GeunOneWay.js';

export class OneFactory {
    static createNavigation() {
        const geunOneWay = new GeunOneWay();

        return {
            OneNavigation: geunOneWay,
        };
    }
}


