import {ParkFactory} from './Factory/ParkFactory.js';
import {chooseNavigation} from './Choose.js';
function main() {
    const factory = new ParkFactory();
    chooseNavigation(factory);

}

main();

// readline으로 입력 받을 수 있음