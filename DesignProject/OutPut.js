import {ToggleCommand} from './Command/ToggleCommand.js';

// 네비게이션, 음악ON/Off, 비디오On/Off, 종료 등에 대한 입력을 받아 출력하는 코드
export function chooseNavigation(factory, rl, NavigationSystem) {

    console.log('*****Park의 종합 네비게이션*****');
    console.log('1. One 회사 네비게이션');
    console.log('2. Two 회사 네비게이션');
    console.log('3. Thr 회사 네비게이션');
    console.log('4. 음악 재생/종료');
    console.log('5. 비디오 재생/종료');
    console.log('6. 종료');

    rl.question('원하시는 네비게이션을 선택해주세요.: ', (choice) => {
        switch (choice) {
            case '1':
                const One = factory.createNavigation('OneFactory');
                One.OneNavigation.LogOutput();
                askToRunAgain(factory, rl, NavigationSystem);
                break;
            case '2':
                const Two = factory.createNavigation('TwoFactory');
                Two.TwoNavigation.LogOutput();
                askToRunAgain(factory, rl, NavigationSystem);
                break;
            case '3':
                const Thr = factory.createNavigation('ThrFactory');
                Thr.ThrNavigation.LogOutput();
                askToRunAgain(factory, rl, NavigationSystem);
                break;

            case '4' :
                const toggleMusicCommand = new ToggleCommand(NavigationSystem, '음악 재생', '음악 종료', NavigationSystem.toggleMusic);
                toggleMusicCommand.execute();
                askToRunAgain(factory, rl, NavigationSystem);
                break;

            case '5':
                const toggleVideoCommand = new ToggleCommand(NavigationSystem, '비디오 재생', '비디오 종료', NavigationSystem.toggleVideo);
                toggleVideoCommand.execute();
                askToRunAgain(factory, rl, NavigationSystem);
                break;

            case '6':
                console.log('종료중...');
                rl.close();
                break;
            default:
                throw new Error('잘못된 숫자, 문자, 특수기호 입력으로 인한 에러 발생');
        }
    });
    ``;
}

// 재입력 여부를 물어보는 함수 코드
export function askToRunAgain(factory, rl, NavigationSystem) {
    rl.question('다시 선택하시겠습니까 ? (Y/N): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            chooseNavigation(factory, rl, NavigationSystem);
        } else if (answer.toLowerCase() === 'n') {
            console.log('종료중...');
            rl.close();
        } else {
            throw new Error('잘못된 입력으로 인한 에러 발생');
        }
    });


}