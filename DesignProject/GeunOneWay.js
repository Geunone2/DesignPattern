export class GeunOneWay {
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
        return {baseResult, route: `${baseResult.route} (최단 경로 추천)`, distance: baseResult.distance - 70};
    }
}

class GoodViewWay {
    constructor(navigation) {
        this.navigation = navigation;
    }

    calculateWay(start, destination) {
        const baseResult = this.navigation.calculateWay(start, destination);
        return {baseResult, route: `${baseResult.route} (경치 좋은 경로 추천)`, distance: baseResult.distance + 100};
    }
}

const geunOneWay = new GeunOneWay();
console.log('GeunOne-내비게이션 추천 경로');
console.log('=================================================');
const ShortNavigation = new ShortWay(geunOneWay);
const ShortResult = ShortNavigation.calculateWay('서울', '부산');
console.log(ShortResult.route, ShortResult.distance, 'km');

const GoodViewNavigation = new GoodViewWay(geunOneWay);
const GoodViewResult = GoodViewNavigation.calculateWay('서울', '부산');
console.log(GoodViewResult.route, GoodViewResult.distance, 'km');
console.log('=================================================');
