import {GeunThrWay} from './GeunThrWay.js';

export class ThrFactory {
    static createNavigation() {
        return new GeunThrWay();
    }
}
