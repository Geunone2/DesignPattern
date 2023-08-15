import {GeunThrWay} from '../FactoryWay/GeunThrWay.js';
export class ThrFactory {
    static createNavigation() {
        const geunThrWay = new GeunThrWay();

        return {
            ThrNavigation: geunThrWay,
        };
    }
}


