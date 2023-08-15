import * as readline from 'node:readline';
import {ParkFactory} from './Factory/ParkFactory.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const factory = new ParkFactory();

export function chooseNavigation() {
    console.log('*****Park의 종합 네비게이션*****');
    console.log('1. One 회사 네비게이션');
    console.log('2. Two 회사 네비게이션');
    console.log('3. Thr 회사 네비게이션');
    console.log('4. 종료');

    rl.question('원하시는 네비게이션을 선택해주세요.: ', (choice) => {
        switch (choice) {
            case '1':
                const One = factory.createNavigation('OneFactory');
                One.OneNavigation.LogOutput();
                askToRunAgain(factory, rl);
                break;
            case '2':
                const Two = factory.createNavigation('TwoFactory');
                Two.TwoNavigation.LogOutput();
                askToRunAgain(factory, rl);
                break;
            case '3':
                const Thr = factory.createNavigation('ThrFactory');
                Thr.ThrNavigation.LogOutput();
                askToRunAgain(factory, rl);
                break;
            case '4':
                console.log('종료중...');
                rl.close();
                break;
            default:
                throw new Error('잘못된 숫자, 문자, 특수기호 입력으로 인한 에러 발생');
        }
    });
}

export function askToRunAgain(factory, rl) {
    rl.question('다시 선택하시겠습니까 ? (Y/N): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            chooseNavigation(factory, rl);
        } else if (answer.toLowerCase() === 'n') {
            console.log('종료중...');
            rl.close();
        } else {
            throw new Error('잘못된 입력으로 인한 에러 발생');
        }
    });
}