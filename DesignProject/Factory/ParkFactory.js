import {OneFactory} from './OneFactory.js';
import {TwoFactory} from './TwoFactory.js';
import {ThrFactory} from './ThrFactory.js';

export class ParkFactory {
    createNavigation(type) { // 새로운 객체 인스턴스 만들때 호출하는 메소드
        let navi = null;

        if (type === 'OneFactory') {
            navi = OneFactory.createNavigation();
        } else if (type === 'TwoFactory') {
            navi = TwoFactory.createNavigation();
        } else if (type === 'ThrFactory') {
            navi = ThrFactory.createNavigation();
        }
        return navi;
    }
}