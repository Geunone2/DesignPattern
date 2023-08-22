import {GeunTwoWay} from '../FactoryWay/GeunTwoWay.js';
export class TwoFactory {
    static createNavigation() {
        const geunTwoWay = new GeunTwoWay();

        return {
            TwoNavigation: geunTwoWay,
        };
    }
}


