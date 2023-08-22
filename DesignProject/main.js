import {ParkFactory} from './Factory/ParkFactory.js';
import {NavigationSystem} from './Command/NavigationSystem.js';
import {chooseNavigation} from './OutPut.js';
import * as readline from 'node:readline'

function main() {
       const factory = new ParkFactory();
       const navigationSystem = new NavigationSystem();

       const rl = readline.createInterface({
           input: process.stdin,
           output: process.stdout,
           terminal: true,
       })

       chooseNavigation(factory, rl, navigationSystem);
}

main();

// readline으로 입력 받을 수 있음