import {OneFactory} from './OneFactory.js';
import {TwoFactory} from './TwoFactory.js';
import {ThrFactory} from './ThrFactory.js';

const factoryList = {OneFactory, TwoFactory, ThrFactory};
export class ParkFactory {
    static createNavigation(type) {
        const factory = new factoryList[type];
        return factory.createNavigation();
    }

}

const main = () => {
    console.log("Park's 종합 네비게이션");
}

main();
