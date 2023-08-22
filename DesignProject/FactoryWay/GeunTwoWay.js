export class GeunTwoWay {
    calculateWay(start, destination) {
        return {route: `일반국도 경로: ${start}에서 ${destination}까지`, distance: 200};
    }
    LogOutput() {
        const BasicDistance = new GeunTwoWay();
        const Basic = BasicDistance.calculateWay('서울', '부산', 200);
        console.log(Basic.route, Basic.distance, 'km');

        console.log('GeunTwo-내비게이션 추천 경로');
        console.log('=================================================');
        const shortestRouteNavigation = new ShortWay(BasicDistance);
        const shortestResult = shortestRouteNavigation.calculateWay('서울', '부산');
        console.log(shortestResult.route, shortestResult.distance, 'km');

        const scenicRouteNavigation = new GoodViewWay(BasicDistance);
        const scenicResult = scenicRouteNavigation.calculateWay('서울', '부산');
        console.log(scenicResult.route, scenicResult.distance, 'km');
        console.log('=================================================');
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
