export class GeunTwoWay {
    calculateWay(start, destination) {
        return {route: `기본 경로: ${start}에서 ${destination}까지`, distance: 200};
    }
}

// 데코레이터 클래스들

class ShortWay {
    constructor(navigation) {
        this.navigation = navigation;
    }

    calculateWay(start, destination) {
        const baseResult = this.navigation.calculateWay(start, destination);
        return {baseResult, route: `${baseResult.route} (최단 경로 추천)`, distance: baseResult.distance - 80};
    }
}

class GoodViewWay {
    constructor(navigation) {
        this.navigation = navigation;
    }

    calculateWay(start, destination) {
        const baseResult = this.navigation.calculateWay(start, destination);
        return {baseResult, route: `${baseResult.route} (경치 좋은 경로 추천)`, distance: baseResult.distance + 90};
    }
}

const geunTwoWay = new GeunTwoWay();

console.log('GeunTwo-내비게이션 추천 경로');
console.log('=================================================');
const shortestRouteNavigation = new ShortWay(geunTwoWay);
const shortestResult = shortestRouteNavigation.calculateWay('서울', '부산');
console.log(shortestResult.route, shortestResult.distance, 'km');

const scenicRouteNavigation = new GoodViewWay(geunTwoWay);
const scenicResult = scenicRouteNavigation.calculateWay('서울', '부산');
console.log(scenicResult.route, scenicResult.distance, 'km');
console.log('=================================================');
