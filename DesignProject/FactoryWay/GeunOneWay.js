export class GeunOneWay {
    calculateWay(start, destination) {
        return {route: `고속도로 경로: ${start}에서 ${destination}까지`, distance: 200};
    }
    LogOutput() {
        const BasicDistance = new GeunOneWay();
        const Basic = BasicDistance.calculateWay('서울', '부산', 200);
        console.log(Basic.route, Basic.distance, 'km');
        console.log('GeunOne-내비게이션 추천 경로');

        console.log('=================================================');
        const ShortNavigation = new ShortWay(BasicDistance);
        const ShortResult = ShortNavigation.calculateWay('서울', '부산');
        console.log(ShortResult.route, ShortResult.distance, 'km');

        const GoodViewNavigation = new GoodViewWay(BasicDistance);
        const GoodViewResult = GoodViewNavigation.calculateWay('서울', '부산');
        console.log(GoodViewResult.route, GoodViewResult.distance, 'km');
        console.log('=================================================');
    }
}

// 데코레이터 클래스들

export class ShortWay {
    constructor(navigation) {
        this.navigation = navigation;
    }

    calculateWay(start, destination) {
        const baseResult = this.navigation.calculateWay(start, destination);
        return {baseResult, route: `${baseResult.route} (최단 경로 추천)`, distance: baseResult.distance - 70};
    }
}

export class GoodViewWay {
    constructor(navigation) {
        this.navigation = navigation;
    }

    calculateWay(start, destination) {
        const baseResult = this.navigation.calculateWay(start, destination);
        return {baseResult, route: `${baseResult.route} (경치 좋은 경로 추천)`, distance: baseResult.distance + 100};
    }
}


